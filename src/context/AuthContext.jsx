import { useEffect, useState, createContext, useContext } from "react"
import { InsertarAdmin, InsertarEmpresa, MostrarTipoDocumentos, MostrarUsuarios, supabase, ExisteEmpresa, MostrarRolesXnombre } from "../index";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user == null) {
                setUser(null);
            } else {
                setUser(session?.user);
                console.log("session", session);
                insertarDatos(session?.user.id, session?.user.email);
            }
        });
        return () => {
            data.subscription;
        }
    }, []);
    const insertarDatos = async (id_auth, correo) => {
        const response = await MostrarUsuarios({ id_auth });
        if (response) {

        } else {
            const responseExiste = await ExisteEmpresa()

            if (!responseExiste) {
                const responseEmpresa = await InsertarEmpresa({ id_auth: id_auth });
                const responseTipoDoc = await MostrarTipoDocumentos({ id_empresa: responseEmpresa?.id });

                const responseRol = await MostrarRolesXnombre({ nombre: "Superadmin" })
                const pUser = {
                    id_tipodocumento: responseTipoDoc[0].id,
                    id_rol: responseRol?.id,
                    correo: correo,
                    fecharegistro: new Date,
                    id_auth: id_auth
                }
                console.log("pUser", pUser)
                await InsertarAdmin(pUser);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {
                children
            }
        </AuthContext.Provider>
    )
};
export const UserAuth = () => {
    return useContext(AuthContext);
}
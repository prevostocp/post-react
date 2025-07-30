import { supabase } from "../index";
import Swal from "sweetalert2"

const tabla = "tipodocumento";
export async function MostrarTipoDocumentos(id_empresa) {
    const { data, error } = await supabase.from(tabla)
        .select().eq("id_empresa", id_empresa);
    if (error) {
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops... Tipo doc",
        //     text: error.message
        // });
        // return;
    }
    return data;
}
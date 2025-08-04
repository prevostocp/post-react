import { Routes, Route } from "react-router-dom"
import { Home, Login, PaidToClick, UserAuth, ProtectedRoute, Configuraciones, Categorias } from "../index"

export function MyRoutes() {
    const { user } = UserAuth();
    return (
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}  >
                <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuraciones/categorias" element={<Categorias />} />
                <Route path="/ptc" element={<PaidToClick />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
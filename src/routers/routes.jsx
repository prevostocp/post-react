import { Routes, Route } from "react-router-dom"
import { Home, Login, PaidToClick, UserAuth, ProtectedRoute } from "../index"

export function MyRoutes() {
    const { user } = UserAuth();
    return (
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}  >
                <Route path="/" element={<Home />} />
                <Route path="/ptc" element={<PaidToClick />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
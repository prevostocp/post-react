import { supabase } from "../index";
import Swal from "sweetalert2";

const tabla = "roles";
export async function MostrarRolesXnombre(p) {
    console.log("Valor recibido:", p?.nombre);
    const { data, error } = await supabase.from(tabla)
        .select().eq("nombre", p?.nombre?.trim()).maybeSingle();
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
    }
    console.log("Data", data)
    return data;
}
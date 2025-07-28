import Swal from "sweetalert2";
import { supabase } from "../index";

const tabla = "usuarios";
export async function MostrarUsuarios(p) {
    const { data } = supabase.from(tabla)
        .select().eq("id_auth", p.auth)
        .maybeSingle();
    return data;
}

export async function InsertarAdmin(p) {
    const { error } = await supabase.from(tabla).insert(p);
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message
    });
}
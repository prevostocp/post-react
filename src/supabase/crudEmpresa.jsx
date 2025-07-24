import { supabase } from "../index"
import { Swal } from "sweetalert2"

const tabla = "empresa";
export async function InsertarEmpresa(p) {
    const {data, error} = await supabase.from(tabla).insert(p).select();
     if(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return;
    };
    return data;
}
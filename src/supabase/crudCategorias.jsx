import { supabase } from "../index";
import { Swal } from "sweetalert2"

export async function insertarCategorias(p, file) {
    const {error, data} = await supabase.rpc("insertarcategorias", p);
    if(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
    }
    const nuevo_id = data;
}

async function subirmage(idcategoria) {
    const ruta = "categorias/" + idcategoria;
    const {data, error} = await supabase.storage.from("imagenes")
                         .upload("", file, {
                            cacheControl: "0",
                            upsert: false
                         });
}
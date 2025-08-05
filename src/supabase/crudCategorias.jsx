import { supabase } from "../index";
import Swal from "sweetalert2";

const tabla = "categorias";
export async function InsertarCategorias(p, file) {
    const { error, data } = await supabase.rpc("insertarcategorias", p);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return;
    }
    const img = file.size;
    if (img != undefined) {
        const nuevo_id = data;
        const urlImagen = await subirmage(nuevo_id, file);
        const piconoeditar = {
            icono: urlImagen.publicUrl,
            id: nuevo_id
        }
        await editarIconoCategorias(piconoeditar);
    }
}

async function subirmage(idcategoria, file) {
    const ruta = "categorias/" + idcategoria;
    const { data, error } = await supabase.storage.from("imagenes")
        .upload(ruta, file, {
            cacheControl: "0",
            upsert: true
        });
    if (data) {
        const { data: urlImagen } = await supabase.storage.from("imagenes").getPublicUrl(ruta);
        return urlImagen;
    }
}

async function editarIconoCategorias(p) {
    const { error } = await supabase.from(tabla).update(p).eq("id", p.id);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return;
    }
}

export async function MostrarCategorias(p) {
    const { data } = await supabase.from(tabla).select().eq("id_empresa", p.id).order("id", { ascending: false });
    return data;
}

export async function BuscarCategorias(p) {
    const { data } = supabase.from(tabla).select().eq("id_empresa", p.id_empresa).ilike("nombre", "%" + p.descripcion + "%");
    return data;
}

export async function EliminarCategoria(p) {
    const { data, error } = supabase.from(tabla).delete().eq("id", p.id);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return;
    }
    if(p.icono != '-') {
        const ruta = "categorias/" + p.id;
        await supabase.storage.from("imagenes").remove([ruta]);
    }
}

export async function EditarCategorias(p, fileold, filenew) {
    const { error } = await supabase.rpc();
}

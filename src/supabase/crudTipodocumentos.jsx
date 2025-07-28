import { supabase } from "../index";

const tabla = "tipodocumento";
export async function MostrarTipoDocumentos(id_empresa) {
    const { data } = await supabase.from(tabla)
        .select().eq("id_empresa", id_empresa);
    return data;
}
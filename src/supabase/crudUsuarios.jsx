import { supabase } from "../index";

const tabla = "usuarios";
export async function MostrarUsuarios(p) {
    const {data} = supabase.from(tabla)
                           .select().eq("id_auth", p.auth)
                           .maybeSingle();
    return data;
}
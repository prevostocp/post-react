import { create } from "zustand"
import { supabase } from "../supabase/supabase.config"

export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: "google",
        })
        if(data) {
            
        }
    },
    logout: async () => {
        await supabase.auth.signOut();
    }
}))
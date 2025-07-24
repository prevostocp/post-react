import { create } from "zustand"
import { InsertarEmpresa } from "../index";

export const useEmpresatore = create((set) => ({
    insertarempresa: async (p) => {
        const response = await InsertarEmpresa(p);
        console.log(response);
    }
}));
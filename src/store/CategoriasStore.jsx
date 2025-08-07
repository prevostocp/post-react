import { create } from "zustand";
import { BuscarCategorias, EditarCategorias, EliminarCategoria, InsertarCategorias } from "../index";

export const useCategoriasStore = create((set, get) => ({
    buscador: "",
    setBuscador: (p) => {
        set({buscador: p})
    },
    datacategorias: [],
    categoriaItemSelect: [],
    parametros: {},
    mostrarcategorias: async (p) => {
        const response = await MostrarCategorias(p);
        set({parametros: p});
        set({datacategorias: response});
        set({categoriaItemSelect: response[0]});
        return response;
    },
    selectCategoria: (p) => {
        set({categoriaItemSelect: p});
    },
    insertarCategorias: async (p, file) => {
        await InsertarCategorias(p, file);
        const { mostrarcategorias } = get();
        const { parametros } = get();
        set(mostrarcategorias(parametros));
    },
    eliminarCategoria: async (p) => {
        await EliminarCategoria(p);
        const { mostrarcategorias } = get();
        const { parametros } = get();
        set(mostrarcategorias(parametros));
    },
    editarCategoria: async (p, fileold, filenew) => {
        await EditarCategorias(p, fileold, filenew);
        const { mostrarcategorias } = get();
        const { parametros } = get();
        set(mostrarcategorias(parametros));
    },
    buscarCategorias: async (p) => {
        const response = await BuscarCategorias(p);
        set({datacategorias: response});
        return response;
    }
}))
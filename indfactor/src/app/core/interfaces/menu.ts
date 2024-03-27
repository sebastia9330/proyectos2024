export interface menu{
    titulo?: string,
    catalogo?: string,
    id: string,
    fecha?: Date,
    conjunto: CONJUNTO
}

export enum CONJUNTO{
    todos,
    catalogPorCatalogo,
    festividad
}
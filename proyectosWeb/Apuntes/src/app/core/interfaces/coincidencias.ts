import { carrera } from "./carrera";

export interface usuario{
    nombre : string,
    universidad: string,
    carrera: carrera,
    materias:string[],
    metodoEstudio: string[]
}
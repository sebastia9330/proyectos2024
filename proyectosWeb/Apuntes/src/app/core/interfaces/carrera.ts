export interface carrera{
    nombre:string,
    universidad:string,
    materias:materia[]
}

export interface materia{
    nombre:string,
    seccion:string,
    estudia:boolean
}

/* export const contadorUniv :carrera = {
    nombre: "Ingenieria en Sistemas",
    universidad: "Los Libertadores",
    materias: [
        {
            nombre: "Contabilidad 1",
            seccion: "2"
        },
        {
            nombre: "Matematicas 2",
            seccion: "1"
        },
        {
            nombre: "Programacion Basica",
            seccion: "3"
        }
    ]
} */


import { carrera } from "./carrera";

export interface usuario{
    nombre : string,
    universidad: string,
    carrera: carrera,
    materias:string[],
    metodoEstudio: string[]
}

export const listaTodasPersonas: usuario[] = [
    {
        nombre : "Dilza Robles",
        universidad: "Los Libertadores",
        carrera: {
            nombre: "Ingenieria en Sistemas",
            universidad: "Los Libertadores",
            materias: [
            {
                nombre: "Contabilidad 1",
                seccion: "2",
                estudia:false
            },
            {
                nombre: "Matematicas 2",
                seccion: "1",
                estudia:true
            },
            {
                nombre: "Programacion Basica",
                seccion: "3",
                estudia:true
            }
        ]
    },
    materias:["Contabilidad 1","Programacion Basica"],
    metodoEstudio: ["presencial"],
    },
    {
        nombre : "Sebastian Carrero",
        universidad: "Los Libertadores",
        carrera: {
            nombre: "Ingenieria en Sistemas",
            universidad: "Los Libertadores",
            materias: [
            {
                nombre: "Contabilidad 1",
                seccion: "2",
                estudia:false
            },
            {
                nombre: "Matematicas 2",
                seccion: "1",
                estudia:true
            },
            {
                nombre: "Programacion Basica",
                seccion: "3",
                estudia:true
            }
        ]
    },
    materias:["Contabilidad 1","Programacion Basica"],
    metodoEstudio: ["virtual"],
    },
    {
        nombre : "Samuel Carrero",
        universidad: "Los Libertadores",
        carrera: {
            nombre: "Ingenieria en Sistemas",
            universidad: "Los Libertadores",
            materias: [
            {
                nombre: "Contabilidad 1",
                seccion: "2",
                estudia:false
            },
            {
                nombre: "Matematicas 2",
                seccion: "1",
                estudia:true
            },
            {
                nombre: "Programacion Basica",
                seccion: "3",
                estudia:true
            }
        ]
    },
    materias:["Contabilidad 1","Matematicas 2"],
    metodoEstudio: ["virtual"],
    }
]

export const currentUserDefault: usuario = {
    nombre: "Sebastian Carrero",
    universidad: "Los Libertadores",
    carrera: {
        nombre: "Ingenieria en Sistemas",
        universidad: "Los Libertadores",
        materias: [
        {
            nombre: "Contabilidad 1",
            seccion: "2",
            estudia: false
        },
        {
            nombre: "Matematicas 2",
            seccion: "1",
            estudia: true
        },
        {
            nombre: "Programacion Basica",
            seccion: "3",
            estudia: true
        }
    ]
},
    metodoEstudio: [],
    materias:["Contabilidad 1","Programacion Basica"]
}
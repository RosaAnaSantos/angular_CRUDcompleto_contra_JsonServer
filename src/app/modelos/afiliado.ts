export interface Afiliado{
    id: number;
    dni:number;
    nombre: string;
    apellidos:string;
    edad:number;
    profesion:string;
    ideologia:string;
    tratamiento:string;
    cuota: number;
    status: string;
    pass:string;
    votos:number;
}


/*
export class Afiliado implements IAfiliado{
   
    id: number;
    nombre: string;
    apellidos:string;
    sexo:string;
    cuota: number;
    status: string;
    constructor(
        id: number,
    nombre: string,
    apellidos:string,
    sexo:string,
    cuota: number,
    status: string
    ) {}

}
*/
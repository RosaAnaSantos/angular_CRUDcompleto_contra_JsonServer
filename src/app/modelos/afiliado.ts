export interface Afiliado{
    id: number;
    nombre: string;
    apellidos:string;
    edad:number;
    profesion:string;
    ideologia:string;
    tratamiento:string;
    cuota: number;
    status: string;
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
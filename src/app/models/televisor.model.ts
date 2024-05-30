export class Televisor {
    id?: number;
    marca: string;
    tamanoPantalla: Resolucion;
    descripcion: string;
    funcionesAdicionales: string;
    precio: number;
    descripcionGarantia: string;
    fechaCreacion: string;

    constructor(
        marca: string,
        tamanoPantalla: Resolucion,
        descripcion: string,
        funcionesAdicionales: string,
        precio: number,
        descripcionGarantia: string,
        fechaCreacion: string,
        id?: number
    ) {
        this.id = id;
        this.marca = marca;
        this.tamanoPantalla = tamanoPantalla;
        this.descripcion = descripcion;
        this.funcionesAdicionales = funcionesAdicionales;
        this.precio = precio;
        this.descripcionGarantia = descripcionGarantia;
        this.fechaCreacion = fechaCreacion;
    }
}

// Ejemplo de enumeración Resolucion
export enum Resolucion {
    HD = 'HD',
    FULL_HD = 'FULL_HD',
    K4 = '4K'
}

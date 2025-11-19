import { productos } from "../data/info";

export async function getProductoService(id: number): Promise<string>{

    const promesa: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const Productos = productos.find( e => e.id === id)?.nombre

            if(Productos) {
                resolve(Productos);
            } else {
                reject(`productos con id ${id} no existe`)
            }
        }, 800);
    });
    return promesa;
}
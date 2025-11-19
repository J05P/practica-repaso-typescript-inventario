import { getProductoService } from "./services/getProductoService.ts";

const btn = document.getElementById("userNumber") as HTMLButtonElement;
const salida = document.getElementById("usuarios") as HTMLDivElement;

function getIdFromButton(): number |undefined {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");

    const input = prompt("Introduce un número de usuario (1-3)");
    const id = Number(input);
    if(Number.isNaN(id)){
        alert("No has introduccido un número");
        return;
    }
    return id;
}

function findProducto(id: number): void{
    getProductoService(id)
        .then((productos) => {
            console.log("PROMISE RESOLVE, PASO POR EL THEN");
            console.log(productos, "productos");
            salida.textContent = `El producto buscado es: ${productos}`;
        })
        .catch((error) => {
            console.log("PROMISE REJECT, PASO POR EL CATCH");
            console.log(error, "error");
            salida.textContent = error;
        })
}



btn.addEventListener("click", () =>{
    console.log("----------------------------------------");
    console.log("Llamada a la función ADD EVENT LISTENER");
    console.log("----------------------------------------");

    try {
        const id = getIdFromButton();
        if(id!= undefined) findProducto(id);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado"
        salida.textContent = message;
    }
});
const tiket = 2500;

let descEstudiante = 0.80;
let descJubilado = 0.50;
let descVisitante = 0.15;

const cant = document.getElementById("cantidad");
const cat = document.getElementById("categoria");
const totalAPagar = document.getElementById("resultado");
const boton = document.getElementById("resumen");

function calcularPago() {
    let total = cant.value * tiket;

    switch (cat.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            totalAPagar.textContent = `Total a Pagar: $ ${total}`
            break;

        case "jubilado":
            total = total - (total * descJubilado);
            totalAPagar.textContent = `Total a Pagar: $ ${total}`
            break;

        case "visitante":
            total = total - (total * descVisitante);
            totalAPagar.textContent = `Total a Pagar: $ ${total}`
            break;
        
        default:
            total = total
            totalAPagar.textContent = `Total a Pagar: $ ${total}`
            break;
    }

    
}


boton.addEventListener("click", (e) =>{
    e.preventDefault()
    calcularPago()
});
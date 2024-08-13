// Objeto que contiene los porcentajes de impuestos
const impuestos = {
    IVA: 0.21,        // Impuesto al Valor Agregado
    PAIS: 0.08,       // Impuesto PAIS
    GANANCIAS: 0.30,  // Impuesto a las Ganancias
    PROVINCIA: 0.02   // Impuesto Provincial
};

// Función para calcular el costo con impuesto
function calcularCostoConImpuesto(monto) {
    // Comentario: Cambio de constantes individuales a un objeto para los impuestos
    let montoConImpuesto = monto + (monto * impuestos.IVA) + (monto * impuestos.PAIS) + (monto * impuestos.GANANCIAS) + (monto * impuestos.PROVINCIA);
    return montoConImpuesto; 
}

// Array para almacenar el historial de cálculos
let historial = []; // Comentario: Se agregó un array para almacenar el historial de cálculos
let continuar = true; 

do {
    let montoOriginal = parseFloat(prompt('Ingrese el monto de la compra en el extranjero'));

    if (isNaN(montoOriginal) || montoOriginal <= 0) {
        console.log('Por favor, ingrese un monto válido.');
        continue;
    }

    let montoConImpuesto = calcularCostoConImpuesto(montoOriginal);

    // Comentario: Se agregó el cálculo al historial
    historial.push({
        montoOriginal: montoOriginal,
        montoConImpuesto: montoConImpuesto
    });

    console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
    // Comentario: Se cambiaron los cálculos de impuestos para usar el objeto `impuestos`
    console.log(`IVA (21%): $${(montoOriginal * impuestos.IVA).toFixed(2)}`);
    console.log(`PAIS (8%): $${(montoOriginal * impuestos.PAIS).toFixed(2)}`);
    console.log(`GANANCIAS (30%): $${(montoOriginal * impuestos.GANANCIAS).toFixed(2)}`);
    console.log(`Provincia (2%): $${(montoOriginal * impuestos.PROVINCIA).toFixed(2)}`);
    console.log(`Monto total a pagar con el impuesto del 61%: $${montoConImpuesto.toFixed(2)}`);

    let calcularDeNuevo = prompt('¿Desea calcular nuevamente? Escriba "Sí" o "No"').toLowerCase();
    if (calcularDeNuevo === 'no') {
        continuar = false;
        console.log('Gracias por utilizar la calculadora de impuestos');
    } else if (calcularDeNuevo !== 'sí' && calcularDeNuevo !== 'si') {
        console.log('Debe ingresar "Sí" o "No"');
    }
} while (continuar);

// Comentario: Se agregó la funcionalidad para mostrar el historial de cálculos
console.log("Historial de cálculos:");
historial.forEach((item, index) => {
    console.log(`${index + 1}. Monto original: $${item.montoOriginal.toFixed(2)}, Monto con impuesto: $${item.montoConImpuesto.toFixed(2)}`);
});

function calcularCostoConImpuesto(monto) {
    const IVA = 0.21;
    const PAIS = 0.08;
    const GANANCIAS = 0.30;
    const PROVINCIA = 0.02;

    let montoConImpuesto = monto + (monto * IVA) + (monto * PAIS) + (monto * GANANCIAS) + (monto * PROVINCIA);
    return montoConImpuesto;
}

let continuar = true;

do {
    let montoOriginal = parseFloat(prompt('Ingrese el monto de la compra en el extranjero'));

    if (isNaN(montoOriginal) || montoOriginal <= 0) {
        console.log('Por favor, ingrese un monto válido.');
        continue;
    }

    let montoConImpuesto = calcularCostoConImpuesto(montoOriginal);

    console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
    console.log(`IVA (21%): $${(montoOriginal * 0.21).toFixed(2)}`);
    console.log(`PAIS (8%): $${(montoOriginal * 0.08).toFixed(2)}`);
    console.log(`GANANCIAS (30%): $${(montoOriginal * 0.30).toFixed(2)}`);
    console.log(`Provincia (2%): $${(montoOriginal * 0.02).toFixed(2)}`);
    console.log(`Monto total a pagar con el impuesto del 61%: $${montoConImpuesto.toFixed(2)}`);

    let calcularDeNuevo = prompt('¿Desea calcular nuevamente? Escriba "Sí" o "No"').toLowerCase();
    if (calcularDeNuevo === 'no') {
        continuar = false;
        console.log('Gracias por utilizar la calculadora de impuestos');
    } else if (calcularDeNuevo !== 'sí' && calcularDeNuevo !== 'si') {
        console.log('Debe ingresar "Sí" o "No"');
    }
} while (continuar);

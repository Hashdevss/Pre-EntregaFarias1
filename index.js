let montoOriginal = 0;
let montoConImpuesto = 0;

datosDelUsuario();

function datosDelUsuario() {
    montoOriginal = parseFloat(prompt('Ingrese el monto de la compra en el extranjero'));
    montoConImpuesto = calcularCostoConImpuesto(montoOriginal);

    console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
    console.log(`IVA (21%): $${(montoOriginal * 0.21).toFixed(2)}`);
    console.log(`PAIS (8%): $${(montoOriginal * 0.08).toFixed(2)}`);
    console.log(`GANANCIAS (30%): $${(montoOriginal * 0.30).toFixed(2)}`);
    console.log(`Provincia (2%): $${(montoOriginal * 0.02).toFixed(2)}`);
    console.log(`Monto total a pagar con el impuesto del 61%: $${montoConImpuesto.toFixed(2)}`);

    let calcularDeNuevo = prompt('¿Desea calcular nuevamente? Escriba "Sí" o "No"').toLowerCase();
    realizarCalculoNuevamente(calcularDeNuevo);
}

function calcularCostoConImpuesto(monto) {
    let iva = 0.21;
    let pais = 0.08;
    let ganancias = 0.30;
    let provincia = 0.02;
    let montoConImpuesto = monto + (monto * (iva + pais + ganancias + provincia));
    return montoConImpuesto;
}

function realizarCalculoNuevamente(respuesta) {
    if (respuesta === 'sí' || respuesta === 'si') {
        datosDelUsuario();
    } else if (respuesta === 'no') {
        console.log('Gracias por utilizar la calculadora de impuestos');
    } else {
        console.log('Debe ingresar "Sí" o "No"');
        let calcularDeNuevo = prompt('¿Desea calcular nuevamente? Escriba "Sí" o "No"').toLowerCase();
        realizarCalculoNuevamente(calcularDeNuevo);
    }
}

const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

precioSpan.innerHTML = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
    currencySign: 'accounting',
    maximumFractionDigits: 2,
}).format(precio);

function calcularPrecioTotal(cantidad, precio) {
    const amount = Number(cantidad);
    const price = Number(precio);

    const total = price * amount;

    return Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'CLP',
        currencySign: 'accounting',
        maximumFractionDigits: 2,
    }).format(total);

}

function aumentar() {
    const precioTotalElement = document.querySelector('.valor-total');
    const cantidadElement = document.querySelector('.cantidad');
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);
    const nuevaCantidad = cantidadValue + 1;

    cantidadElement.innerHTML = nuevaCantidad;

    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);

    precioTotalElement.innerHTML = valorTotal;

    console.log(valorTotal)
}

function restar() {
    const precioTotalElement = document.querySelector('.valor-total');
    const cantidadElement = document.querySelector('.cantidad');
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);

    if (cantidadValue > 0) {
        const nuevaCantidad = cantidadValue - 1;
        cantidadElement.innerHTML = nuevaCantidad;

        const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
        precioTotalElement.innerHTML = valorTotal;
    }

    
}




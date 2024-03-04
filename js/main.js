// Variables
const tasaCambio = 1015; // Tasa de cambio (1 USD = 1015 ARS)

// Función para convertir el monto en dólares a ARS
function convertirMoneda() {
    const montoUsd = parseFloat(document.getElementById("montoUsd").value);
    if (!isNaN(montoUsd)) {
        const montoArs = montoUsd * tasaCambio;
        document.getElementById("resultado").textContent = `El monto en ARS es: ${montoArs.toFixed(2)}`;
    } else {
        alert("Por favor, ingrese un monto válido en dólares.");
    }
}
function calcularIngreso() {
    const sueldoBrutoInput = document.getElementById('bruto');
    const sueldoBruto = sueldoBrutoInput.value;

    if (sueldoBruto) {
        const obraSocial = sueldoBruto * 0.03;
        const jubilacion = sueldoBruto * 0.11;
        const sueldoNeto = sueldoBruto - obraSocial - jubilacion;

        document.getElementById('result').textContent = `Sueldo Neto: $${sueldoNeto.toFixed(2)}`;
        sueldoBrutoInput.value = ''; // Limpiar el input después del cálculo
    } else {
        document.getElementById('result').textContent = 'Por favor, ingrese un sueldo bruto válido.';
    }
}

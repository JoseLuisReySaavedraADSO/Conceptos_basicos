addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let cant = document.getElementById("num1").value;
            total = cant*4910
            document.getElementById("res1").innerHTML = `La cantidad en pesos colombianos es de ${total} pesos`;
        }
    })
})
addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validar();
        function validar(){
            let cant = document.getElementById("num1").value;
            total = (cant*1.8)+32
            document.getElementById("res1").innerHTML = `La temperatura en F° es ${total}`;
        }
    })
})
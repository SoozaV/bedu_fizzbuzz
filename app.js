let fizzbuzz = document.getElementById("fizzbuzz"),
    codigo = document.getElementById("codigo"),
    btn_iniciar = document.getElementById("iniciar"),
    btn_mostrar = document.getElementById("mostrarCodigo")

function fizzBuzz(){
    let rango = document.getElementById("rango")
    let valorRango = rango.value
    fizzbuzz.innerHTML = ""

    if(valorRango < 10 || valorRango > 100 || valorRango % 1 !== 0){
        fizzbuzz.innerHTML = "<p>Por favor introduce un valor entero entre 10 y 100"
    } else {
        for(let i = 1; i <= valorRango; i++){
            switch(true){
                case ((i % 3 == 0) && (i % 5 == 0)):
                    fizzbuzz.innerHTML += '<p>' + i + ' <span class="fizz">Fizz</span><span class="buzz">Buzz</span></p>'
                    console.log(i, "FizzBuzz")
                    break
                case (i % 3 == 0):
                    fizzbuzz.innerHTML += '<p>' + i + ' <span class="fizz">Fizz</span></p>'
                    console.log(i, 'Fizz')
                    break
                case (i % 5 == 0):
                    fizzbuzz.innerHTML += '<p>' + i + ' <span class="buzz">Buzz</span></p>'
                    console.log(i, "Buzz")
                    break
                default:
                    fizzbuzz.innerHTML += "<p>" + i + "</p>"
                    console.log(i)
            }
        }
    }
    codigo.className = "codigo oculto"
    fizzbuzz.className = ""
}

function mostrarCodigo(){
    codigo.classList.toggle("mostrar")
    fizzbuzz.classList.toggle("oculto")
}

btn_iniciar.addEventListener("click", fizzBuzz)
btn_mostrar.addEventListener("click", mostrarCodigo)
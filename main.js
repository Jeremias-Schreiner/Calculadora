let limiteDisplay = 14;

for(let i = 0; i <10; i++ ){
    document.getElementById('button_id_'+i).addEventListener(
        "click",
        (e)=>{
            const display = document.getElementById("display_p_id");
            if (display.innerHTML.length < limiteDisplay)
                display.innerHTML += i
        }
    )
}

for(let i = 1; i <5; i++ ){
    const operador = document.getElementById('operador_'+i)
    operador.addEventListener(
        "click",
        (e)=>{
            operadores = '+-*/'
            const display = document.getElementById("display_p_id");
            if (display.innerHTML.length < limiteDisplay && !(operadores.includes(display.innerHTML[display.innerHTML.length-1]))){
                display.innerHTML += operador.innerHTML
            }
        }
    )
}

document.getElementById('boton_borrar_todo').addEventListener(
    'click',
    (e)=>{
        document.getElementById("display_p_id").innerHTML = ''
    }
)

document.getElementById('boton_borrar').addEventListener(
    'click',
    (e)=>{
        const display = document.getElementById("display_p_id")
        display.innerHTML = display.innerHTML.slice(0,-1)
    }
)

document.getElementById("boton_punto").addEventListener(
    "click",
    (e)=>{
        const display = document.getElementById("display_p_id");
        if (display.innerHTML.length < limiteDisplay && !(display.innerHTML.includes(".")) ){
            display.innerHTML += "."
        }
    }
)
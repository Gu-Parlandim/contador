let dataInformada = document.querySelector("#input-data")
let intevalo


function inicioContador(){
    let finaldata = trasformarData()
    if(finaldata.segundos < 1){
        alert("ERRO! informe uma DATA maior que a atual.")
    }
    else{
        gerandoHTML()
        intevalo = setInterval(function(){
            let finaldata = trasformarData()
            atualizadoTela(finaldata)
        },1000)
    }
}



function trasformarData(){
    let dataCompleta = new Date(`${dataInformada.value} 00:00:00`)
    const diaAtual = new Date()
    const diferenca = dataCompleta - diaAtual
    const dias = Math.floor(diferenca /1000 /60 /60 / 24)
    const horas = Math.floor(diferenca /1000 /60 /60) % 24
    const minutos = Math.floor(diferenca /1000 /60) % 60
    const segundos = Math.floor(diferenca /1000) % 60
    return {dias, horas, minutos, segundos}
}


function doisDigitos(numero){
    if(numero < 10){
        return "0" + numero
    }
    else{
        return numero
    }
}


function gerandoHTML(){
    let corpo = document.querySelector("body")
    corpo.classList.remove("inicio")
    corpo.innerHTML = `<header>
    <div class="logo">
        <p>Contador</p>
    </div>
    <div>
        <button type="submit" onclick="inicioHTML()">Reiniciar</button>
    </div>
    </header>
    <main class="container-principal">
    <h1>Faltam</h1>
    <div class="data-time">
        <div id="Dias">
            <h3>00</h3>
            <p>Dias</p>
        </div>
        <div id="Horas">
            <h3>00</h3>
            <p>Horas</p>
        </div>
        <div id="Minutos">
            <h3>00</h3>
            <p>Minutos</p>
        </div>
        <div id="Segundos">
            <h3>00</h3>
            <p>Segundos</p>
        </div>
    </div>
    </main>`
}

function atualizadoTela(data){
    document.querySelector("#Dias h3").innerHTML = `${doisDigitos(data.dias)}`
    document.querySelector("#Horas h3").innerHTML = `${doisDigitos(data.horas)}`
    document.querySelector("#Minutos h3").innerHTML = `${doisDigitos(data.minutos)}`
    document.querySelector("#Segundos h3").innerHTML = `${doisDigitos(data.segundos)}`
}


function inicioHTML(){
    clearInterval(intevalo)
    let corpo = document.querySelector("body")
    corpo.classList.add("inicio")
    corpo.innerHTML = `
    <main class="container-principal">
        <h1 id="title">Contador</h1>
        <p>Informe uma data</p>
        <input type="date" name="" id="input-data" >
        <input type="button"  id="botao-iniciar" onclick="inicioContador()" value=" Iniciar contagem">
    </main>
    `
    dataInformada = document.querySelector("#input-data")
}


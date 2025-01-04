const key = "b034fdfa56a53e6bda9ea6e734e70301";

function colocarDados(dados) {
    
    console.log(dados);

    const city = document.querySelector(".info").innerHTML = `Tempo em ${dados.name}`;
    const clima = document.querySelector(".clima").innerHTML = dados.weather[0].description;
    const icon = document.querySelector(".icon-pre").src = "https://openweathermap.org/img/wn/10n.png";
    const umidade = document.querySelector(".humidity").innerHTML ="Umidade: " + dados.main.humidity + " %";
    const pemperatura = document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C";
    
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    colocarDados(dados)
}

function clickButton() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)   
}
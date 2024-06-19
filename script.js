 const botao = document.querySelector("#botao"); 

const getDados = async () => {
    
    const apiClimaURL = 'https://api.openweathermap.org/data/2.5/weather?lat=-21.67&lon=-49.74&appid=5bef3934ab1735139bf244c55863a8a7';
    const res = await fetch(apiClimaURL);
    const data = await res.json();
    
    console.log(data);
       
    document.getElementById("cidade").innerHTML = data.name;
    document.getElementById("vento").innerHTML = data.wind.speed, + " m/s";
    document.getElementById("tempMax").innerHTML = (data.main.temp_max - 273.15).toFixed(2) + " °C";
    document.getElementById("tempMin").innerHTML = (data.main.temp_min - 273.15).toFixed(2) + " °C";
    document.getElementById("umidade").innerHTML = data.main.humidity + " %";
    document.getElementById("nuvens").innerHTML = data.weather[0].description;
}

botao.addEventListener("click",()=>{
    getDados();
});
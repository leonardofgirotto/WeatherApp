const key = "905867060c1ac7dc2428403182de4c84"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function bringDataOnScreen(date){
    document.querySelector(".city").innerHTML = "Tempo em " + date.name
    document.querySelector(".temp").innerHTML = Math.floor(date.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = capitalizeFirstLetter(date.weather[0].description)
    document.querySelector(".moisture").innerHTML = "Umidade: " + date.main.humidity + "%"
    document.querySelector(".img-forecast").src = "https://openweathermap.org/img/wn/" + date.weather[0].icon + ".png"
}

async function searchCity(city){

    const date = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    console.log(date)

    bringDataOnScreen(date)
}

function buttonClick() {
    const city = document.querySelector(".city-input").value

    searchCity(city)
}

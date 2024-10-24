async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = '399ec39983214462aae143929242410'; 

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found or API limit exceeded");
        }
        const data = await response.json();

        document.getElementById("high").textContent = `Current Temp: ${data.current.temp_c}°C`;
        document.getElementById("low").textContent = `Feels Like: ${data.current.feelslike_c}°C`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.current.wind_kph} kph`;
    } catch (error) {
        alert(error.message);
    }
}

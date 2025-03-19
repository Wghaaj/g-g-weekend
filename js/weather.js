document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "009626f11f2cafda281395cfef161799";
    const lat = 55.8642;
    const lon = -4.2518;
    const cnt = 16;
    const apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}&units=metric`;

    let weatherData = [];
    let currentIndex = 0;
    let cardsPerView = getCardsPerView(); // Dynamically set cards per view

    async function getWeather() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Weather data not available");
            const data = await response.json();
            weatherData = data.list;
            displayWeather();
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }

    function getCardsPerView() {
        if (window.innerWidth <= 450) {
            return 1; // show 1 card for small phone screens
        } else if (window.innerWidth <= 680) {
            return 2; // Show 2 cards for phone screens
        } else if (window.innerWidth <= 1024) {
            return 3; // show 3 cards for tablet screen
        }
        
        return 5; // Default to 5 cards for larger screens
    }

    function displayWeather() {
        const forecastContainer = document.getElementById("weather-forecast");
        forecastContainer.innerHTML = ""; // Clear previous data

        for (let i = currentIndex; i < currentIndex + cardsPerView && i < weatherData.length; i++) {
            const day = weatherData[i];
            const date = new Date();
            date.setDate(date.getDate() + i);

            const weatherCard = document.createElement("div");
            weatherCard.classList.add("weather-card");
            weatherCard.innerHTML = `
                <h3 class="violet">${date.toDateString()}</h3>
                <p>🌡️ ${Math.round(day.temp.day)}°C </p>
                <p>(Min: ${Math.round(day.temp.min)}°C,</p>
                <p>Max: ${Math.round(day.temp.max)}°C)</p>
                <p>☁️ ${day.weather[0].description}</p>
                <img class="weather-icon" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
            `;
            forecastContainer.appendChild(weatherCard);
        }
    }

    document.getElementById("prev").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= cardsPerView;
            displayWeather();
        }
    });

    document.getElementById("next").addEventListener("click", function () {
        if (currentIndex + cardsPerView < weatherData.length) {
            currentIndex += cardsPerView;
            displayWeather();
        }
    });

    // Listen for screen resize to adjust cards per view
    window.addEventListener("resize", function () {
        cardsPerView = getCardsPerView();
        displayWeather();
    });

    getWeather();
});
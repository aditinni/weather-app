let speech = new SpeechSynthesisUtterance();
        
function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "bca5cff13840902244cd5cccddf97709"; // Replace with your own API key from OpenWeatherMap
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
           
                var temperature = data.main.temp;
                var humidity = data.main.humidity;
                var description = data.weather[0].description;
                var icon =data.weather[0].icon;
                var wind = data.wind.speed;
                speech.text=`Hi I am the weather man I am going to tell you the weather of ${city} `
               
                setTimeout(() => {
                    speech.text = `The temperature of ${city} is ${temperature} degrees Celsius, humidity is ${humidity}, and the wind speed is ${wind} meters per second and the description of weather is ${description}`;
                    window.speechSynthesis.speak(speech)
                  
                    
                }, 2000);
              

                window.speechSynthesis.speak(speech)
                weatherInfo.innerHTML = `<p class="details">Temperature: ${temperature}°C</p>
                            
                                        <p class="details">Description: ${description}</p>
                                        <p class="details">Humidity: ${humidity}</p>
                                        <p class="details"> speed: ${wind}</p> `;
          
        })
     
}
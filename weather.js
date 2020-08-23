class Weather {
    constructor(city) {
        this.apiKey = "4da4864f60e6213dbee5bc3a6d6ce8eb";
        this.city = city;

    }

    // Fetcg weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;

    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}
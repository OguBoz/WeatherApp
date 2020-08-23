// init weather object
const ui = new UI();
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
// Change location event
document.getElementById('w-change-btn').addEventListener("click", (e) => {
    const city = document.getElementById("city").value;

    weather.changeLocation(city);

    // set location in storage
    storage.setLocationData(city);

    // Get and display weather
        weather.getWeather()            
        .then(results => {
            console.log(results);
            ui.paint(results)
        })
        .catch(err => {
            console.log(err);
        });
        // Close modal
        $("#locModal").modal('hide');

});



// weather load func

    weather.getWeather()
            .then(results => {
                console.log(results);
                ui.paint(results)
            })
            .catch(err => {
                console.log(err);
            });


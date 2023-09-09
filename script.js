const button = document.getElementById('get_location_button');

async function getData(lat, long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bd6c4eb1e5314312ab8213531230809&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}

async function gotlocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedtoget() {
    console.log('There is problem in getting location');
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(gotlocation, failedtoget);
});
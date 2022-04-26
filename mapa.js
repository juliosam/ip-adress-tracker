let map = L.map('map').setView([26.07,-98.31],19);
let searchInput = document.querySelector('.searcher');
let searchBtn = document.querySelector('.go');
let ipOutput = document.querySelector('.ip')
let locationOutput = document.querySelector('.location')
let timeZoneOutput = document.querySelector('.timezone')
let ispOutput = document.querySelector('.isp')

//function reader(){ console.log(searchInput.value)}


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoianVsaW8tcmFmYWVsIiwiYSI6ImNsMmMweWI2ZzAwMjIzZXBheDE0NmI3bDAifQ.RIO3iUar7gdpXry76tWzuw'
}).addTo(map);

let goNow = function(){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Zdxb1hAFt6lxcf3VutnJHrBhU94NW&ipAddress=${searchInput.value}`)
   .then(response => response.json())
   .then(data => {
       console.log(data)
       map.remove();
       map = L.map('map').setView([data.location.lat,data.location.lng],19);
       L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoianVsaW8tcmFmYWVsIiwiYSI6ImNsMmMweWI2ZzAwMjIzZXBheDE0NmI3bDAifQ.RIO3iUar7gdpXry76tWzuw'
      }).addTo(map);

      ipOutput.innerHTML = data.ip;
      locationOutput.innerHTML = `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`;
      timeZoneOutput.innerHTML = `UTC ${data.location.timezone}`;
      ispOutput.innerHTML = data.isp;

    })
    }

searchBtn.addEventListener('click', goNow)

//26.070,-98.305





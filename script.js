var map = L.map('map').setView([9.8302287, -83.8798855], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// coordenadas de los polígonos
var parque2Coordinates = [
    [9.8306620, -83.8797381],  
    [9.8310159, -83.8796076],  
    [9.8309778, -83.8795010],  
    [9.8306238, -83.8796315]   
];
var parque1Coordinates = [
    [9.8302287, -83.8798855], 
    [9.8305827, -83.8797549],  
    [9.8305445, -83.8796483],  
    [9.8301905, -83.8797789]  
];
var iglesiaCoordinates = [
    [9.8300887, -83.8794855], 
    [9.8302257, -83.8794355],  
    [9.8301872, -83.8793533], 
    [9.8300505, -83.8794033],  
    [9.8300887, -83.8794855]   
];
var plancheCoordinates = [
    [9.829999, -83.8798679],
    [9.8297367, -83.8798842],  
    [9.8297266, -83.8797419],  
    [9.829983, -83.8797277],   
    [9.829999, -83.8798679]    
];

// Añadir los polígonos al mapa
var parque2 = L.polygon(parque2Coordinates, {
    color: "green", 
    fillOpacity: 0.5
}).addTo(map);
var parque1 = L.polygon(parque1Coordinates, {
    color: "green",
    fillOpacity: 0.5
}).addTo(map);
var iglesia = L.polygon(iglesiaCoordinates, {
    color: "blue",
    fillOpacity: 0.5
}).addTo(map);
var planche = L.polygon(plancheCoordinates, {
    color: "red",  
    fillOpacity: 0.5
}).addTo(map);

// Añadir popups
parque1.bindPopup("Parque 1 - Leisure Area").openPopup();
parque2.bindPopup("Parque 2 - Leisure Area").openPopup();
iglesia.bindPopup("Iglesia Pentecostal Dios Es Amor").openPopup();
planche.bindPopup("Planche").openPopup()

// Postes de luz y líneas eléctricas primarias
fetch('export (1).geojson')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          style: function (feature) {
              return { color: 'orange' }; 
          }
      }).addTo(map);
  })
  .catch(error => console.log('Error al cargar el archivo GeoJSON: ', error));

fetch('export.geojson')
.then(response => response.json())
.then(data => {
    L.geoJSON(data, {
        style: function (feature) {
            return { color: 'blue' }; 
        }
    }).addTo(map);
})
.catch(error => console.log('Error al cargar el archivo GeoJSON: ', error));
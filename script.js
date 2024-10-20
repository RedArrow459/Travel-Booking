// Initialize the Leaflet map
var map = L.map('mapid').setView([51.505, -0.09], 13);

// Set the map tile layer using OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker on the map (for example, in London)
var marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup("<b>Welcome to London!</b>").openPopup();

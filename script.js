// Inicializar el mapa centrado en una coordenada
const map = L.map('map').setView([40.4167, -3.7037], 6); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// CONFIGURACIÓN FÁCIL: Añade aquí tus rutas
const ubicaciones = [
    { name: "Pico del Águila", coords: [42.5, -0.5], link: "#ruta1" },
    // Para añadir otra: { name: "Nombre", coords: [lat, lon], link: "#id" },
];

// Dibujar los marcadores automáticamente
ubicaciones.forEach(loc => {
    L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br><a href="${loc.link}">Ver detalles</a>`);
});

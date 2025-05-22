const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

// ✅ FIX: Proper map setup
const map = L.map("map").setView([0, 0], 16);

// ✅ Load tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// ✅ Store markers by socket ID
const markers = {};

// ✅ FIX: Event name corrected to 'receive-location'
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  // Center the map
  map.setView([latitude, longitude]);

  // Update or create marker
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

// ✅ Handle disconnection
socket.on("disconnect-user", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});

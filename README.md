# RealTime-Location-Sharing
This project is a real-time location sharing web application that uses WebSockets (Socket.IO) and Leaflet.js to track and display user locations dynamically on a map. It allows multiple users to share their live geolocation and see each other's movements on a shared map interface.

🚀 Features:
📍 Live location tracking via browser geolocation

🔄 Real-time updates using Socket.IO WebSockets

🗺️ Interactive maps using Leaflet.js with OpenStreetMap tiles

👥 Multiple users support — each user is represented with a unique marker

❌ Automatic cleanup of disconnected users from the map.

⚙️ Tech Stack:
Technology	Purpose
Express.js	Backend server
Socket.IO	Real-time communication
Leaflet.js	Map rendering & marker handling
EJS	Server-side view templating
HTML/CSS	Frontend layout
Geolocation API	Fetch user's live location

project/
├── public/
│   └── client.js         # Socket + Leaflet logic
├── views/
│   └── index.ejs         # Renders the map and connects socket
├── server.js             # Express + Socket.IO backend

🔧 How It Works:
1. User visits the app in their browser.

2. Browser asks for location permission.

3. On permission grant, coordinates are sent to the server using Socket.IO.

4. Server emits the location to all connected clients.

5. Clients update or create a marker for each user on the map.

6. When a user disconnects, their marker is removed in real time.

✅ Possible Extensions:
Add user names or avatars with markers

Save location history with MongoDB or Firebase

Show distance between users

Add dark/light map themes

Secure location sharing with user authentication


const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // Erlaubt React den Zugriff auf den Server

const server = http.createServer(app);

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Ein Spieler ist verbunden:', socket.id);

  // Beispiel: Einem Raum beitreten
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} ist Raum ${roomId} beigetreten`);
  });

  socket.on('disconnect', () => {
    console.log('Spieler hat die Verbindung getrennt');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
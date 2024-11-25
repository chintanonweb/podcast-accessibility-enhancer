const express = require('express');
const http = require('http');
const ws = require('ws');
const db = require('./config/db');
const { authenticateToken } = require('./middleware/auth');
const uploadRouter = require('./routes/upload');
const processRouter = require('./routes/process');
const insightsRouter = require('./routes/insights');
const searchRouter = require('./routes/search');

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
db.connect();

// Routes
app.use('/api/upload', uploadRouter);
app.use('/api/process', processRouter);
app.use('/api/insights', insightsRouter);
app.use('/api/search', searchRouter);

// WebSocket for Transcription
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Handle incoming messages
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '23Savage!',
    database: 'clientmanagement'
});

app.use(cors());
app.use(bodyParser.json());

// Save client
app.post('/clients', async (req, res) => {
    try {
        const { clientName, clientEmail, clientPhone } = req.body;
        const [rows] = await db.query(`INSERT INTO client (client_name, client_email, phone_number) VALUES (?, ?, ?)`, [clientName, clientEmail, clientPhone]);
        res.json({ success: true, message: 'Client saved!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get all clients
app.get('/client', async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT client_id, client_name FROM client`);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Save meeting
app.post('/clientmeetings', async (req, res) => {
    try {
        const { clientId, meetingDate, meetingTime } = req.body;
        await db.query(`INSERT INTO clientmeetings (client_id, Meeting_date, meeting_time) VALUES (?, ?, ?)`, [clientId, meetingDate, meetingTime]);
        res.json({ success: true, message: 'Meeting scheduled!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

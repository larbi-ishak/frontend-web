const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://localhost:8000';

app.use(express.static(path.join(__dirname, 'public')));

// Expose runtime config to the client-side JS
app.get('/config.json', (req, res) => {
    res.json({ apiUrl: API_URL });
});

app.listen(PORT, () => {
    console.log(`Dashboard server active on port ${PORT}`);
});

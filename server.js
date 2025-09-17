const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const counterPath = path.join(__dirname, 'counter.json');

app.use(express.static(__dirname)); // Serve static files

app.get('/api/visit', (req, res) => {
    let count = 0;
    if (fs.existsSync(counterPath)) {
        count = JSON.parse(fs.readFileSync(counterPath)).count;
    }
    count++;
    fs.writeFileSync(counterPath, JSON.stringify({ count }));
    res.json({ count });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const app = express();

let environment = process.env.NODE_ENV || 'development';
if (environment != 'production') {
    require('dotenv').config();
}


const limiter = rateLimit({
    windowMs: 1000 * 60 * 5,
    max: 50
})

app.use((req, res, next) => {
    let now = (new Date(Date.now()));
    console.log(`Incoming ${req.method} request for "${req.url}" on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`);
    next();
})
app.use(limiter);
app.use(express.static('public'));

app.get('/get-bazaar-prices', (req, res) => {
    console.log("Fetching from Hypixel");
    fetch(`https://api.hypixel.net/skyblock/bazaar?key=${process.env.KEY}`).then(r => r.json()).then(data => res.json(data));
});


console.log("Listening...")
app.listen(process.env.PORT || 8000);
const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const app = express();

let environment = process.env.NODE_ENV || 'development';
if (environment != 'production') {
    require('dotenv').config();
}


const limiter = rateLimit({ windowMs: 1000 * 60, max: 250 });

const needFetchDifference = 1000 * 60 * 10  // 10 minutes
let lastFetch = 0;
let cachedPrices = null;

app.use((req, res, next) => {
    let now = (new Date(Date.now()));
    console.log(`Incoming ${req.method} request for "${req.url}" from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress} on ${
        now.toLocaleDateString()} at ${now.toLocaleTimeString()}`);
    next();
})
app.use(limiter);
app.use(express.static('public'));

app.get('/get-bazaar-prices', (req, res) => {
    if ((!cachedPrices) || ((Date.now() - lastFetch) > needFetchDifference)) {
        console.log('Fetching from Hypixel');
        fetch(`https://api.hypixel.net/skyblock/bazaar?key=${process.env.KEY}`)
            .then(r => r.json())
            .then(data => {
                lastFetch = Date.now();
                cachedPrices = data;
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json(err);
            });
    } else {
        console.log('Returning cached data');
        res.json(cachedPrices);
    }
});


console.log('Listening...')
app.listen(process.env.PORT || 8000);

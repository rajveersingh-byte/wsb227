let http = require('http');

let app = http.createServer((req, res) => {
    if (req.url === '/') {
        let obj = {
            name: 'WsCube Tech',
            batch: 'WSB-227'
        };


        res.end(JSON.stringify(obj));
    } 
});

app.listen(8000, () => {
    console.log('http://localhost:8000');
});
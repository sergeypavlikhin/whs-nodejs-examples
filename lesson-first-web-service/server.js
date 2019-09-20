const http = require('http');

const server = http.createServer(((req, res) => {
    res.end("Привет, Мир!");
}));

server.listen(3000, () => console.log("Server was started"));

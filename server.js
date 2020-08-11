const http = require('http');
const app = require('./src/app');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port);
console.log('*** SERVIDOR RODANDO EM http://localhost:3000 ***');
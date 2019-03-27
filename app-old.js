//librería http ya viene en node, no necesita instalación
const http = require('http');

//para escuchar peticiones http, primero crear servidor
//createServer necesita de callback que enviará tanto los request como las respuestas
//indicamos también sobre que puerto va a estar escuchando mi servicio
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Estefania',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080); //puerto 8080 es localhost. También se suele usar el 3000.

console.log('Escuchando el puerto 8080');
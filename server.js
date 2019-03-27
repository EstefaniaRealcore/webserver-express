//librería http es un poco extensa para usarla y por lo tanto instalamos
//express que nos facilita la creación del servicio
const express = require('express')
    //express internamente usa módulo http
const app = express()

const hbs = require('hbs');

//importamos el archivo donde definimos los helpers
require('./hbs/helpers');

//heroku: obtener puerto si estamos en heroku o 3000 si es local
//en el fichero pachage.json añadimos "start": "node server.js" para decirle a Heroku que comando tiene que ejecutar para iniciar la aplicación "npm start"
//tambié añadimos comando "nodemon": "nodemon server.js" para iniciar nodemon de esta manera "npm run nodemon"
const port = process.env.PORT || 3000

//middleware --> callback que se ejecuta siempre sin importar el URL que el usuario pide
//Lo que pongamos en la carpeta '/public' va a ser de dominio publico
app.use(express.static(__dirname + '/public'));

//__dirname = path completo, variable global
//registramos parciales hbs
hbs.registerPartials(__dirname + '/views/parciales');

//usamos hbs para que express pueda renderizar páginas que usen handlebars
//app hace referencia a express.
app.set('view engine', 'hbs');

//solicitud GET cuando el path es '/'
app.get('/', (req, res) => {

    //cuando intenten acceder al path '/' renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'estEfania garCia'
    });

});

//solicitud GET cuando el path es '/data'
app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
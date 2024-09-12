const express = require('express')
const { config } = require('dotenv')
const mongoose = require('mongoose')
config()

const booksRoutes = require('../routes/book.routes')


//Usamos express para los middlewares
const app = express();
app.use(bodyParser.json())  //Parseador de Bodies


//Acá conectamos la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME, });
const db = mongoose.connection;


// Usar las rutas de libros en nuestra aplicación Express
app.use('/books', bookRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})

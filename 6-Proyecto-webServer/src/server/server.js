const express = require('express')
const apth = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options
    console.log(port)
    console.log(public_path)

    const app = express()

    //Para poder usar middlewares se usa la palabra (express)
    app.use(express.static(public_path));

    app.get('*', (req, res) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //Para ESCUCHAR - si lo llamamos de una URL o lo que sea, que este "pendiente" para devolvernos algo
    app.listen(port, () => {
        console.log(`Ecuchando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}
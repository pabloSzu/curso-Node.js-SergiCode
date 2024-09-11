const { envs } = require('./config/env');

const { startServer } = require('./server/server');


console.log(envs);



const main = () => {
    console.log("Aqui comenzaremos el servidor");

    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH

    })

}



// Funcion agnóstica autoconvocada
// Agnostica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis del final
( 
    async () => {
        main()
    }
)()

//Es una funcion asincrona


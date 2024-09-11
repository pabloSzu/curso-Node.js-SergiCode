import { getTittle, getAuthor } from './functions.js'
import { curso } from './objects.js'


console.log(getTittle());
console.log(getAuthor);
console.log(curso);

/*
al package.json le agrego

  "type": "module",

Para poder importar/exportar
*/



//=============================================================================================================================================
//=========================VARIABLE DE ENTORNO=================================================================================================
//=============================================================================================================================================

console.log( process.env )
console.log( process.PORT )  // por ahora estaindfinido. Cuando lo subimos a un servidor es el puerto que debemos poner

//creo el archivo .env y el gitignore y lo ignoro. Tambien ignoro node_modules ya que con un simple "npm install" se reinstalan todas otra vez y son muy pesadas.
//En el .env creamos todas nuestras variables de entorno locales (puertos, contraseñas a la DB, etc) por eso es solo local y no hay que subirlo. Al desplegar el proyecto las varibales de entorno se configuran segun lo necesario


//instalo dotenv: "npm i dotenv"

import { config } from "dotenv"
config()
console.log( process.env.PORT )
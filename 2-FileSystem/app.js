//inicialmente solo tengo el archivo poema.txt

const fs = require('fs');   //para usar el paquete 'fs' de NODE


//console.log(fs);


const poema = fs.readFileSync('poema.txt', 'utf-8')

console.log(poema);

const poemaModified = poema.replace(/hola/ig, 'holaReemplazado')  //ig = ignora mayusculas y minusculas - indistinto

console.log(poemaModified);


//genero nuevo archivo

fs.writeFileSync('poema-modified.txt', poemaModified)

console.log(poemaModified);


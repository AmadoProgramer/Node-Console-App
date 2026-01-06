const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar'); 
const argv = require('./config/yargs');         
    
console.clear();

crearArchivo( argv.b, argv.l, argv.r)
    .then( nombreArchivo => console.log(nombreArchivo.red, 'creado') )
    .catch( err => console.log( err ));





// console.log('base:yargs', argv.base );


//console.log(process.argv);

// //console.log( process.argv );
// console.log( argv )

// console.log('base: yargs', argv.b);
//const [ , , arg3 = 'base = 5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=');


// PROCESO DIRECTO CON LOS ARGUMENTOS DE CONSOLA 

//Proceso de desestructuracion con process

// Proceso de desestructuracion con split sacando solo el segundo argumento 5
    
    
//const base = 3;
    
//CREACION DE ARCHIVOS DE TABLAS DE MULTIPLICAR QUE LLAMA MODULO MULTIPLICAR
    
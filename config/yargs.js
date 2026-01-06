const colors = require('colors');
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('r',{
    alias: 'rango',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Proporciona el limite de multiplicacion a realizar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)&& isNaN(argv.r)) {
      throw "La base tiene que ser un numero...";
    }
    return true;
  }).argv;
// option('l');      

module.exports = argv;
const fs = require('fs');
const colors = require('colors');
const { boolean } = require('yargs');

const crearArchivo = async( base = 5, l = false, r = 10) => {
    
    try {
        let salida = '';
        
        for (let i = 1; i < r + 1; i++) {
            salida += `${ base } ${ colors.green('x') /*Objeto String x dentro de Colors.green*/} ${ i } = ${base * i}\n`;
        };

        if (l) {
            console.log('=================='.blue);
            console.log(` Tabla del:`.bgYellow, colors.grey(base));
            console.log('=================='.blue);  
            console.log(salida);
        }
    
    
        
        await fs.writeFileSync(`/salida/tabla-${base}.txt`, salida );
        
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}

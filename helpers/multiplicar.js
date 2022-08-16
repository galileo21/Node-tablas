const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar=false, hasta=10)  => {
 
    try{

        if(listar){
            console.log('==================='.bold.blue);
            console.log(`   Tabla del ${base}`.bold.red)
            console.log('==================='.bold.magenta)
        }

        let salida = '';
    
        for(let i=1;i<=hasta;i++){
            salida += (`${base} x ${i} = ${base*i}\n`);
        }

        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } 
    catch (err) {
        throw(err);
    }

}

module.exports = {
    crearArchivo
}
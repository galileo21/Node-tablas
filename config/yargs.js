const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    describe: 'base de la tabla a multiplicar',
                    demandOption:true
                })
                .option('l', {
                    alias: 'listar',
                    describe: 'lista la tabla en pantalla',
                    type: 'boolean',
                    demandOption:false
                })
                .option('h', {
                    alias: 'hasta',
                    describe: 'valor máximo a multiplicar',
                    type: 'number',
                    demandOption:false
                })
                 .check((argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

                module.exports = argv;

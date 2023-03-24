const express = require('express')
const cors = require('cors');




class Server {
    constructor(){
        this.app = express();
        //Hacemos que el puerto sea visible
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';
        //Middlewares son funciones que agregan otra funcionalidad al webserver. Se ejecutan siempre que levantamos el servidor
        this.middlewares();
        //Configuramos las rutas llamando al metodo
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());
        //Middleware para parseo y lectura del BODY

        this.app.use( express.json());
        //Directorio publico -- Implementamos nuestra carpeta pública
        this.app.use( express.static('public')) // palabra clave use para definir un middleware
    }

    //Metodo para definir rutas
    routes(){
        //Middleware condicional que comienza con el path /api/users = this.usuariosPath
        this.app.use(this.usuariosPath, require('../routes/user'));

    }



    //Metodo para escuchar
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }


}

module.exports = Server;
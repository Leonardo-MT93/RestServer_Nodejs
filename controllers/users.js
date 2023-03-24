const { response} = require('express')


//Definimos que hace cada una de las rutas
const usuariosGet = (req, res = response) => {
    // const query = req.query;
    const {q, nombre = 'No name', apikey, page, limit} = req.query;
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.json({
        msg: "post API - controlador",
        body
    });
}

const usuariosPut = (req, res = response) => {
//PARAMETROS Y NOMBRE DE LA RUTA = :id
    const id = req.params.id;
    res.json({
        msg: "put API - controlador",
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - controlador"
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    });
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}
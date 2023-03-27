const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json(error)
    }
    //Si esta todo ok, sigue con el siguiente middleware o validador
    next()
}

module.exports = {
    validarCampos
}
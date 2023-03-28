const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const { generarJWT } = require('../helpers/generarJWT');

const login = async(req,res = response) => {
    const { correo, contraseña} = req.body;

    try {   

        //Verificar si el email existe
        const user = await User.findOne({correo});
        if(!user){
            return res.status(400).json({
                msg: 'Usuario/Password no son validos'
            })
        }
        //Verificar si el usuario esta activo en la bd
        if(!user.estado){
            return res.status(400).json({
                msg: 'Usuario/Password no son validos - estado:false'
            })
        }
        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync( contraseña, user.contraseña);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario/Password no son validos - password'
            })
        }
        //Generar el JWT

        const token = await generarJWT ( user.id);

        res.json({
            user,
            token
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el admin.'
        })
    }
    
}

module.exports = {
    login
};
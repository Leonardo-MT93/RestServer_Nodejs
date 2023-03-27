const Role = require('../models/role');
const User = require('../models/user');

const esRoleValido =  async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la DB`);
    }
};

const emailExiste = async(correo = '') => {
    const existeMAIL = await User.findOne({ correo });
    if(existeMAIL){
        throw new Error(`El correo  ${correo} ya esta registrado en la DB`);
    }
} 
const existeUsuarioporID = async(id) => {
    const existeID = await User.findById(id);
    if(!existeID){
        throw new Error(`El ID  ${id} no existe `);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioporID
}
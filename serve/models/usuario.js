const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}
let Schema = mongoose.Schema;


let usarioSheman = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    img:{
        type: String,
        required: false
    },
    role:{
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }, //
    estado:{
        type: Boolean,
        default: true
    }, //boolean
    google: {
        type: Boolean,
        default: false
    }
});

usarioSheman.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password
    return userObject;
}

usarioSheman.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico'
})
 

module.exports = mongoose.model('Usuario', usarioSheman);
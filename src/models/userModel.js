const mongoose = require('../database/database');

const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                let test = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(v);
                if(test){
                    return true;
                }else{
                    return false;
                }
            }
        }
    },
    senha: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                let test = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
                if(test){
                    return true;
                }else{
                    return false;
                }
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                let test = /[^\s]*@[a-z0-9.-]*/.test(v);
                if(test){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
},{versionKey: false})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
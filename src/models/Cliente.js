import { Schema, model } from "mongoose";

const ClienteEsquema = new Schema (
    {
        "nombre" : {
            type: String,
            required: true
        },
        "apellido" : {
            type : String,
            required : true
        },
        "correo" : {
            type : String,
            required : true
        },
        "telefono" : {
            type : String,
            required : true
        },
        "direccion" : {
            type: String,
            required : true
        },
        "edad" : {
            type : Number,
            required : true 
        },
        "activo" : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('Clientes', ClienteEsquema);

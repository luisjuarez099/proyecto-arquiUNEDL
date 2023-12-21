import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
//creacion del esquema
const contactoSchema = new Schema({
    Nombre: { type: String, required: true, trim: true, maxlength: 50, minlength: 5 },
    Correo: { type: String, required: true, trim: true, maxlength: 35, minlength: 10 },
    Telefono:{ type: String, required: true, trim: true, maxlength: 13, minlength: 10 },
    Mensaje: { type: String, required: true, trim: true, maxlength: 500, minlength: 5 },
});

const Contacto = mongoose.models.Contacto || mongoose.model('Contacto', contactoSchema);
export default Contacto; 
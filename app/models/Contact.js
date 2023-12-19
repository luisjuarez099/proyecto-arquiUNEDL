import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
//creacion del esquema
const contactSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    mensaje: { type: String, required: true },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact; //exportar el modelol 
import mongoose, { Schema } from "mongoose";

//conexion a la base de datos
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise; //usar promesas en mongoose 

//creacion del esquema
const userSchema= new Schema({
    username:String,
    email:String,
    password:String,

});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
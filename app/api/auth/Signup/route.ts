import { NextResponse } from "next/server";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
//recibimos la informacion desde el cliente
  const { username, email, password } = await request.json();

  //validate password
  if (!password || password.length < 8) {
    return NextResponse.json(
      { message: "Password must be at least 8 characters" },
      { status: 400 }
    );
  }

  //validar que el email y el usuario no exista
  const emailFind = await User.findOne({ email }); //buscamos el email en la base de datos
  const userFind =  await User.findOne({ username }); //buscamos el usuario en la base de datos

  if (emailFind || userFind) {
    return NextResponse.json(
      { message: "Email or Username already exists" },
      { status: 409 }
    );
  }

  //encruptamos la password
  const hasdPassword = await bcrypt.hash(password, 12);
  //create user en caso de no existir
  const user = new User({
    email,
    username,
    password: hasdPassword,
  });

  const userSave = await user.save(); //guardamos el usuario en la base de datos
  
  // console.log(userSave);

  console.log(username, email, password);
  return NextResponse.json({
    _id: userSave._id,
    email: userSave.email,
    username: userSave.username,
  });
}

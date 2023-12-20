import { NextResponse } from "next/server";
import User from "@/app/models/User";

export async function GET() {
  try {
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json(); //obtener el body de la peticion en formato json para poder usarlo
    const userInfo = body.formData;
    await User.create(userInfo);

    return NextResponse.json({ message: "Usuario creado exitosamente :) " }, { "Estatus": 201 });
  } catch (error) {
    return NextResponse.json({message:"Error al crear el usuario", error}, {"Estatus":500});
  }
}

import { NextResponse } from "next/server";
import Contacto from "@/app/models/Contacto"; //importar el modelo de contacto

export async function GET() {
  try {
    const contactos = await Contacto.find();

    return NextResponse.json({ contactos }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    const { Nombre, Correo, Telefono, Mensaje } = await request.json(); //obtener  la peticion en formato json para poder usarlo
    console.log(Nombre, Correo, Telefono, Mensaje);
    //crear el contacto
    await Contacto.create({ Nombre, Correo, Telefono, Mensaje });
    return NextResponse.json( { message: "Mensaje enviado, ya somos amigos :) " },{ Estatus: 201 } );
   
  } catch (error) {
    return NextResponse.json(
      { message: "No logramos hacer contacto :( ", error },
      { Estatus: 500 }
    );
  }
}

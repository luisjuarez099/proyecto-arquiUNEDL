"use client";
import React, { FormEvent, useState } from "react";
import axios, {AxiosError} from "axios";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
const Registro = () => {
  const router = useRouter();
  const [errors, setError] =  useState(); //manejo de errores

  //enviamos los datos del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //evita que se recargue la pagina

    const formData = new FormData(e.currentTarget); //obtiene los datos del formulario
    //mandamos al backend con axios
    try {
      const SignupRes = await axios.post("/api/auth/Signup", {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      });
      console.log(SignupRes);
      
      //hacemos el signin con next-auth
      const res  =  await signIn("credentials", {
        email: SignupRes.data.email, //obtenemos el email del backend
        password: formData.get("password"), //obtenemos el password del formulario
        redirect: false, //no redireccionamos
      });
      //si no hay error redireccionamos a la pagina principal
      if(res?.ok){
        router.push("/"); //redireccionamos a la pagina principal con next/router
      }
      console.log(res);

    } catch (error : any) {
      console.log(error);
      error.response.data.message && setError(error.response.data.message); //si hay un error tomamos el mensaje del error
    }
  };

  return (
    <div className="text-white">
      <form action="" onSubmit={handleSubmit}>
        {errors && <div className="bg-red-500 text-white p-2 mb-2">{errors}</div>}
        <h1>Signup</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="bg-zinc-800 px-4 py-2 mb-2 block"
        />
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="bg-zinc-800 px-4 py-2 mb-2 block"
        />
        <input
          type="password"
          name="password"
          placeholder="*********"
          className="bg-zinc-800 px-4 py-2 mb-2 block"
        />
        <button className="bg-indigo-500 px-4 py-2 text-white">
          Registro
        </button>
      </form>
    </div>
  );
};

export default Registro;

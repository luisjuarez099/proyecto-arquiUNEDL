"use client";
import Image from "next/image";
import emailI from "../public/mail.png";
import phoneI from "../public/phone.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Contacto = () => {
  const router = useRouter(); // Hook de Next.js para redireccionar
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Mensaje, setMensaje] = useState("");
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault(); // Evita que se recargue la pagina
      console.log(Nombre + " " + Correo + " " + Telefono + " " + Mensaje);
      //Haremos un fetch a la API
      const res = await fetch("/api/Contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre,
          Correo,
          Telefono,
          Mensaje,
        }),
      });
      const data = await res.json(); // Convertimos la respuesta a JSON
      console.log(data.message); // Mensaje del servidor
    } catch (error) {
      console.error("Error in fetch:", error);
    }


    router.refresh();
    router.push("/Contacto");// Redireccionamos a la pagina de inicio

    
  };
  return (
    <div>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-indigo-600 font-semibold">Contact</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Haz Contacto, Haz Amigos
              </p>
              <h6>Estamos Aquí para Ti</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Beatae, voluptas corrupti! At, laboriosam nulla quos facere
                accusamus voluptatem inventore ducimus itaque excepturi esse
                adipisci suscipit commodi repellendus earum a mollitia.
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <Image src={emailI} alt="email" height={30} width={30} />
                    </div>
                    <p> Support@example.com </p>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <Image
                        src={phoneI}
                        alt="telefono"
                        height={30}
                        width={30}
                      />
                    </div>
                    <p> +(52) 000-000-000 </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form onSubmit={handleSubmit} className="space-y-5" method="POST">
                {/* Nombre de la persona */}
                <div>
                  <label htmlFor="Nombre" className="font-medium">
                    Full name
                  </label>
                  <input
                    onChange={(e) => setNombre(e.target.value)} // Actualiza el estado de la variable fullName
                    value={Nombre} // Asigna el valor de la variable fullName
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="Correo" className="font-medium">
                    Email
                  </label>
                  <input
                    onChange={(e) => setCorreo(e.target.value)}
                    value={Correo}
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                {/* Telefono */}
                <div>
                  <label htmlFor="Telefono" className="font-medium">
                    Numero de Telefono
                  </label>
                  <input
                    onChange={(e) => setTelefono(e.target.value)}
                    value={Telefono}
                    type="tel"
                    placeholder="+(52) 000-000-000-0"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                {/* Motivo del Mensaje */}
                <div>
                  <label htmlFor="Mensaje" className="font-medium">
                    Mensaje
                  </label>
                  <textarea
                    onChange={(e) => setMensaje(e.target.value)}
                    value={Mensaje}
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                {/* Boton de enviar */}
                <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacto;

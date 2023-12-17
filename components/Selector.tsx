import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function Selector({ data }: { data: any }) {
  const [query, setQuery] = useState(""); //guardamos el valor del input
  const [marcas, setMarcas] = useState<any>(); //guardamos los modelos
  const [modelos, setModelos] = useState<any>(); //guardamos los modelos

  const marcass = data.Carros.find((item: any) => item.Marca === marcas); //obtenemos la marca

  const modeloss = marcass?.Modelo.map((item: any) => item.Nombre); //despues accedemos a la informacion de la marca y obtenemos los modelos
  console.log(modeloss);

  return (
    <div className="flex relative w-72 max-w-full mx-auto mt-12">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select
          placeholder="Selecciona una marca"
          onChange={(e) => setMarcas(e.target.value)}
          className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
        >
          <option value="" disabled selected>
            Selecciona una Marcas
          </option>
          {data.Carros.map((items: any) => (
            <>
              <option>{items.Marca}</option>
            </>
          ))}
        </select>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <option value="" disabled selected>
            Selecciona un Modelo
          </option>
          {marcass?.Modelo.map((item: any) => (
            <>
              <option>{item.Nombre}</option>
            </>
          ))}
        </select>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <option value="" disabled selected>
            Selecciona un Anio
          </option>
          {marcass?.Modelo.map((item: any) => (
            <>
              <option>{item.Anio}</option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Selector;

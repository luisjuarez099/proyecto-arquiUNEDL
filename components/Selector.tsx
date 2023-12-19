import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function Selector({ data }: { data: any }) {
  const [marcas, setMarcas] = useState<any>(); //guardamos los modelos
  const [modelos, setModelos] = useState<any>(); //guardamos los modelos
  const [anios, setAnios] = useState<any>(); //guardamos los modelos
  const [info, setInfo] = useState<any>(); //guardamos los modelos

  const datosMarcas = [];
  datosMarcas.push(marcas);
  const datosModelos = [];
  datosModelos.push(modelos);
  const datosAnios = [];
  datosAnios.push(anios);
  const totalInfo = datosMarcas.concat(datosModelos, datosAnios);

  console.log(totalInfo);

  console.log(marcas + " " + modelos + " " + anios);
  const marcass = data.Carros.find((item: any) => item.Marca === marcas); //obtenemos la marca
  return (
    <div className="flex relative w-72 max-w-full mx-auto mt-12">
      <div>
       
        <select
        required
          
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
       
        <select
        required
        onChange={(e) => setModelos(e.target.value)}
         className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
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
      
        <select 
        required
        onChange={(e) => setAnios(e.target.value)}
        className="w-full  py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
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

      {/* Boton para mostrar la informacion */}
      
    </div>
  );
}
export default Selector;

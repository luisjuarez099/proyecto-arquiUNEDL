"use client";
import { useEffect, useState } from "react";
import automoviles from "@/ConstantsAutos/automoviles.json";
import autos from "@/ConstantsAutos/autos.json";
import Selector from "@/components/Selector";
import { Anio } from "@/constants";
import { Marca } from "@/constants";
import { Modelo } from "@/constants";
const Auto = () => {
  //Estados
  const [stateData, setStateData] = useState<any>();
  const [marca, setMarca] = useState<any>();
  const [modelo, setModelo] = useState<any>();

  const marcass = automoviles.Carros.find(
    (item: any) => item.Marca === "Toyota"
  ); //obtenemos la marca
  const modeloss = marcass?.Modelo.map((item: any) => item.Nombre); //despues accedemos a la informacion de la marca y obtenemos los modelos
  const anios = marcass?.Modelo.map((item: any) => item.Anio); //despues accedemos a la informacion de la marca y obtenemos los modelos
  console.log(
    "\n MODELOS: " +
      modeloss +
      " \n MARCA: " +
      marcass?.Marca +
      " ANIOS: " +
      anios
  );

  return (
    <section
      className="min-h-screen 
    px-3 grid place-items-center
    pb-20 selection:text-white
  selection:bg-red-800 bg-gradient-to-tr
  from-red-200 to-white-500"
    >
      <div>
        <h2 className="text-2xl font-bold text-teal-900">Automoviles.</h2>
        <br />
        <div className="flex flex-wrap gap-3 bg-red-300 rounded-lg p-8">
          <div>
            <p className="text-h-800 font-semibold">Marca: </p>
            <Selector data={automoviles} />
          </div>
        </div>
      </div>
    </section>
  );
};

//funciones

const mapYear = automoviles.Carros.map((item: any) => {});

export default Auto;

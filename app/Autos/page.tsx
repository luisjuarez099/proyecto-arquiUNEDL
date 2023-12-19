"use client";
import automoviles from "@/ConstantsAutos/automoviles.json";
import Selector from "@/components/Selector";

const Auto = () => {


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

export default Auto;

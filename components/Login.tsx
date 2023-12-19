"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {

  const startUserData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setUserData] = useState(startUserData);
  const router = useRouter();

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    try {
      console.log("submited");
      event.preventDefault();
      const res = await fetch("/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData ), 
      });

      if (!res.ok) {
        throw new Error("Error al registrar usuario");
      }

      const data = await res.json();
      console.log(data.message); // Mensaje del servidor
    } catch (error) {
      console.error("Error in fetch:", error);
    }

    router.refresh();
    router.push("/Perfil");
  };

  
  console.log(formData);

  
  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label>User Name</label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            name="username"
            onChange={handleChange}
            required
            value={formData.username}
          />
          <label htmlFor="email">Email</label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            required
            value={formData.email}
          />
          <label>Password</label>
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            required
            value={formData.password}
          />
        </div>
        <input
          type="submit"
          value="New User"
          className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
        />
      </form>
    </div>
  );
};

export default Login;

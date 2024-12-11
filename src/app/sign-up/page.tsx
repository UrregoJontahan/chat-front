"use client";
import { useState } from "react";
import { useRegisterUser } from "../hooks/useRegisterUser";

export default function Register() {
  const { handleRegister, error } = useRegisterUser();
  const [formState, setFormState] = useState({
    name: "",
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(formState);
  };

  return (
    <section className="w-full h-screen bg-gray-300 flex justify-center">
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-5xl p-8">Registrarse</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="userName"
            placeholder="Nombre de usuario"
            value={formState.userName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formState.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Crear cuenta
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
}

  
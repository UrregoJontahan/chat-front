"use client"
import { login } from "@/service/login";
import { useRouter } from "next/navigation";
import React, { useState } from "react"

export default function Login(){
    const [ userName, setUserName ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ isSubmitting, setSubmitting ] = useState<boolean>(false);
    const [ error, setError ] = useState<string>("");
    const router = useRouter();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if( name === "userName" ) setUserName(value);
        if( name === "password" ) setPassword(value);
    }

    const handleSubmit = async( e: React.FormEvent ) => {
        e.preventDefault()

        setSubmitting(true);
        setError("");

        try{
            const response = await login({userName, password});

            if(response.success){
                router.push("/home");
            } else(
                setError("Credenciales incorrectas")
            )
        } catch(e){
            throw new Error("Error desconocido")
        } finally{
            setSubmitting(false);
        }
    }

    return(
        <section className="w-full h-screen bg-gray-300 flex flex-col justify-center">
            <div className="flex flex-col items-center my-auto">
                <h1 className="text-5xl p-8">Iniciar Sesión</h1>
                <form action="" className="flex flex-col gap-y-4"
                    onSubmit={handleSubmit}
                >
                    <input type="text" 
                        placeholder="Nombre de usuario"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name="userName"
                        value={userName}
                        onChange={handleChange}
                        required
                        />
                    <input type="text" 
                        placeholder="Password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                        />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        disabled={isSubmitting}
                        
                    >
                    {isSubmitting ? "Creando..." : "Crear cuenta"}
                        Iniciar Sesión
                    </button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </section>
    )
}
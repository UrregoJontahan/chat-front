export default function Login(){
    return(
        <section className="w-full h-screen bg-gray-300 flex flex-col justify-center">
            <div className="flex flex-col items-center my-auto">
                <h1 className="text-5xl p-8">Iniciar Sesión</h1>
                <form action="" className="flex flex-col gap-y-4">
                    <input type="text" 
                        placeholder="Nombre de usuario"
                        className="w-full px-3 py-2 border border-gray-300 rounded"/>
                    <input type="text" 
                        placeholder="Password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded"/>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    //   disabled={isSubmitting}
                    >
                    {/* {isSubmitting ? "Creando..." : "Crear cuenta"} */}
                        Crear cuenta
                    </button>
                </form>
            </div>
        </section>
    )
}
const PORT = 8080
const URL = `http://localhost:${PORT}`

interface User{
    name: string;
    userName:string;
    password: string;
}

export async function createUser( user: User) {
    try{
        const response = await fetch(`${URL}/new-user`,{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(user)
        })

        if(!response.ok){
            throw new Error("Error al crear el usuario")
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error desconocido");
      }
}
const PORT = 8080
const URL_LOGIN = `http://localhost:${PORT}`

interface UserCredentials{
    userName: string;
    password: string;
}

export async function login ({userName, password}: UserCredentials) {
    try{
        const response = await fetch(`${URL_LOGIN}/login`,{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });

        if( !response.ok ){
            throw new Error("Credenciales incorrectas")
        }

        const data = await response.json()
        return data;

    } catch (e){
        throw new Error("Error desconocido")
    }
}
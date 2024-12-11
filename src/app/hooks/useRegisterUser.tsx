import { useState } from "react";
import { createUser } from "@/service/userService";
import { useUserContext } from "../context/UserContext";

export const useRegisterUser = () => {
  const { setUser, setError, setIsSubmitting } = useUserContext();
  const [localError, setLocalError] = useState<string>("");

  const handleRegister = async (formState: { name: string; userName: string; password: string }) => {
    if (!formState.name || !formState.userName || !formState.password) {
      setLocalError("Por favor, complete todos los campos.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setLocalError("");

    try {
      const response = await createUser(formState);
      
      setUser(response);

      return response;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al crear el usuario";
      setError(message);
      setLocalError(message); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleRegister, error: localError };
};

"use client"
import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
  userName: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, error, setError, isSubmitting, setIsSubmitting }}>
      {children}
    </UserContext.Provider>
  );
};

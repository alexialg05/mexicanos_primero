
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, AuthContextType } from '@/types';
import { useToast } from "@/components/ui/use-toast";

// Mock user data (this would be replaced with real auth)
const mockUsers = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin' as UserRole,
    profileComplete: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Escuela Demo',
    email: 'escuela@example.com',
    password: 'escuela123',
    role: 'escuela' as UserRole,
    profileComplete: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Aliado Demo',
    email: 'aliado@example.com',
    password: 'aliado123',
    role: 'aliado' as UserRole,
    profileComplete: false,
    createdAt: new Date().toISOString()
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('educare_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(
        u => u.email === email && u.password === password
      );
      
      if (!foundUser) {
        throw new Error('Credenciales incorrectas');
      }
      
      // Remove password from user object
      const { password: _, ...userWithoutPassword } = foundUser;
      
      setUser(userWithoutPassword);
      localStorage.setItem('educare_user', JSON.stringify(userWithoutPassword));
      
      toast({
        title: '¡Bienvenido de nuevo!',
        description: `Has iniciado sesión como ${userWithoutPassword.name}.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: error instanceof Error ? error.message : "Ocurrió un error al iniciar sesión.",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, role: UserRole) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const userExists = mockUsers.some(u => u.email === email);
      if (userExists) {
        throw new Error('El correo electrónico ya está registrado');
      }
      
      // Create new user
      const newUser = {
        id: (mockUsers.length + 1).toString(),
        name: email.split('@')[0],
        email,
        password,
        role,
        profileComplete: false,
        createdAt: new Date().toISOString()
      };
      
      // In a real app, we would save this to the database
      mockUsers.push(newUser);
      
      // Remove password from user object
      const { password: _, ...userWithoutPassword } = newUser;
      
      setUser(userWithoutPassword);
      localStorage.setItem('educare_user', JSON.stringify(userWithoutPassword));
      
      toast({
        title: '¡Registro exitoso!',
        description: 'Tu cuenta ha sido creada correctamente.',
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de registro",
        description: error instanceof Error ? error.message : "Ocurrió un error al registrarte.",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('educare_user');
      
      toast({
        title: 'Sesión cerrada',
        description: 'Has cerrado sesión correctamente.',
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error al cerrar sesión",
        description: "Ocurrió un error al cerrar sesión.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";
import type {UserData} from '../types.ts';

interface Product {
    id: number;
    title: string;
    price: number;
    currency: string;
    image?: string;
    quantity?: number;
}




type AuthContextType = {
    user: UserData | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
    cart: Product[];
    addToCart: (product: Product) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [cart, setCart] = useState<Product[]>([]);

    // Load user on refresh
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail && !user) {
            login(storedEmail);
        }
    }, []);

    // Login: fetch user by email
    const login = async (email: string) => {
        try {
            localStorage.setItem('email', email);
            const res = await axios.get(`http://localhost:3001/users/email/${email}`);
            const data: UserData = res.data;
            setUser(data);
        } catch (err) {
            console.error('Login error:', err);
            logout();
        }
    };
    // Logout: clear state and storage
    const logout = () => {
        localStorage.removeItem('email');
        setUser(null);
    };


    const addToCart = (product: Product) => {
        setCart(prev =>
            prev.find(item => item.id === product.id)
                ? prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity ?? 1) + 1 }
                        : item
                )
                : [...prev, { ...product, quantity: 1 }]
        );
    };

    return (
        <AuthContext.Provider value={{ user, login, logout , cart, addToCart}}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
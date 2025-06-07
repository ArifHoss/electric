import React, {createContext, useContext, useState, useEffect} from 'react';
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
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [cart, setCart] = useState<Product[]>(() => {
        try {
            const stored = localStorage.getItem('cart');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            login(storedEmail);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('cart');
        setUser(null);
        setCart([]);
    };

    const addToCart = (product: Product) => {
        setCart(prev =>
            prev.find(item => item.id === product.id)
                ? prev.map(item =>
                    item.id === product.id
                        ? {...item, quantity: (item.quantity ?? 1) + 1}
                        : item
                )
                : [...prev, {...product, quantity: 1}]
        );
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const decreaseQuantity = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? {...item, quantity: Math.max((item.quantity ?? 1) - 1, 1)}
                    : item
            )
        );
    };

    return (
        <AuthContext.Provider value={{
            user, login, logout, cart, addToCart,
            removeFromCart, decreaseQuantity
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Auth hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};

// Cart-specific hook
export const useCart = () => {
    const { cart, addToCart, removeFromCart, decreaseQuantity } = useAuth();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
    return { cart, addToCart, removeFromCart, decreaseQuantity, totalItems };
};
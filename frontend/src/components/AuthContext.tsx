import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
    userName: string | null;
    login: (name: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        if (storedUser) {
            setUserName(storedUser);
        }
    }, []);

    const login = (name: string) => {
        localStorage.setItem('userName', name);
        setUserName(name);
    };

    const logout = () => {
        localStorage.removeItem('userName');
        setUserName(null);
    };

    return (
        <AuthContext.Provider value={{ userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
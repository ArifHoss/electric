import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'));

    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        if (storedUser !== userName) {
            setUserName(storedUser);
        }
    }, []);

    const login = (name) => {
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

export const useAuth = () => useContext(AuthContext);
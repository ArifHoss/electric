import {Link, useNavigate} from 'react-router-dom';
import {FaEdgeLegacy} from 'react-icons/fa';
import {useState} from 'react';
import {useAuth} from "./AuthContext.tsx";
import axios from "axios";

// const users = [
//     {
//         name: 'Arif Hossain',
//         email: 'email@gmail.com',
//         password: '12345' // Store as string for input comparison
//     }
// ];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users/login', {
                email,
                password
            });

            const { name } = response.data;
            login(name);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMsg('Fel e-post eller lösenord.');
        }
    };

    return (
        <div className="pt-20 px-4 max-w-md mx-auto space-y-4 ">
            <Link
                to="/"
                className="text-xl font-bold tracking-wide flex justify-center"
            >
                ELECTRIC
                <FaEdgeLegacy className="text-2xl text-green-700 font-bold"/>
            </Link>
            <h4 className="font-semibold flex justify-center">INLOGGNING</h4>

            <div className="flex justify-center">
                <div className="flex gap-2 text-sm font-medium bg-gray-300 p-2 rounded-full max-w-[12rem]">
                    <button
                        className="py-2 px-6 rounded-full bg-white text-black"
                    >
                        Privat
                    </button>
                    <button
                        onClick={() => navigate('/foretag')}
                        className="py-1 px-4 rounded-full transition-colors"
                    >
                        Företag
                    </button>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    E-post
                </label>
                <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-300"
                />

                <label htmlFor="password" className="block text-sm font-medium">
                    Lösenord
                </label>
                <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-300"
                />

                <Link
                    to="/forget-pass"
                    className="block text-blue-600 text-sm mt-2 flex justify-end"
                >
                    Glömt ditt lösenord?
                </Link>

                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

                <button
                    onClick={handleLogin}
                    disabled={!email || !password}
                    className={`mt-4 w-full py-2 rounded transition-colors ${
                        email && password
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-400 text-white cursor-not-allowed'
                    }`}
                >
                    Logga in
                </button>
                <div className="flex justify-center">
                    <p>Har ni inget konto? </p>
                    <Link to='/register' className="underline">Registera</Link>
                </div>
                <div className="flex justify-center">
                    <p>Har ni inget konto? </p>
                    <Link to='/createAccount' className="underline">Skapa konto</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

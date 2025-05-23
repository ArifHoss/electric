import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const users = [
    {
        name: 'Arif Hossain',
        email: 'email@gmail.com',
        password: '12345' // Store as string for input comparison
    }
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const matchedUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
            localStorage.setItem('userName', matchedUser.name);
            navigate('/'); // Go to homepage or dashboard
        } else {
            setErrorMsg('Fel e-post eller lösenord.');
        }
    };

    return (
        <div className="pt-20 px-4 max-w-md mx-auto space-y-4">
            <Link
                to="/"
                className="text-xl font-bold tracking-wide text-blue-600"
            >
                ELECTRIC
            </Link>
            <h4 className="text-xl font-semibold">INLOGGNING</h4>

            <div className="flex gap-4 text-sm font-medium">
                <button className="py-1 px-3 border-b-2 border-blue-600">
                    Privat
                </button>
                <button className="py-1 px-3 text-gray-500">Företag</button>
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
                    className="block text-blue-600 text-sm mt-2"
                >
                    Glömt ditt lösenord?
                </Link>

                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

                <button
                    onClick={handleLogin}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Logga in
                </button>
            </div>
        </div>
    );
};

export default Login;

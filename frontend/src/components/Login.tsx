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
    const [selected, setSelected] = useState('privat');

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
        <div className="pt-20 px-4 max-w-md mx-auto space-y-4 ">
            <Link
                to="/"
                className="text-xl font-bold tracking-wide text-blue-600 flex justify-center"
            >
                ELECTRIC
            </Link>
            <h4 className="text-xl font-semibold flex justify-center">INLOGGNING</h4>

            <div className="flex justify-center gap-4 text-sm font-medium bg-gray-300 p-1 rounded-full">
                <button
                    onClick={() => setSelected('privat')}
                    className={`py-1 px-4 rounded-full transition-colors duration-200 ${
                        selected === 'privat'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-600'
                    }`}
                >
                    Privat
                </button>
                <button
                    onClick={() => {
                        setSelected('foretag');
                        navigate('/foretag'); // Redirect to Företag page
                    }}
                    className={`py-1 px-4 rounded-full transition-colors duration-200 ${
                        selected === 'foretag'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-600'
                    }`}
                >
                    Företag
                </button>
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
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Logga in
                </button>
                <div className="flex justify-center">
                    <p>Har ni inget konto? </p>
                    <Link to='/register' className="underline">Registera</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

import {useState, useRef, useEffect} from 'react'; // ← add useRef and useEffect
import {Link} from 'react-router-dom';
import {FiMenu, FiUser, FiShoppingCart, FiMapPin} from 'react-icons/fi';
import {FaTimes, FaEdgeLegacy} from 'react-icons/fa';
import {useAuth} from "./AuthContext.tsx";

const menuItems = [
    {label: 'Datorer & Kontor', to: ''},
    {label: 'Mobiler, Tablets & Smartklockor', to: ''},
    {label: 'TV, Ljud & Smart Hem', to: ''},
    {label: 'Gaming', to: ''},
    {label: 'Datorkomponenter', to: ''},
    {label: 'Epoq Kök & Tvättstuga', to: ''},
    {label: 'Vitvaror', to: ''},
    {label: 'Hem, Hushåll & Trädgård', to: ''},
    {label: 'Personvård, Hälsa & Skönhet', to: ''},
    {label: 'Sport & Fritid', to: ''},
    {label: 'LEGO', to: '/lego'},
    {label: 'Tjänster & Tillbehör', to: ''},
    {label: 'Elgiganten Företag', to: ''},
    {label: 'Outlet', to: ''},
    {label: 'Kampanjer', to: ''},
    {label: 'Elgiganten Kundklubb', to: ''},
    {label: 'Jobba hos oss', to: ''}
];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);
    const {user} = useAuth();

    const initials = user
        ? `${user.firstName[0] ?? ''}${user.lastName[0] ?? ''}`.toUpperCase()
        : '';

    // 2. Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setDrawerOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [drawerOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setDrawerOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    const NavIcons = () => (
        <div className="flex items-center justify-around w-full md:w-auto gap-6 text-sm">
            <Link to="/location" className="flex flex-col items-center hover:text-blue-400">
                <FiMapPin className="text-xl"/>
                <span className="hidden md:inline text-xs">Butik</span>
            </Link>
            {user ? (
                <Link to="/minsida" className="flex flex-col items-center hover:text-blue-400">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                        {initials}
                    </div>
                    <span className="hidden md:inline text-xs">Min sida</span>
                </Link>
            ) : (
                <Link to="/login" className="flex flex-col items-center hover:text-blue-400">
                    <FiUser className="text-xl"/>
                    <span className="hidden md:inline text-xs">Login</span>
                </Link>
            )}
            <Link to="/cart" className="flex flex-col items-center hover:text-blue-400">
                <FiShoppingCart className="text-xl"/>
                <span className="hidden md:inline text-xs">Kundvagn</span>
            </Link>
        </div>
    );

    return (
        <section>
            <header className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
                    {/* Hamburger: show first on mobile, second on desktop */}
                    <div className="flex items-center gap-4">

                        <button
                            aria-label="Öppna meny"
                            className="flex items-center gap-1 order-1 md:order-2"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <FiMenu className="text-2xl"/>
                            <span className="hidden md:inline text-sm">Meny</span>
                        </button>
                        {/* Logo: show second on mobile, first on desktop */}
                        <Link
                            to="/"
                            className="text-xl font-bold tracking-wide flex items-center order-2 md:order-1"
                        >
                            ELECTRIC
                            <FaEdgeLegacy className="text-2xl text-green-700 font-bold ml-1"/>
                        </Link>
                    </div>

                    {/* CENTER: Search bar (only on md+) */}
                    <div className="hidden md:flex flex-grow max-w-md relative">
                        <input
                            type="text"
                            placeholder="Sök produkter..."
                            className="w-full px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="20"
                            height="20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                            />
                        </svg>
                    </div>

                    {/* RIGHT: Icons - mobile (no text), desktop (with text) */}
                    <div className="flex items-center gap-4 md:hidden">
                        <Link to="/location">
                            <FiMapPin className="text-xl hover:text-blue-400"/>
                        </Link>
                        {user ? (
                            <Link to="/minsida">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                                    {initials}
                                </div>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <FiUser className="text-xl hover:text-blue-400"/>
                            </Link>
                        )}
                        <Link to="/cart">
                            <FiShoppingCart className="text-xl hover:text-blue-400"/>
                        </Link>
                    </div>

                    {/* DESKTOP: icons with text */}
                    <div className="hidden md:flex ml-auto">
                        <NavIcons/>
                    </div>
                </div>

                {/* Drawer remains unchanged */}
                {drawerOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
                        <div
                            ref={drawerRef}
                            className="w-1/2 max-w-sm bg-gray-800 h-full overflow-y-auto px-6 py-6 space-y-4 transform transition-transform duration-300 ease-in-out translate-x-0"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold">Meny</span>
                                <button
                                    aria-label="Stäng meny"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    <FaTimes className="text-2xl"/>
                                </button>
                            </div>

                            {menuItems.map(({label, to}, idx) => (
                                <Link
                                    key={idx}
                                    to={to}
                                    onClick={() => setDrawerOpen(false)}
                                    className="block py-2 text-white text-base hover:text-blue-400"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
            {/* MOBILE SEARCH INPUT (only on small screens) */}
            <div className="md:hidden px-4 py-2 bg-gray-900 border-t border-gray-700 pt-14 md:pt-0">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Sök produkter..."
                        className="w-full px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Navbar;

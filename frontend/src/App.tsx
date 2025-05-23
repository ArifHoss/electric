import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Cart from './components/Cart.tsx'
import Location from "./components/Location.tsx";
import Register from "./components/Register.tsx";
import LoginCompany from "./components/LoginCompany.tsx";

// Layout with Navbar + page content
const Layout = () => (
    <>
        <Navbar />
        <main className="pt-20 px-4">
            <Outlet />
        </main>
    </>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/foretag" element={<LoginCompany/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

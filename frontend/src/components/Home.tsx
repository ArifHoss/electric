import {
    FaComputer,
    FaKitchenSet,
    FaTv,
} from "react-icons/fa6";
import {GiWashingMachine} from "react-icons/gi";
import {IoIosPhonePortrait} from "react-icons/io";
import {IoGameControllerOutline} from "react-icons/io5";
import {PiHairDryer} from "react-icons/pi";
import {SiAirtable} from "react-icons/si";
import {MdOutlet, MdOutlineMedicalServices} from "react-icons/md";
import {Link} from "react-router-dom";
import BannerCarousel from "../banner/BannerCarousel.tsx";
import CategoryCards from "../banner/CategoryCards.tsx";
import Footer from "./Footer.tsx";

const menuItems = [
    {label: "Outlet", to: "/outlet", icon: <MdOutlet/>},
    {label: "Datorer & Kontor", to: "/dator", icon: <FaComputer/>},
    {label: "Mobiler, Tablets & Smartklockor", to: "/phone", icon: <IoIosPhonePortrait/>},
    {label: "TV, Ljud & Smart Hem", to: "/tvsound", icon: <FaTv/>},
    {label: "Gaming", to: "/gaming", icon: <IoGameControllerOutline/>},
    {label: "Epoq Kök & Tvättstuga", to: "/kitchenwashing", icon: <FaKitchenSet/>},
    {label: "Vitvaror", to: "/vitavaror", icon: <GiWashingMachine/>},
    {label: "Personvård, Hälsa & Skönhet", to: "/personalcare", icon: <PiHairDryer/>},
    {label: "Sport & Fritid", to: "/sport", icon: <SiAirtable/>},
    {label: "Tjänster & Tillbehör", to: "/service", icon: <MdOutlineMedicalServices/>},
];

const Home = () => {

    return (
        <section>
            {/* Horizontal Menu */}
            <header
                className="flex overflow-x-auto gap-6 py-6 px-6 snap-x snap-mandatory border-b scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-600">
                {menuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center min-w-[120px] max-w-[160px] snap-start text-center px-2"
                    >
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <p className="text-sm font-medium leading-snug break-words">{item.label}</p>
                    </Link>
                ))}
            </header>
            {/* Promotional banner carousel */}
            <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0">
                <BannerCarousel/>
            </section>
            {/* Product categories - vertical scrollable */}
            <CategoryCards/>
            <CategoryCards/>
            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default Home;
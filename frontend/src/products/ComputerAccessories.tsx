import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ProductCard from "../banner/ProductCard.tsx";

const accessoriesMenuItems = [
    { label: "Tangentbord", to: "/demo", image: "/keyboard.png" },
    { label: "Datormöss", to: "/demo", image: "/keyboard.png" },
    { label: "Skärmar", to: "/demo", image: "/keyboard.png" },
    { label: "Webbkameror", to: "/demo", image: "/keyboard.png" },
    { label: "Dockningsstationer", to: "/demo", image: "/keyboard.png" },
    { label: "Headsets", to: "/demo", image: "/keyboard.png" },
    { label: "Laptopväskor", to: "/demo", image: "/keyboard.png" },
    { label: "USB-hubbar", to: "/demo", image: "/keyboard.png" }
];

const accessoriesProductList = [
    {
        image: "/keyboard.png",
        title: "Logitech MX Keys – Trådlöst Tangentbord",
        reviews: 42,
        description: "Elegant, bekvämt och pålitligt tangentbord för arbete och kreativitet.",
        availability: "I lager online (40+) | Finns i 65 butiker",
        to: "/product/401"
    },
    {
        image: "/keyboard.png",
        title: "Logitech MX Master 3S Trådlös Mus",
        reviews: 39,
        description: "Avancerad mus för maximal produktivitet och ergonomi.",
        availability: "I lager online | Finns i 58 butiker",
        to: "/product/402"
    },
    {
        image: "/keyboard.png",
        title: "ASUS 27\" WQHD Skärm 165Hz",
        reviews: 21,
        description: "Perfekt för gaming och arbete – hög upplösning och uppdateringsfrekvens.",
        availability: "I lager online (25+) | Finns i 33 butiker",
        to: "/product/403"
    },
    {
        image: "/keyboard.png",
        title: "SteelSeries Arctis Nova 7P Wireless Headset",
        reviews: 16,
        description: "Trådlöst premium-headset med kristallklart ljud och komfort.",
        availability: "I lager online (20+) | Finns i 45 butiker",
        to: "/product/404"
    },
    {
        image: "/keyboard.png",
        title: "Targus CitySmart 15.6\" Laptopväska",
        reviews: 12,
        description: "Skyddande och stilren väska för arbete och resa.",
        availability: "I lager online | Finns i 29 butiker",
        to: "/product/405"
    }
];

const ComputerAccessories = () => {
    return (
        <section>
            <header className="px-6 py-10 bg-gray-100 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">DATOR- & KONTORSTILLBEHÖR</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Allt du behöver för att förbättra din arbetsyta – från tangentbord till skärmar och väskor.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
                {accessoriesMenuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl shadow hover:bg-gray-50 transition text-center"
                    >
                        <img src={item.image} alt={item.label} className="w-16 h-16 object-contain" />
                        <p className="text-lg font-semibold">{item.label}</p>
                    </Link>
                ))}
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {accessoriesProductList.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default ComputerAccessories;
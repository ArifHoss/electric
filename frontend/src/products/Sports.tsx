import { Link } from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";

const menuItems = [
    { label: "Löpband", to: "/demo", image: "/camera-1.png" },
    { label: "Crosstrainer", to: "/demo", image: "/camera-1.png" },
    { label: "Träningscykel", to: "/demo", image: "/camera-1.png" },
    { label: "Vikter & Hantlar", to: "/demo", image: "/camera-1.png" },
    { label: "Yogamattor", to: "/demo", image: "/camera-1.png" },
    { label: "Sportklockor", to: "/demo", image: "/camera-1.png" },
    { label: "Actionkameror", to: "/demo", image: "/camera-1.png" },
    { label: "El-scooter", to: "/demo", image: "/camera-1.png" },
    { label: "Hörlurar för träning", to: "/demo", image: "/camera-1.png" },
    { label: "Vätskeryggsäckar", to: "/demo", image: "/camera-1.png" }
];

const productList = [
    {
        image: "/camera.png",
        title: "Xiaomi Mi Electric Scooter Pro 2",
        reviews: 14,
        description: "Kraftfull el-scooter med lång räckvidd och snabb laddning.",
        availability: "I lager online | Finns i 32 butiker",
        to: "/product/701"
    },
    {
        image: "/camera.png",
        title: "Fitbit Charge 5 Aktivitetsarmband",
        reviews: 26,
        description: "Hälsospårning, sömnanalys och pulsmätning dygnet runt.",
        availability: "I lager online | Finns i 50 butiker",
        to: "/product/702"
    },
    {
        image: "/camera.png",
        title: "Titan Life Trainer Löpband T60",
        reviews: 9,
        description: "Stabilt löpband för hemmaträning med justerbar lutning.",
        availability: "Begränsat lager | Endast online",
        to: "/product/703"
    },
    {
        image: "/camera.png",
        title: "GoPro HERO11 Actionkamera",
        reviews: 11,
        description: "Perfekt för sportäventyr med 5.3K video och slow motion.",
        availability: "I lager online | Finns i 20 butiker",
        to: "/product/704"
    },
    {
        image: "/camera.png",
        title: "Casall Yoga Mat Position 4mm",
        reviews: 6,
        description: "Miljövänlig och greppvänlig yogamatta för alla nivåer.",
        availability: "I lager online | Finns i 28 butiker",
        to: "/product/705"
    },
    {
        image: "/camera.png",
        title: "JBL Endurance Run 2 Hörlurar",
        reviews: 12,
        description: "Svettresistenta in-ear hörlurar med kraftfullt ljud.",
        availability: "I lager online (30+) | Finns i 40 butiker",
        to: "/product/706"
    },
    {
        image: "/camera.png",
        title: "Polar Grit X Pro Multisportklocka",
        reviews: 8,
        description: "Robust GPS-klocka med lång batteritid för alla äventyr.",
        availability: "I lager online | Finns i 22 butiker",
        to: "/product/707"
    },
    {
        image: "/camera.png",
        title: "Abilica WeightSet 50 kg Hantelset",
        reviews: 5,
        description: "Perfekt viktsats för styrketräning hemma.",
        availability: "Begränsat lager | Endast online",
        to: "/product/708"
    },
    {
        image: "/camera.png",
        title: "Hydro Flask Vätskeryggsäck",
        reviews: 3,
        description: "Lätt, smidig och perfekt för längre turer.",
        availability: "I lager online | Finns i 15 butiker",
        to: "/product/709"
    },
    {
        image: "/camera.png",
        title: "Abilica Spinningcykel WinTech",
        reviews: 10,
        description: "Tystgående cykel med justerbart motstånd.",
        availability: "I lager online | Finns i 18 butiker",
        to: "/product/710"
    }
];

const Sports = () => {
    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">SPORT & FRITID</h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Allt för en aktiv livsstil – träning, teknik och tillbehör. Upptäck vårt sortiment för sport och fritid.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-6">
                {menuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-md bg-white hover:bg-gray-100 transition text-center"
                    >
                        <img src={item.image} alt={item.label} className="w-16 h-16 object-contain" />
                        <p className="text-lg font-semibold">{item.label.toUpperCase()}</p>
                    </Link>
                ))}
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {productList.map((product, idx) => (
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

export default Sports;
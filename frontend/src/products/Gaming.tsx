import { Link } from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";

const menuItems = [
    { label: "Spelkonsoler", to: "/demo", image: "/game.png" },
    { label: "Gamingdatorer", to: "/demo", image: "/game.png" },
    { label: "Gamingtillbehör", to: "/demo", image: "/game.png" },
    { label: "Gamingheadset", to: "/demo", image: "/game.png" },
    { label: "Gamingmöss", to: "/demo", image: "/game.png" },
    { label: "Tangentbord", to: "/demo", image: "/game.png" },
    { label: "Skärmar för gaming", to: "/demo", image: "/game.png" },
    { label: "Gamingstolar", to: "/demo", image: "/game.png" },
    { label: "VR-headset", to: "/demo", image: "/game.png" },
    { label: "Spel och mjukvara", to: "/demo", image: "/game.png" },
];

const productList = [
    {
        image: "/gaming1.png",
        title: "PlayStation 5 Digital Edition",
        reviews: 75,
        description: "Nästa generations spelupplevelse med blixtsnabb SSD och realistisk grafik.",
        availability: "I lager online (40+) | Finns i 52 butiker",
        to: "/product/301"
    },
    {
        image: "/gaming2.png",
        title: "Xbox Series X 1TB",
        reviews: 68,
        description: "Kraftfull spelprestanda i elegant svart design.",
        availability: "I lager online (20+) | Finns i 39 butiker",
        to: "/product/302"
    },
    {
        image: "/gaming3.png",
        title: "Nintendo Switch OLED",
        reviews: 90,
        description: "Flexibel konsol med förbättrad skärm och ljud.",
        availability: "I lager online (55+) | Finns i 44 butiker",
        to: "/product/303"
    },
    {
        image: "/gaming4.png",
        title: "Lenovo Legion T5 Gaming PC",
        reviews: 32,
        description: "Klar för intensiva spel med RTX-grafik och snabb lagring.",
        availability: "I lager online (15+) | Finns i 21 butiker",
        to: "/product/304"
    },
    {
        image: "/gaming5.png",
        title: "Logitech G PRO X Gaming Headset",
        reviews: 48,
        description: "Professionellt ljud med Blue VO!CE-teknologi.",
        availability: "I lager online (60+) | Finns i 30 butiker",
        to: "/product/305"
    },
    {
        image: "/gaming6.png",
        title: "Razer Viper Ultimate Wireless Mouse",
        reviews: 22,
        description: "Ultralätt trådlös gamingmus med snabba svarstider.",
        availability: "I lager online (34) | Finns i 25 butiker",
        to: "/product/306"
    },
    {
        image: "/gaming7.png",
        title: "Corsair K70 RGB MK.2 Mechanical Keyboard",
        reviews: 19,
        description: "Responsiv mekanisk gaming med RGB-belysning.",
        availability: "I lager online (25+) | Finns i 18 butiker",
        to: "/product/307"
    },
    {
        image: "/gaming8.png",
        title: "Samsung Odyssey G7 32\" Gaming Monitor",
        reviews: 11,
        description: "Kurvad QHD-skärm med 240 Hz för en uppslukande upplevelse.",
        availability: "I lager online (12) | Finns i 16 butiker",
        to: "/product/308"
    },
    {
        image: "/gaming9.png",
        title: "Secretlab TITAN Evo Gaming Chair",
        reviews: 7,
        description: "Ergonomisk komfort och premiumdesign för långa spelpass.",
        availability: "Begränsat lager | Endast online",
        to: "/product/309"
    },
    {
        image: "/gaming10.png",
        title: "Meta Quest 2 VR-headset 128GB",
        reviews: 38,
        description: "Trådlös VR med otrolig frihet och prestanda.",
        availability: "I lager online (18+) | Finns i 20 butiker",
        to: "/product/310"
    }
];

const Gaming = () => {
    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">GAMING</h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Allt för din ultimata spelupplevelse – konsoler, tillbehör och gaming-PC i världsklass.
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

export default Gaming;
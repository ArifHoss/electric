import { Link } from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";

const menuItems = [
    { label: "Kylskåp", to: "/demo", image: "/fridge.png" },
    { label: "Frysar", to: "/demo", image: "/fridge.png" },
    { label: "Kyl/frys-kombiskåp", to: "/demo", image: "/fridge.png" },
    { label: "Side-by-side kyl", to: "/demo", image: "/fridge.png" },
    { label: "Vinkyl", to: "/demo", image: "/fridge.png" },
    { label: "Tvättmaskin", to: "/demo", image: "/fridge.png" },
    { label: "Torktumlare", to: "/demo", image: "/fridge.png" },
    { label: "Diskmaskin", to: "/demo", image: "/fridge.png" },
    { label: "Mikrovågsugn", to: "/demo", image: "/fridge.png" },
    { label: "Spis & Ugn", to: "/demo", image: "/fridge.png" },
    { label: "Fläktar", to: "/demo", image: "/fridge.png" },
    { label: "Tillbehör vitvaror", to: "/demo", image: "/fridge.png" }
];

const productList = [
    {
        image: "/refrigerator.png",
        title: "Electrolux Kylskåp ERF4114AOW",
        reviews: 22,
        description: "Rymligt kylskåp med smart inredning och låg energiförbrukning.",
        availability: "I lager online (40+) | Finns i 50 butiker",
        to: "/product/501"
    },
    {
        image: "/refrigerator.png",
        title: "Samsung Frys RZ32M7535B1",
        reviews: 10,
        description: "Stilren frys med No Frost och flexibel förvaring.",
        availability: "I lager online (18) | Finns i 30 butiker",
        to: "/product/502"
    },
    {
        image: "/refrigerator.png",
        title: "LG Kyl/frys GBB72PZDFN",
        reviews: 16,
        description: "Effektiv kombination med DoorCooling+ och låg ljudnivå.",
        availability: "I lager online (22) | Finns i 28 butiker",
        to: "/product/503"
    },
    {
        image: "/refrigerator.png",
        title: "Cavin Vinkyl CV-45",
        reviews: 7,
        description: "Elegant vinkyl med plats för 45 flaskor och LED-belysning.",
        availability: "Endast online | Begränsat lager",
        to: "/product/504"
    },
    {
        image: "/refrigerator.png",
        title: "Siemens Diskmaskin SN636X03ME",
        reviews: 13,
        description: "Tyst och snabb diskmaskin med varioSpeed Plus.",
        availability: "I lager online | Finns i 40 butiker",
        to: "/product/505"
    },
    {
        image: "/refrigerator.png",
        title: "Bosch Tvättmaskin WAN282B2SN",
        reviews: 20,
        description: "Energieffektiv och skonsam mot kläderna.",
        availability: "I lager online (30+) | Finns i 45 butiker",
        to: "/product/506"
    },
    {
        image: "/refrigerator.png",
        title: "Whirlpool Torktumlare FFT M22 9X2B EE",
        reviews: 9,
        description: "Värmepumpsteknologi och stor kapacitet för familjen.",
        availability: "I lager online | Finns i 35 butiker",
        to: "/product/507"
    },
    {
        image: "/refrigerator.png",
        title: "Sharp Mikrovågsugn YC-MS01E-B",
        reviews: 11,
        description: "Enkel och kompakt mikrovågsugn med 20 liter kapacitet.",
        availability: "I lager online | Endast online",
        to: "/product/508"
    },
    {
        image: "/refrigerator.png",
        title: "Electrolux Inbyggnadsugn EOE7P31Z",
        reviews: 5,
        description: "Multifunktionell ugn med pyrolytisk rengöring.",
        availability: "I lager online (15) | Finns i 20 butiker",
        to: "/product/509"
    },
    {
        image: "/refrigerator.png",
        title: "Cylinda Fläkt Trend Slim",
        reviews: 6,
        description: "Slimmad design för det moderna köket.",
        availability: "I lager online | Finns i 25 butiker",
        to: "/product/510"
    }
];

const Vitavaror = () => {
    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">VITVAROR</h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Hitta vitvarorna som passar ditt hem och din livsstil. Vi erbjuder kylskåp, tvättmaskiner, diskmaskiner och mycket mer – alltid till bra pris.
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

export default Vitavaror;
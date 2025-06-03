import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ProductCard from "../banner/ProductCard.tsx";

const legoMenuItems = [
    { label: "LEGO City", to: "/demo", image: "/lego.png" },
    { label: "LEGO Technic", to: "/demo", image: "/lego.png" },
    { label: "LEGO Friends", to: "/demo", image: "/lego.png" },
    { label: "LEGO Ninjago", to: "/demo", image: "/lego.png" },
    { label: "LEGO Creator", to: "/demo", image: "/lego.png" },
    { label: "LEGO Duplo", to: "/demo", image: "/lego.png" },
    { label: "LEGO Star Wars", to: "/demo", image: "/lego.png" },
    { label: "LEGO Marvel", to: "/demo", image: "/lego.png" }
];

const legoProductList = [
    {
        image: "/lego.png",
        title: "LEGO City Brandstation",
        reviews: 14,
        description: "Hjälp brandmännen att släcka elden och rädda dagen!",
        availability: "I lager online (30+) | Finns i 55 butiker",
        to: "/product/301"
    },
    {
        image: "/lego.png",
        title: "LEGO Technic Bugatti Bolide",
        reviews: 21,
        description: "Bygg en ikonisk superbilsmodell i detalj.",
        availability: "I lager online | Finns i 40 butiker",
        to: "/product/302"
    },
    {
        image: "/lego.png",
        title: "LEGO Friends Hårsalong",
        reviews: 5,
        description: "Skapa roliga frisyrer och scener med Friends-världen.",
        availability: "I lager online | Finns i 33 butiker",
        to: "/product/303"
    },
    {
        image: "/lego.png",
        title: "LEGO Ninjago Drakens Tempel",
        reviews: 8,
        description: "Skydda templet med dina ninjahjältar!",
        availability: "I lager online (20+) | Finns i 44 butiker",
        to: "/product/304"
    },
    {
        image: "/lego.png",
        title: "LEGO Duplo Bondgård",
        reviews: 11,
        description: "Lär och lek med djur och byggklossar för de minsta.",
        availability: "I lager online (50+) | Finns i 60 butiker",
        to: "/product/305"
    }
];

const LEGO = () => {
    return (
        <section>
            <header className="px-6 py-10 text-center bg-yellow-100">
                <h1 className="text-4xl font-extrabold text-yellow-900 mb-3">LEGO</h1>
                <p className="text-yellow-800 text-lg max-w-2xl mx-auto">
                    Utforska vårt färgglada sortiment av LEGO-set för alla åldrar. Låt kreativiteten flöda!
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
                {legoMenuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center gap-3 p-5 bg-white shadow rounded-xl hover:bg-gray-50 transition text-center"
                    >
                        <img src={item.image} alt={item.label} className="w-16 h-16 object-contain" />
                        <p className="text-lg font-semibold">{item.label}</p>
                    </Link>
                ))}
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {legoProductList.map((product, idx) => (
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

export default LEGO;
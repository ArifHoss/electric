import { Link } from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";

const menuItems = [
    { label: "Diskmaskiner", to: "/demo", image: "/washing-machine.png" },
    { label: "Tvättmaskiner", to: "/demo", image: "/washing-machine.png" },
    { label: "Torktumlare", to: "/demo", image: "/washing-machine.png" },
    { label: "Kombimaskiner", to: "/demo", image: "/washing-machine.png" },
    { label: "Köksfläktar", to: "/demo", image: "/washing-machine.png" },
    { label: "Inbyggnadsugnar", to: "/demo", image: "/washing-machine.png" },
    { label: "Hällar", to: "/demo", image: "/washing-machine.png" },
    { label: "Mikrovågsugnar", to: "/demo", image: "/washing-machine.png" },
    { label: "Kökslådor & tillbehör", to: "/demo", image: "/washing-machine.png" },
    { label: "Tvätt & Städ", to: "/demo", image: "/washing-machine.png" }
];

const productList = [
    {
        image: "/washing-drum.jpg",
        title: "Bosch Serie 4 Diskmaskin SMU4HVS01S",
        reviews: 18,
        description: "Tyst och effektiv diskmaskin med Home Connect-funktion.",
        availability: "I lager online (40+) | Finns i 36 butiker",
        to: "/product/401"
    },
    {
        image: "washing-drum.jpg",
        title: "LG F4WV709P1E Tvättmaskin",
        reviews: 21,
        description: "Energieffektiv tvättmaskin med AI Direct Drive och ångtvätt.",
        availability: "I lager online (22) | Finns i 30 butiker",
        to: "/product/402"
    },
    {
        image: "washing-drum.jpg",
        title: "Electrolux PerfectCare 700 Torktumlare",
        reviews: 11,
        description: "Skonsam mot kläderna med värmepumpsteknik.",
        availability: "I lager online (14) | Finns i 28 butiker",
        to: "/product/403"
    },
    {
        image: "washing-drum.jpg",
        title: "Samsung QuickDrive Kombimaskin",
        reviews: 9,
        description: "Tvätta och torka i ett – spara både tid och plats.",
        availability: "I lager online (16) | Finns i 25 butiker",
        to: "/product/404"
    },
    {
        image: "washing-drum.jpg",
        title: "Electrolux Köksfläkt EFV90657OK",
        reviews: 7,
        description: "Stilren design och effektiv luftfiltrering.",
        availability: "I lager online | Endast online",
        to: "/product/405"
    },
    {
        image: "washing-drum.jpg",
        title: "Siemens Inbyggnadsugn HB676G5S6S",
        reviews: 10,
        description: "Exakt temperaturkontroll med varmluft och pyrolytisk rengöring.",
        availability: "I lager online (12) | Finns i 18 butiker",
        to: "/product/406"
    },
    {
        image: "washing-drum.jpg",
        title: "Whirlpool induktionshäll ACM802NE",
        reviews: 5,
        description: "Snabb och säker matlagning med flexibel zonindelning.",
        availability: "I lager online | Finns i 22 butiker",
        to: "/product/407"
    },
    {
        image: "washing-drum.jpg",
        title: "Samsung Mikrovågsugn MS23K3513AW",
        reviews: 20,
        description: "Effektiv mikrovåg med stilren vit design.",
        availability: "I lager online (35+) | Finns i 40 butiker",
        to: "/product/408"
    },
    {
        image: "washing-drum.jpg",
        title: "Epoq kökslåda med dämpning 40cm",
        reviews: 4,
        description: "Hög kvalitet för ditt drömkök.",
        availability: "I lager online | Endast i utvalda butiker",
        to: "/product/409"
    },
    {
        image: "washing-drum.jpg",
        title: "Miele Scout RX3 Robotdammsugare",
        reviews: 13,
        description: "Kraftfull städning för hela hemmet.",
        availability: "I lager online (20+) | Finns i 30 butiker",
        to: "/product/410"
    }
];

const KitchenWashing = () => {
    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">EPOQ KÖK & TVÄTTSTUGA</h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Utforska vår samling av vitvaror, köksutrustning och smarta lösningar för tvätt och städ.
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

export default KitchenWashing;
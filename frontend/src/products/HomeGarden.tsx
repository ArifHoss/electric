import {Link} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ProductCard from "../banner/ProductCard.tsx";
import products from "../data/products.ts";

const homeGardenMenu = [
    {label: "Dammsugare", to: "/demo", image: "/coffee.png"},
    {label: "Luftrenare", to: "/demo", image: "/coffee.png"},
    {label: "Kaffemaskiner", to: "/demo", image: "/coffee.png"},
    {label: "Vattenkokare", to: "/demo", image: "/coffee.png"},
    {label: "Köksmaskiner", to: "/demo", image: "/coffee.png"},
    {label: "Strykjärn", to: "/demo", image: "/coffee.png"},
    {label: "Trädgårdsverktyg", to: "/demo", image: "/coffee.png"},
    {label: "Belysning", to: "/demo", image: "/coffee.png"}
];

// const homeGardenProducts = [
//     {
//         image: "/coffee.png",
//         title: "Roborock S8+ Robotdammsugare",
//         reviews: 27,
//         description: "Effektiv rengöring med självtömmande station och smart navigering.",
//         availability: "I lager online (20+) | Finns i 38 butiker",
//         price: 7490,
//         category: "Home",
//         currency: "SEK",
//         stock: 80,
//         to: "/product/601"
//     },
//     {
//         image: "/coffee.png",
//         title: "Dyson Pure Cool Me Luftrenare",
//         reviews: 14,
//         description: "Personlig luftrening och svalka i ett kompakt format.",
//         availability: "I lager online (10+) | Finns i 22 butiker",
//         price: 3490,
//         category: "Home",
//         currency: "SEK",
//         stock: 50,
//         to: "/product/602"
//     },
//     {
//         image: "/coffee.png",
//         title: "Nespresso Vertuo Next Kaffemaskin",
//         reviews: 41,
//         description: "Brygg alla typer av kaffe med ett knapptryck.",
//         availability: "I lager online (45+) | Finns i 50 butiker",
//         price: 1890,
//         category: "Home",
//         currency: "SEK",
//         stock: 140,
//         to: "/product/603"
//     },
//     {
//         image: "/coffee.png",
//         title: "OBH Nordica Vattenkokare",
//         reviews: 18,
//         description: "Elegant och snabbkokande vattenkokare för alla kök.",
//         availability: "I lager online | Finns i 60 butiker",
//         price: 590,
//         category: "Home",
//         currency: "SEK",
//         stock: 200,
//         to: "/product/604"
//     },
//     {
//         image: "/coffee.png",
//         title: "Bosch Trimmer EasyGrassCut 23",
//         reviews: 8,
//         description: "Smidig trimmer för mindre trädgårdsytor.",
//         availability: "I lager online | Finns i 32 butiker",
//         price: 890,
//         category: "Garden",
//         currency: "SEK",
//         stock: 75,
//         to: "/product/605"
//     }
// ];
const HomeGarden = () => {
    return (
        <section>
            <header className="px-6 py-10 bg-gray-100 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">HEM, HUSHÅLL & TRÄDGÅRD</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Upptäck smarta lösningar för hem och hushåll – från robotdammsugare till kaffemaskiner och
                    trädgårdsredskap.
                </p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
                {homeGardenMenu.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl shadow hover:bg-gray-50 transition text-center"
                    >
                        <img src={item.image} alt={item.label} className="w-16 h-16 object-contain"/>
                        <p className="text-lg font-semibold">{item.label}</p>
                    </Link>
                ))}
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products
                        .filter(product => product.category === "LAPTOP".toUpperCase()) // CATEGORY NEED TO MATCH EXACTLY
                        .map((product, idx) => (
                            <ProductCard key={idx} {...product} />
                        ))}
                </div>
            </section>

            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default HomeGarden;
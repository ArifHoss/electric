import {Link} from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";
import products from "../data/products.ts";

const menuItems = [
    {label: "Hårfön", to: "/demo", image: "/dryer.png"},
    {label: "Rakapparat", to: "/demo", image: "/dryer.png"},
    {label: "Plattång", to: "/demo", image: "/dryer.png"},
    {label: "Eltandborste", to: "/demo", image: "/dryer.png"},
    {label: "Massageapparat", to: "/demo", image: "/dryer.png"},
    {label: "Vågtång", to: "/demo", image: "/dryer.png"},
    {label: "Skäggtrimmer", to: "/demo", image: "/dryer.png"},
    {label: "Hårklippare", to: "/demo", image: "/dryer.png"},
    {label: "IPL hårborttagning", to: "/demo", image: "/dryer.png"},
    {label: "Vågar & Hälsa", to: "/demo", image: "/dryer.png"}
];

// const productList = [
//     {
//         image: "/people.png",
//         title: "Dyson Supersonic Hårfön",
//         reviews: 28,
//         description: "Kraftfull och skonsam hårtork med intelligent värmestyrning.",
//         availability: "I lager online (20+) | Finns i 40 butiker",
//         price: 4490,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 80,
//         to: "/product/601"
//     },
//     {
//         image: "/people.png",
//         title: "Philips Series 9000 Rakapparat",
//         reviews: 16,
//         description: "Sladdlös rakning med SkinIQ-teknologi.",
//         availability: "I lager online (15) | Finns i 25 butiker",
//         price: 2890,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 70,
//         to: "/product/602"
//     },
//     {
//         image: "/people.png",
//         title: "GHD Platinum+ Plattång",
//         reviews: 21,
//         description: "Professionella stylingresultat med konstant temperaturkontroll.",
//         availability: "I lager online | Finns i 30 butiker",
//         price: 2990,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 60,
//         to: "/product/603"
//     },
//     {
//         image: "/people.png",
//         title: "Oral-B iO Series 8 Eltandborste",
//         reviews: 18,
//         description: "Smart borstning med AI och interaktiv display.",
//         availability: "I lager online | Finns i 50 butiker",
//         price: 2190,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 95,
//         to: "/product/604"
//     },
//     {
//         image: "/people.png",
//         title: "Beurer MG100 Massageapparat",
//         reviews: 7,
//         description: "Djupgående muskelavslappning med infraröd värme.",
//         availability: "Begränsat lager | Endast online",
//         price: 1790,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 35,
//         to: "/product/605"
//     },
//     {
//         image: "/people.png",
//         title: "Remington Curl & Straight Confidence",
//         reviews: 9,
//         description: "Multifunktionell vågtång för både lockar och raka frisyrer.",
//         availability: "I lager online | Finns i 30 butiker",
//         price: 990,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 70,
//         to: "/product/606"
//     },
//     {
//         image: "/people.png",
//         title: "Braun BT7240 Skäggtrimmer",
//         reviews: 14,
//         description: "Precisionstrimning med 39 längdinställningar.",
//         availability: "I lager online (20+) | Finns i 32 butiker",
//         price: 749,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 110,
//         to: "/product/607"
//     },
//     {
//         image: "/people.png",
//         title: "Wahl Elite Pro Hårklippare",
//         reviews: 10,
//         description: "Stark motor och proffsigt resultat hemma.",
//         availability: "I lager online | Finns i 18 butiker",
//         price: 1190,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 65,
//         to: "/product/608"
//     },
//     {
//         image: "/people.png",
//         title: "Philips Lumea Prestige IPL",
//         reviews: 25,
//         description: "Effektiv och smärtfri hårborttagning med långvarigt resultat.",
//         availability: "I lager online (12) | Endast online",
//         price: 4290,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 40,
//         to: "/product/609"
//     },
//     {
//         image: "/people.png",
//         title: "Withings Body+ Wi-Fi Vågar",
//         reviews: 11,
//         description: "Smarta vågar med vikt, kroppsfett och BMI.",
//         availability: "I lager online | Finns i 22 butiker",
//         price: 1290,
//         category: "Personvård",
//         currency: "SEK",
//         stock: 75,
//         to: "/product/610"
//     }
// ];

const PersonalCare = () => {
    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">PERSONVÅRD, HÄLSA & SKÖNHET</h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Elgiganten har ett brett sortiment av personvårdsprodukter – från hårstyling och tandborstar till
                    massageapparater och hälsoprodukter.
                </p>
            </header>

            <section
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-6">
                {menuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-md bg-white hover:bg-gray-100 transition text-center"
                    >
                        <img src={item.image} alt={item.label} className="w-16 h-16 object-contain"/>
                        <p className="text-lg font-semibold">{item.label.toUpperCase()}</p>
                    </Link>
                ))}
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

export default PersonalCare;
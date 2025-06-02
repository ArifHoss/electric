import {Link} from "react-router-dom";
import ProductCard from "../banner/ProductCard.tsx";
import Footer from "../components/Footer.tsx";

const menuItems = [
    { label: "TV-apparater", to: "/computercard", image: "/tv.png" },
    { label: "Smart-TV", to: "/demo", image: "/tv.png" },
    { label: "OLED-TV", to: "/demo", image: "/tv.png" },
    { label: "QLED-TV", to: "/demo", image: "/tv.png" },
    { label: "4K Ultra HD", to: "/demo", image: "/tv.png" },
    { label: "8K-TV", to: "/demo", image: "/tv.png" },
    { label: "Projektorer", to: "/demo", image: "/tv.png" },
    { label: "TV-tillbehör", to: "/demo", image: "/tv.png" },
    { label: "Väggfästen", to: "/demo", image: "/tv.png" },
    { label: "TV-möbler", to: "/demo", image: "/tv.png" },
    { label: "Ljud & Soundbar", to: "/demo", image: "/tv.png" },
    { label: "Streaming & Mediaspelare", to: "/demo", image: "/tv.png" }

];

const productList = [
    {
        image: "/tv.jpg",
        title: "Samsung 65\" QLED 4K Smart-TV Q80C",
        reviews: 12,
        description: "Levande färger och fantastisk kontrast med Quantum Dot-teknologi.",
        availability: "I lager online (20+) | Finns i 42 butiker",
        to: "/product/201"
    },
    {
        image: "/tv.jpg",
        title: "LG OLED55C3 55\" 4K OLED evo Smart-TV",
        reviews: 31,
        description: "Perfekt svärta och oändlig kontrast för filmälskare.",
        availability: "I lager online (15+) | Finns i 35 butiker",
        to: "/product/202"
    },
    {
        image: "/tv.jpg",
        title: "Sony Bravia XR-75X90L 75\" LED 4K",
        reviews: 18,
        description: "Fängslande bild och ljud med Cognitive Processor XR.",
        availability: "I lager online (12) | Finns i 28 butiker",
        to: "/product/203"
    },
    {
        image: "/tv.jpg",
        title: "Philips The One 58\" 4K LED-TV PUS8818",
        reviews: 5,
        description: "Ambilight för en mer uppslukande tittarupplevelse.",
        availability: "I lager online (30+) | Finns i 54 butiker",
        to: "/product/204"
    },
    {
        image: "/tv.jpg",
        title: "TCL 55C845 55\" Mini-LED 4K Smart-TV",
        reviews: 9,
        description: "Prisvärd Mini-LED med fantastiska färger och HDR.",
        availability: "I lager online (40+) | Finns i 38 butiker",
        to: "/product/205"
    },
    {
        image: "/tv.jpg",
        title: "Samsung The Frame 50\" QLED 4K",
        reviews: 22,
        description: "TV som ser ut som en tavla – perfekt för inredningen.",
        availability: "I lager online (25+) | Finns i 48 butiker",
        to: "/product/206"
    },
    {
        image: "/tv.jpg",
        title: "Sony A80L 65\" 4K OLED Smart-TV",
        reviews: 14,
        description: "Otrolig bildkvalitet och smidig Google TV-plattform.",
        availability: "I lager online (10+) | Finns i 30 butiker",
        to: "/product/207"
    },
    {
        image: "/tv.jpg",
        title: "Panasonic TX-55MZ800E 55\" 4K OLED-TV",
        reviews: 6,
        description: "Klar OLED-prestanda och Dolby Atmos-ljud.",
        availability: "I lager online (18) | Finns i 29 butiker",
        to: "/product/208"
    },
    {
        image: "/tv.jpg",
        title: "Samsung 43\" Crystal UHD 4K AU7095",
        reviews: 19,
        description: "Smidig smart-TV med livlig 4K-upplevelse till bra pris.",
        availability: "I lager online (60+) | Finns i 60 butiker",
        to: "/product/209"
    },
    {
        image: "/tv.jpg",
        title: "Xiaomi Mi TV P1 55\" 4K LED Smart-TV",
        reviews: 8,
        description: "Prisvärd smart-TV med Android och Google Assistant.",
        availability: "I lager online (35+) | Finns i 41 butiker",
        to: "/product/210"
    },
    {
        image: "/tv.jpg",
        title: "Hisense U7KQ 65\" ULED 4K Smart-TV",
        reviews: 4,
        description: "Gamingvänlig TV med 120 Hz och HDR10+.",
        availability: "I lager online (22) | Finns i 26 butiker",
        to: "/product/211"
    }
];

const TvSoundSmartHome = () => {
    return (
        <section>
            <header className="px-6 py-8">
               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">TV, LJUD OCH SMART HEM</h1>
               <p className="text-gray-600 text-base md:text-lg max-w-2xl">Hos Electric har vi det mesta inom ljud och bild och smart hem. I vårt utbud finner du bland annat TV och högtalare från populära varumärken till låga priser.</p>
            </header>
            <section
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-6">
                {menuItems.map((item, idx) => (
                    <Link
                        to={item.to}
                        key={idx}
                        className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-md bg-white hover:bg-gray-100 transition text-center"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="w-16 h-16 object-contain"
                        />
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
                <Footer/>
            </footer>
        </section>
    );
};

export default TvSoundSmartHome;

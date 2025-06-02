import {Link} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ProductCard from "../banner/ProductCard.tsx";

const menuItems = [
    {label: "Mobiltelefon", to: "/computercard", image: "/computer-acc.png",},
    {label: "Surfplatta", to: "/demo", image: "/componet.png"},
    {label: "Smart ring", to: "/demo", image: "/keyboard.png"},
    {label: "Smartwatch", to: "/demo", image: "/monitor.png"},
    {label: "Aktivitetsarmband", to: "/demo", image: "/ipad.png"},
    {label: "Träningsklocka", to: "/demo", image: "/ipad-acc.png"},
    {label: "Mobiltillbehör", to: "/demo", image: "/printer.png"},
    {label: "Tillbehör till Smartwatch", to: "/demo", image: "/router.png"},
    {label: "Baganade mobiler", to: "/demo", image: "/hard.png"},
    {label: "Tillbehör till Surfplatta", to: "/demo", image: "/microsoft.png"},
    {label: "Mobilt bredband", to: "/demo", image: "/cybersecurity.png"},
    {label: "Fast telefoni", to: "/demo", image: "/service.png"},

];

const productList = [
    {
        image: "/iphone.png",
        title: "iPhone 15 Pro Max 256GB – Titanium",
        reviews: 24,
        description: "Snygg, snabb och byggd för fotografering i världsklass.",
        availability: "I lager online (50+) | Finns i 70 butiker",
        to: "/product/101"
    },
    {
        image: "/iphone.png",
        title: "Samsung Galaxy Tab S9 11\" 5G 256GB",
        reviews: 12,
        description: "Kraftfull surfplatta för både arbete och nöje.",
        availability: "I lager online (30+) | Finns i 45 butiker",
        to: "/product/102"
    },
    {
        image: "/iphone.png",
        title: "Oura Ring Gen 3 – Silver",
        reviews: 6,
        description: "Spåra din sömn, puls och aktivitet i elegant format.",
        availability: "Begränsat lager | Endast online",
        to: "/product/103"
    },
    {
        image: "/iphone.png",
        title: "Apple Watch Series 9 GPS 45mm",
        reviews: 30,
        description: "Den smartaste klockan – nu med dubbeltryck-funktion.",
        availability: "I lager online | Finns i 60 butiker",
        to: "/product/104"
    },
    {
        image: "/iphone.png",
        title: "Xiaomi Smart Band 8",
        reviews: 9,
        description: "Prisvärd aktivitetsarmband med lång batteritid.",
        availability: "I lager online | Finns i 80 butiker",
        to: "/product/105"
    },
    {
        image: "/iphone.png",
        title: "Garmin Forerunner 265 GPS Träningsklocka",
        reviews: 17,
        description: "Avancerad träning och hälsospårning.",
        availability: "Begränsat lager | Finns i 25 butiker",
        to: "/product/106"
    },
    {
        image: "/iphone.png",
        title: "Spigen Mag Armor Skal för iPhone 15",
        reviews: 5,
        description: "Tunt och skyddande skal med MagSafe-stöd.",
        availability: "I lager online | Finns i 90 butiker",
        to: "/product/107"
    },
    {
        image: "/iphone.png",
        title: "Apple Sport Loop Band – Midnight",
        reviews: 3,
        description: "Bekvämt och justerbart band för Apple Watch.",
        availability: "I lager online | Finns i 40 butiker",
        to: "/product/108"
    },
    {
        image: "/iphone.png",
        title: "Begagnad iPhone 13 128GB (B-klass)",
        reviews: 7,
        description: "Miljövänligt val – testad och återställd.",
        availability: "Endast online | 12 månaders garanti",
        to: "/product/109"
    },
    {
        image: "/iphone.png",
        title: "Huawei 4G LTE B535 Mobilt Bredband Router",
        reviews: 10,
        description: "Stabilt internet med stöd för upp till 64 enheter.",
        availability: "I lager online | Finns i 33 butiker",
        to: "/product/110"
    }
];


const Phone = () => {

    return (
        <section>
            <header className="px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                    Mobiler, Tablets & Smartklockor
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                    Upptäck vårt stora utbud av mobiltelefoner, surfplattor och smartklockor – allt du behöver för ett uppkopplat liv!
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

export default Phone;

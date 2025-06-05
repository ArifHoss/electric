import {useState} from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import OutletProductCard from "../banner/OutletProductCard.tsx";

const sampleCategories = [
    { id: 1, title: "OUTLET – TV & Hemmabio", category: "tv", image: "/tv.png" },
    { id: 2, title: "OUTLET – Datorer & Kontor", category: "computer", image: "/tv.png" },
    { id: 3, title: "OUTLET – Mobiler & Tablets", category: "phone", image: "/tv.png" },
    { id: 4, title: "OUTLET – Smartklockor", category: "watch", image: "/tv.png" },
    { id: 5, title: "OUTLET – Vitvaror", category: "vitvaror", image: "/tv.png" },
    { id: 6, title: "OUTLET – Gaming", category: "gaming", image: "/tv.png" },
    { id: 7, title: "OUTLET – Ljud & Högtalare", category: "sound", image: "/tv.png" },
    { id: 8, title: "OUTLET – Skönhet & Hälsa", category: "beauty", image: "/tv.png" },
    { id: 9, title: "OUTLET – Sport & Fritid", category: "sports", image: "/tv.png" },
    { id: 10, title: "OUTLET – Trädgård & Utemiljö", category: "garden", image: "/tv.png" },
    { id: 11, title: "OUTLET – Belysning & Smarta Hem", category: "smart-home", image: "/tv.png" },
    { id: 12, title: "OUTLET – Kaffemaskiner & Kök", category: "kitchen", image: "/tv.png" }
];
const baseProductList = [
    {
        image: "/tv.png",
        title: "OUTLET – Samsung 65\" QLED 4K TV",
        reviews: 5,
        description: "Demoprodukt med full garanti.",
        availability: "Begränsat antal | Endast online",
        discount: 0.25,
        price: 7990,
        to: "/product/301",
        category: "tv",
    },
    {
        image: "/tv.png",
        title: "OUTLET – MacBook Pro 14 M1 512GB",
        reviews: 12,
        description: "Tidigare visningsexemplar, som ny.",
        availability: "I lager online | Finns i 8 butiker",
        discount: 0.25, // 25% off
        price: 13490,
        to: "/product/302",
        category: "computer",
    },
    {
        image: "/tv.png",
        title: "OUTLET – iPhone 13 128GB (Blå)",
        reviews: 9,
        description: "Återköpt vara, kontrollerad & återställd.",
        availability: "I lager | Fri frakt",
        discount: 0.25, // 25% off
        price: 6790,
        to: "/product/303",
        category: "phone",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Sony WH-1000XM4 Hörlurar",
        reviews: 18,
        description: "Lätt använd – perfekt skick.",
        availability: "Begränsat antal | Endast online",
        discount: 0.25, // 25% off
        price: 1790,
        to: "/product/304",
        category: "sound",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Dell XPS 13 OLED 1TB",
        reviews: 3,
        description: "Ex-demo med originalförpackning.",
        availability: "I lager online | 3 butiker",
        discount: 0.25, // 25% off
        price: 11990,
        to: "/product/305",
        category: "computer",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Samsung Galaxy Tab S8",
        reviews: 6,
        description: "Som ny – tidigare utställd produkt.",
        availability: "I lager online",
        discount: 0.25, // 25% off
        price: 5690,
        to: "/product/306",
        category: "phone",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Xbox Series S",
        reviews: 14,
        description: "Kartongskadad – fullt fungerande.",
        availability: "Begränsat antal | 2 års garanti",
        discount: 0.25, // 25% off
        price: 2890,
        to: "/product/307",
        category: "gaming",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Electrolux Diskmaskin",
        reviews: 4,
        description: "Fyndvara från utställning.",
        availability: "Endast i butik",
        discount: 0.25, // 25% off
        price: 3990,
        to: "/product/308",
        category: "vitvaror",
    },
    {
        image: "/tv.png",
        title: "OUTLET – LG 55\" OLED TV",
        reviews: 7,
        description: "Repackad, ej använd.",
        availability: "I lager | Fri frakt",
        discount: 0.25, // 25% off
        price: 9990,
        to: "/product/309",
        category: "tv",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Garmin Smartwatch",
        reviews: 2,
        description: "Fabriksåterställd och rengjord.",
        availability: "I lager online",
        discount: 0.25, // 25% off
        price: 1590,
        to: "/product/310",
        category: "watch",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Lenovo ThinkPad E14",
        reviews: 5,
        description: "Refurbished med garanti.",
        availability: "Endast online",
        discount: 0.25, // 25% off
        price: 7890,
        to: "/product/311",
        category: "computer",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Bosch Torktumlare",
        reviews: 3,
        description: "Utställningsexemplar, fullt fungerande.",
        availability: "Finns i utvalda butiker",
        discount: 0.25, // 25% off
        price: 4690,
        to: "/product/312",
        category: "vitvaror",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Huawei FreeBuds 5i",
        reviews: 4,
        description: "Ej använd, öppen förpackning.",
        availability: "I lager online",
        discount: 0.25, // 25% off
        price: 690,
        to: "/product/313",
        category: "sound",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Philips Hue Smart Lamp",
        reviews: 6,
        description: "Som ny – tidigare visning.",
        availability: "I lager",
        discount: 0.25, // 25% off
        price: 390,
        to: "/product/314",
        category: "home",
    },
    {
        image: "/tv.png",
        title: "OUTLET – ASUS ROG Zephyrus G14",
        reviews: 10,
        description: "Gaming-laptop med minimal användning.",
        availability: "Endast online",
        discount: 0.25, // 25% off
        price: 12490,
        to: "/product/315",
        category: "gaming",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Apple Watch SE 44mm",
        reviews: 8,
        description: "Återställd och testad av tekniker.",
        availability: "I lager | 12 mån garanti",
        discount: 0.25, // 25% off
        price: 2990,
        to: "/product/316",
        category: "watch",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Netatmo Weather Station",
        reviews: 2,
        description: "Returvara i perfekt skick.",
        availability: "Online & butik",
        discount: 0.25, // 25% off
        price: 990,
        to: "/product/317",
        category: "home",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Samsung Soundbar HW-Q800B",
        reviews: 5,
        description: "Öppnad förpackning, komplett innehåll.",
        availability: "Endast online",
        discount: 0.25, // 25% off
        price: 2990,
        to: "/product/318",
        category: "sound",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Logitech MX Master 3",
        reviews: 11,
        description: "Visningsenhet – mycket bra skick.",
        availability: "I lager | Fri frakt",
        discount: 0.25, // 25% off
        price: 790,
        to: "/product/319",
        category: "computer",
    },
    {
        image: "/tv.png",
        title: "OUTLET – Jura E8 Espressomaskin",
        reviews: 1,
        description: "Använd i demo – noggrant rengjord.",
        availability: "Begränsat lager",
        discount: 0.25, // 25% off
        price: 7990,
        to: "/product/320",
        category: "home",
    },
];

// adding original pricee dynamically
const productList = baseProductList.map(product => ({
    ...product,
    originalPrice: Math.round(product.price / (1 - product.discount))
}))

const OutletProduct = () => {
    // const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    // const [selectedStore, setSelectedStore] = useState('');
    const [sortBy, setSortBy] = useState('relevance');

    const filteredProducts = productList
        .filter(p => selectedCategory ? p.category === selectedCategory : true)
        .sort((a, b) => {
            if (sortBy === 'lowestPrice') return a.price - b.price;
            if (sortBy === 'highestPrice') return b.price - a.price;
            if (sortBy === 'nameAsc') return a.title.localeCompare(b.title);
            if (sortBy === 'nameDesc') return b.title.localeCompare(a.title);
            return 0;
        });

    return (
        <section className="max-w-6xl mx-auto px-4 pt-24 space-y-8">
            <article className="p-6 space-y-4">
                <h1 className="text-3xl font-bold">OUTLET</h1>
                <p className="text-gray-700">
                    På Electric Outlet säljer vi produkter till ett rabatterat pris. Produkterna kan vara återköp eller
                    visningsexemplar men kontrollerade med garanti.
                </p>
            </article>

            <section className="flex overflow-x-auto gap-6 py-6 px-6 snap-x snap-mandatory border-b scrollbar-thin">
                {sampleCategories.map((item) => (
                    <Link
                        to={`/product/${item.id}`}
                        key={item.id}
                        className="flex flex-col items-center min-w-[140px] max-w-[160px] snap-start text-center px-2"
                    >
                        <div className="relative w-16 h-16 mb-2">
                            <div className="absolute -left-4 -top-1.5 w-10 h-10 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow">
                                OUTLET
                            </div>
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain"/>
                        </div>
                        <p className="text-sm font-medium leading-snug break-words">{item.title}</p>
                    </Link>
                ))}
            </section>

            <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-1 border rounded-md text-sm focus:ring-2"
                    >
                        <option value="">Alla kategorier</option>
                        <option value="tv">TV & Hemmabio</option>
                        <option value="computer">Datorer & Kontor</option>
                        <option value="phone">Mobiler & Tablets</option>
                        <option value="gaming">Gaming</option>
                    </select>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-sm font-medium text-gray-700">Sortera efter</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-1 border rounded-md text-sm focus:ring-2"
                    >
                        <option value="relevance">Mest relevant</option>
                        <option value="lowestPrice">Lägsta pris</option>
                        <option value="highestPrice">Högsta pris</option>
                        <option value="nameAsc">Namn A–Ö</option>
                        <option value="nameDesc">Namn Ö–A</option>
                    </select>
                </div>
            </section>

            <section className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredProducts.map((product, idx) => (
                        <OutletProductCard key={idx} {...product} />
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500 py-10">Inga produkter matchar dina filterval.</p>
                )}
            </section>

            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default OutletProduct;
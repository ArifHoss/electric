import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {
    IoIosArrowDropleft,
    IoIosArrowDropright
} from "react-icons/io";
import Footer from "../components/Footer.tsx";

const sampleProducts = [
    {
        id: 1,
        title: "OUTLET – TV & Hemmabio",
        category: "tv",
        image: "/tv.png",
    },
    {
        id: 2,
        title: "OUTLET – Datorer & Kontor",
        category: "computer",
        image: "/tv.png",
    },
    {
        id: 3,
        title: "OUTLET – Mobiler & Tablets",
        category: "phone",
        image: "/tv.png",
    },
    {
        id: 4,
        title: "OUTLET – Smartklockor",
        category: "watch",
        image: "/tv.png",
    },
    {
        id: 5,
        title: "OUTLET – Vitvaror",
        category: "vitvaror",
        image: "/tv.png",
    },
    {
        id: 6,
        title: "OUTLET – Gaming",
        category: "game",
        image: "/tv.png",
    },
    {
        id: 7,
        title: "OUTLET – Ljud & Högtalare",
        category: "sound",
        image: "/tv.png",
    },
    {
        id: 8,
        title: "OUTLET – Skönhet & Hälsa",
        category: "helth",
        image: "/tv.png",
    },
    {
        id: 9,
        title: "OUTLET – Sport & Fritid",
        category: "sports",
        image: "/tv.png",
    },
    {
        id: 10,
        title: "OUTLET – Trädgård",
        category: "garden",
        image: "/tv.png",
    },
];

const OutletProduct = () => {
    const [showFullText, setShowFullText] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Filter/sort state
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStore, setSelectedStore] = useState('');
    const [sortBy, setSortBy] = useState('relevance');


    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    const scrollByAmount = (direction: "left" | "right") => {
        scrollRef.current?.scrollBy({left: direction === "left" ? -200 : 200, behavior: "smooth"});
    };

    useEffect(() => {
        handleScroll();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    // Derived product list based on filters
    const filteredProducts = sampleProducts
        .filter(p => selectedCategory ? p.category === selectedCategory : true)
        // Add store filter logic if store-specific data is available
        .sort((a, b) => {
            if (sortBy === 'nameAsc') return a.title.localeCompare(b.title);
            if (sortBy === 'nameDesc') return b.title.localeCompare(a.title);
            return 0; // "relevance" or unhandled
        });

    return (
        <section className="max-w-5xl mx-auto px-4 pt-24 space-y-8">
            {/* OutletProduct Description */}
            <article className="p-6 space-y-4">
                <h1 className="text-3xl font-bold">OUTLET</h1>
                <p className="text-gray-700">
                    På Electric Outlet säljer vi produkter till ett rabatterat pris. Produkterna vi säljer kan antingen
                    vara återköp eller tidigare visningsexemplar. Samtliga Outlet-produkter är noggrant kontrollerade
                    och har samma villkor för garanti och öppet köp som en ny vara – så att du alltid kan känna dig
                    trygg med ditt inköp.
                </p>

                {showFullText && (
                    <p className="text-gray-700">
                        <strong>Hur handlar jag på Electric Outlet?</strong>
                        <ul className="list-disc list-inside mt-2">
                            <li>
                                Använd filtreringsfunktionen för att hitta önskad produkttyp.
                            </li>
                            <li>
                                Vissa Outlet-produkter går endast att boka och hämta i butik.
                            </li>
                        </ul>
                    </p>
                )}

                <button
                    onClick={() => setShowFullText(!showFullText)}
                    className="text-blue-600 underline"
                >
                    {showFullText ? "Visa mindre" : "Läs mer"}
                </button>
            </article>

            {/* Scrollable Product Section with Arrows */}
            <section className="relative">
                <h2 className="text-xl font-semibold mb-2">Utvalda produkter</h2>

                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scrollByAmount("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-600 transition-opacity duration-200"
                    >
                        <IoIosArrowDropleft/>
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scrollByAmount("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-600 transition-opacity duration-200"
                    >
                        <IoIosArrowDropright/>
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 py-2 scrollbar-hide snap-x snap-mandatory px-6"
                >
                    {sampleProducts.map((product) => (
                        <Link
                            to={`/product/${product.id}`}
                            key={product.id}
                            className="relative min-w-[200px] rounded-md p-4 flex-shrink-0 snap-start bg-white hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full h-24 flex items-center justify-center mb-2">
                                <div
                                    className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold z-10">
                                    OUTLET
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-600">{product.title}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6">
                {/* Filter (Left side) */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <select
                            id="tag-filter"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Alla kategorier</option>
                            <option value="tv">TV & Hemmabio</option>
                            <option value="dator">Datorer & Kontor</option>
                            <option value="mobiler">Mobiler & Tablets</option>
                            <option value="gaming">Gaming</option>
                            <option value="vitvaror">Vitvaror</option>
                            {/* Add more tags if needed */}
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="store-filter">
                            Visa produkter i butik:
                        </label>
                        <select
                            id="store-filter"
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Välj butik</option>
                            <option value="stockholm">Stockholm</option>
                            <option value="goteborg">Göteborg</option>
                            <option value="malmo">Malmö</option>
                        </select>
                    </div>
                    <button
                        onClick={() => {
                            setSelectedCategory('');
                            setSelectedStore('');
                            setSortBy('relevance');
                        }}
                        className="text-sm text-blue-600 underline mt-2"
                    >
                        Rensa filter
                    </button>
                </div>

                {/* Sort (Right side) */}
                <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-sm font-medium text-gray-700">SORTERA EFTER</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="relevance">Mest relevant</option>
                        <option value="lowestPrice">Lägsta pris</option>
                        <option value="highestPrice">Högsta pris</option>
                        <option value="nameAsc">Namn A–Ö</option>
                        <option value="nameDesc">Namn Ö–A</option>
                    </select>
                </div>
            </section>
            {/* ✅ Product Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
                {filteredProducts.map(product => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex flex-col items-center gap-3 p-5 bg-white shadow rounded-xl hover:bg-gray-50 transition text-center"
                    >
                        <div className="relative w-full h-32 flex items-center justify-center mb-2">
                            <div
                                className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold z-10">
                                OUTLET
                            </div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-full object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-700">{product.title}</p>
                    </Link>
                ))}
                {filteredProducts.length === 0 && (
                    <p className="col-span-full text-center text-gray-500 py-10">
                        Inga produkter matchar dina filterval.
                    </p>
                )}
            </section>

            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default OutletProduct;
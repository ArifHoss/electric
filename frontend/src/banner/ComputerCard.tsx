import {MdOutlet, MdOutlineMedicalServices} from "react-icons/md";
import {FaComputer, FaKitchenSet, FaTv} from "react-icons/fa6";
import {IoIosPhonePortrait} from "react-icons/io";
import {IoGameControllerOutline} from "react-icons/io5";
import {GiWashingMachine} from "react-icons/gi";
import {PiHairDryer} from "react-icons/pi";
import {SiAirtable} from "react-icons/si";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ProductCard from "./ProductCard.tsx";

const menuItems = [
    {label: "LAPTOP", to: "/demo", icon: <MdOutlet/>},
    {label: "JOBBDATOR", to: "/demo", icon: <FaComputer/>},
    {label: "MACBOOK", to: "/demo", icon: <IoIosPhonePortrait/>},
    {label: "COPILOT + PC", to: "/demo", icon: <FaTv/>},
    {label: "CROMEBOOK", to: "/demo", icon: <IoGameControllerOutline/>},
    {label: "STATIONÄR DATOR", to: "/demo", icon: <FaKitchenSet/>},
    {label: "GAMING LAPTOP", to: "/vitavaror", icon: <GiWashingMachine/>},
    {label: "MINI PC", to: "/demo", icon: <PiHairDryer/>},
    {label: "LÖSNINGAR FÖR KONTORET", to: "/demo", icon: <SiAirtable/>},
    {label: "PC -NYA PRODUKTER", to: "/demo", icon: <MdOutlineMedicalServices/>},
];


const productList = [
    {
        image: "/computer.png",
        title: "Lenovo IdeaPad Slim 3 15AMN8 R3-7320U/8GB/128 15.6\"",
        reviews: 0,
        description: "Super Deal! Gäller t.o.m. söndag 8 juni.",
        availability: "I lager online (100+) | Finns i 66 butiker",
        to: "/product/1"
    },
    {
        image: "/computer.png",
        title: "MacBook Air M2 13.6\" 256GB",
        reviews: 12,
        description: "Tunn, lätt och kraftfull med M2-chip.",
        availability: "I lager online | Finns i 45 butiker",
        to: "/product/2"
    },
    {
        image: "/computer.png",
        title: "HP Envy x360 14\" 2-i-1",
        reviews: 8,
        description: "Flexibel laptop med touchskärm och AMD Ryzen.",
        availability: "Begränsat lager | Endast online",
        to: "/product/3"
    },
    {
        image: "/computer.png",
        title: "Dell Inspiron 15 Intel i5/512GB SSD",
        reviews: 6,
        description: "Perfekt för vardagsanvändning.",
        availability: "I lager online | Finns i 32 butiker",
        to: "/product/4"
    },
    {
        image: "/computer.png",
        title: "Acer Aspire 5 17.3\" i7/16GB/1TB",
        reviews: 11,
        description: "Storskärm för arbetsintensiva uppgifter.",
        availability: "I lager online | Finns i 21 butiker",
        to: "/product/5"
    },
    {
        image: "/computer.png",
        title: "MSI Katana GF66 Gaming Laptop",
        reviews: 15,
        description: "RTX 3060 för bästa spelupplevelse.",
        availability: "Endast online | Leverans inom 2-4 dagar",
        to: "/product/6"
    },
    {
        image: "/computer.png",
        title: "Asus ZenBook 14 OLED i7/512GB",
        reviews: 18,
        description: "Fantastisk skärm och prestanda.",
        availability: "I lager online och i butik",
        to: "/product/7"
    },
    {
        image: "/computer.png",
        title: "Huawei MateBook D14",
        reviews: 4,
        description: "Slimmad design, kraftfull prestanda.",
        availability: "Begränsat lager | Finns i vissa butiker",
        to: "/product/8"
    },
    {
        image: "/computer.png",
        title: "MacBook Pro 14 M3 Pro 512GB",
        reviews: 22,
        description: "För proffsanvändare – grafik & kodning.",
        availability: "I lager online | Finns i 12 butiker",
        to: "/product/9"
    },
    {
        image: "/computer.png",
        title: "Microsoft Surface Laptop 5",
        reviews: 9,
        description: "Touchskärm, lätt vikt, lång batteritid.",
        availability: "I lager online | Finns i 27 butiker",
        to: "/product/10"
    },
    {
        image: "/computer.png",
        title: "Lenovo Legion 5 Gaming Laptop",
        reviews: 14,
        description: "NVIDIA GeForce RTX 4060 inbyggt.",
        availability: "Begränsat lager | Endast online",
        to: "/product/11"
    },
    {
        image: "/computer.png",
        title: "Acer Swift 3 Intel Evo 14\"",
        reviews: 7,
        description: "Smidig och stilren för studenter.",
        availability: "I lager online | Finns i 10 butiker",
        to: "/product/12"
    },
    {
        image: "/computer.png",
        title: "HP Victus 16 Gaming Ryzen 7",
        reviews: 13,
        description: "Spela med stil och prestanda.",
        availability: "I lager online och i utvalda butiker",
        to: "/product/13"
    },
    {
        image: "/computer.png",
        title: "Dell XPS 13 OLED i7/1TB SSD",
        reviews: 5,
        description: "Premium design med topphårdvara.",
        availability: "I lager online | Fri frakt",
        to: "/product/14"
    },
    {
        image: "/computer.png",
        title: "Asus VivoBook 15 Full HD",
        reviews: 10,
        description: "Prisvärd laptop med snabb SSD.",
        availability: "I lager online | 55 butiker",
        to: "/product/15"
    },
    {
        image: "/computer.png",
        title: "Razer Blade 15 RTX 3070",
        reviews: 16,
        description: "Gaming på högsta nivå.",
        availability: "Endast online | Leverans 1-3 dagar",
        to: "/product/16"
    },
    {
        image: "/computer.png",
        title: "MacBook Air M1 13\" 256GB",
        reviews: 25,
        description: "Stabil prestanda till bra pris.",
        availability: "I lager online | 20 butiker",
        to: "/product/17"
    },
    {
        image: "/computer.png",
        title: "HP EliteBook 840 G9",
        reviews: 2,
        description: "Business-laptop med säkerhet i fokus.",
        availability: "Beställningsvara | Leverans inom 7 dagar",
        to: "/product/18"
    },
    {
        image: "/computer.png",
        title: "Lenovo ThinkPad X1 Carbon Gen 10",
        reviews: 19,
        description: "Klassisk företagsdator – nu ännu bättre.",
        availability: "I lager online och i butik",
        to: "/product/19"
    },
    {
        image: "/computer.png",
        title: "Acer Nitro 5 RTX 4050 15.6\"",
        reviews: 17,
        description: "Kraftfull gaming-laptop till bra pris.",
        availability: "I lager online | 39 butiker",
        to: "/product/20"
    },
    {
        image: "/computer.png",
        title: "Samsung Galaxy Book3 Pro",
        reviews: 6,
        description: "Ultratunn design med AMOLED-skärm.",
        availability: "Begränsat lager | Endast online",
        to: "/product/21"
    },
];

const ComputerCard = () => {
  return(
      <section>
          <header>
              <Link to="/dator">Datorer & Kontor</Link>{' > '}
              <Link to="/dator">Datorer</Link>
          </header>

              <h2 className="text-3xl font-bold mb-4 p-5">DATORER</h2>
          <section
              className="flex overflow-x-auto gap-6 py-6 px-6 snap-x snap-mandatory border-b scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-600">
              {menuItems.map((item, idx) => (
                  <Link
                      to={item.to}
                      key={idx}
                      className="flex flex-col items-center min-w-[120px] max-w-[160px] snap-start text-center px-2"
                  >
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="text-sm font-medium leading-snug break-words">{item.label}</p>
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
  )
}

export default ComputerCard;
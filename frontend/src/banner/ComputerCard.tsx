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
        price: 4990,
        to: "/product/1"
    },
    {
        image: "/computer.png",
        title: "MacBook Air M2 13.6\" 256GB",
        reviews: 12,
        description: "Tunn, lätt och kraftfull med M2-chip.",
        availability: "I lager online | Finns i 45 butiker",
        price: 13990,
        to: "/product/2"
    },
    {
        image: "/computer.png",
        title: "HP Envy x360 14\" 2-i-1",
        reviews: 8,
        description: "Flexibel laptop med touchskärm och AMD Ryzen.",
        availability: "Begränsat lager | Endast online",
        price: 8490,
        to: "/product/3"
    },
    {
        image: "/computer.png",
        title: "Dell Inspiron 15 Intel i5/512GB SSD",
        reviews: 6,
        description: "Perfekt för vardagsanvändning.",
        availability: "I lager online | Finns i 32 butiker",
        price: 7290,
        to: "/product/4"
    },
    {
        image: "/computer.png",
        title: "Acer Aspire 5 17.3\" i7/16GB/1TB",
        reviews: 11,
        description: "Storskärm för arbetsintensiva uppgifter.",
        availability: "I lager online | Finns i 21 butiker",
        price: 9990,
        to: "/product/5"
    },
    {
        image: "/computer.png",
        title: "MSI Katana GF66 Gaming Laptop",
        reviews: 15,
        description: "RTX 3060 för bästa spelupplevelse.",
        availability: "Endast online | Leverans inom 2-4 dagar",
        price: 11990,
        to: "/product/6"
    },
    {
        image: "/computer.png",
        title: "Asus ZenBook 14 OLED i7/512GB",
        reviews: 18,
        description: "Fantastisk skärm och prestanda.",
        availability: "I lager online och i butik",
        price: 11290,
        to: "/product/7"
    },
    {
        image: "/computer.png",
        title: "Huawei MateBook D14",
        reviews: 4,
        description: "Slimmad design, kraftfull prestanda.",
        availability: "Begränsat lager | Finns i vissa butiker",
        price: 6790,
        to: "/product/8"
    },
    {
        image: "/computer.png",
        title: "MacBook Pro 14 M3 Pro 512GB",
        reviews: 22,
        description: "För proffsanvändare – grafik & kodning.",
        availability: "I lager online | Finns i 12 butiker",
        price: 22490,
        to: "/product/9"
    },
    {
        image: "/computer.png",
        title: "Microsoft Surface Laptop 5",
        reviews: 9,
        description: "Touchskärm, lätt vikt, lång batteritid.",
        availability: "I lager online | Finns i 27 butiker",
        price: 13490,
        to: "/product/10"
    },
    // ... you can continue with the rest similarly
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
// import {Link} from "react-router-dom";
//
// const menuItems = [
//     {label: "Datorer", to: "/computercard", image: "/computer-acc.png",},
//     {label: "Datorkomponenter", to: "/demo", image: "/componet.png"},
//     {label: "Datortillbehör", to: "/demo", image: "/keyboard.png"},
//     {label: "Skärmar & Tillbehör", to: "/demo", image: "/monitor.png"},
//     {label: "Surfplatta", to: "/demo", image: "/ipad.png"},
//     {label: "Tillbehör till Surfplatta", to: "/demo", image: "/ipad-acc.png"},
//     {label: "Skrivare & Kontor", to: "/demo", image: "/printer.png"},
//     {label: "Nätverk", to: "/demo", image: "/router.png"},
//     {label: "Hårddiskar & Lagring", to: "/demo", image: "/hard.png"},
//     {label: "Mjukvara", to: "/demo", image: "/microsoft.png"},
//     {label: "Hemmakontor", to: "/demo", image: "/cybersecurity.png"},
//     {label: "Tjänster-Datorer & Kontor", to: "/demo", image: "/service.png"},
//
// ];
// const ComputerAndOfficeCard = () => {
//     return (
//
//         <section
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-6">
//             {menuItems.map((item, idx) => (
//                 <Link
//                     to={item.to}
//                     key={idx}
//                     className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-md bg-white hover:bg-gray-100 transition text-center"
//                 >
//                     <img
//                         src={item.image}
//                         alt={item.label}
//                         className="w-16 h-16 object-contain"
//                     />
//                     <p className="text-lg font-semibold">{item.label}</p>
//                 </Link>
//             ))}
//         </section>
//     );
// };
//
// export default ComputerAndOfficeCard;

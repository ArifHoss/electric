import { useAuth } from "./AuthContext.tsx";
import { IoIosHeart } from "react-icons/io";
 // import {useNavigate} from "react-router-dom";
type Props = {
    setActiveTab: (tab: string) => void;
};

const MyPage = ({setActiveTab}:Props) => {
    const { user } = useAuth();
     // const navigate = useNavigate();

    if (!user) return <p>Laddar användardata...</p>;

    const handleUpdateClick = () => {
        setActiveTab('PROFIL')
    };

    return (
        <section className="flex justify-evenly pt-3 pr-20">
            <div className="pr-10">
                <h2 className="font-bold">Mina Uppgifter</h2>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button onClick={handleUpdateClick} className="text-blue-600 cursor-pointer">Uppdatera information</button>
            </div>
            <div className="pr-10">
                <h2 className="font-bold">Land</h2>
                <p>{user.country}</p>
                <p>Födelsedatum: {user.birthDate}</p>
                <p onClick={handleUpdateClick} className="text-blue-600 cursor-pointer">Uppdatera profil</p>
            </div>
            <div className="pr-10">
                <h2 className="font-bold">Hitta din favoritebutik:</h2>
                <map name="favorit butik"></map>
                <p className="text-blue-600 cursor-pointer">Välj butik</p>
            </div>
            <div className="grid justify-items-center">
                <h2 className="font-bold">Electric kundklubb</h2>
                <IoIosHeart />
                <p>Ett medlemskap i Elgigantens kundklubb ger dig rabatter på utvalda medlemsprodukter och spännande erbjudanden från våra partners.</p>
                <button className="text-white rounded-full bg-green-500 mt-2 px-3 py-1">Visa erbjudanden</button>
            </div>
        </section>
    );
};

export default MyPage;
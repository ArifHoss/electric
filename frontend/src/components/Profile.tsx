import { useAuth } from "./AuthContext.tsx";
import { updateUser } from "../api/user.ts";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const { user, login } = useAuth(); // ✅ login included
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [birthDate, setBirthDate] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setPhone(user.phone);
            setCountry(user.country);
            setBirthDate(user.birthDate);
        }
    }, [user]);

    if (!user) return <p>Laddar användardata...</p>;

    const handleUpdateClick = async () => {
        try {
            const updated = {
                firstName,
                lastName,
                email,
                phone,
                country,
                birthDate,
            };
            console.log("Updating user with ID:", user.id);
            console.log("Updated data:", updated);
            await updateUser(user.id, updated);
            await login(user.email); // ✅ works now
            alert('Information uppdaterad!');
        } catch (e) {
            if (axios.isAxiosError(e)) {
                console.error('Axios error:', e.response?.data || e.message);
            }
            console.error('Kunde inte uppdatera användare:', e);
            alert('Uppdatering misslyckades.');
        }
    };

    return (
        <section className="flex justify-evenly pt-3 pr-20 flex-wrap gap-10">
            <div className="pr-10 max-w-sm">
                <h2 className="font-bold text-lg mb-2">Mina Uppgifter</h2>

                <label className="block mb-1">Förnamn</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border p-1 w-full mb-2" />

                <label className="block mb-1">Efternamn</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="border p-1 w-full mb-2" />

                <label className="block mb-1">E-post</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="border p-1 w-full mb-2" />

                <label className="block mb-1">Telefon</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-1 w-full mb-2" />

                <label className="block mb-1">Land</label>
                <input value={country} onChange={(e) => setCountry(e.target.value)} className="border p-1 w-full mb-2" />

                <label className="block mb-1">Födelsedatum</label>
                <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="border p-1 w-full" />

                <button
                    className="text-white bg-blue-600 px-4 py-2 mt-2 rounded hover:bg-blue-700"
                    onClick={handleUpdateClick}
                >
                    Uppdatera information
                </button>
            </div>
        </section>
    );
};

export default Profile;
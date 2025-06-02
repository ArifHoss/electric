import Footer from "../components/Footer.tsx";
import ComputerAndOfficeCard from "../banner/ComputerAndOfficeCard.tsx";

const ComputerAndOffice = () => {
    return (
        <section>
            <header className="p-5">
                <h1>Datorer & Kontor</h1>
            </header>

            <section className="px-6 py-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">DATORER OCH KONTOR</h2>
                <p className="mb-6">
                    Hos Elgiganten finner du ett omfattande sortiment av datorer och datatillbehör. Bland annat
                    datorkomponenter, skrivare, hårddiskar och programvaror.
                </p>
                <ComputerAndOfficeCard />
            </section>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default ComputerAndOffice;

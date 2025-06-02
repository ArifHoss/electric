import Footer from "../components/Footer.tsx";
import ComputerAndOfficeCard from "../banner/ComputerAndOfficeCard.tsx";

const ComputerAndOffice = () => {
    return (
        <section>
            <header>
                <h1>Datorer & Kontor</h1>
            </header>
            <section>
                <h2>DATORER OCH KONTOR</h2>
                <p>Hos Elgiganten finner du ett omfattande sortiment av datorer och datatillbehör. Bland annat
                    datorkomponenter, skrivare, hårddiskar och programvaror.</p>
                <ComputerAndOfficeCard/>
            </section>

            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default ComputerAndOffice;

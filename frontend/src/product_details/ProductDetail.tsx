import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="pt-20 px-4">
            <h1 className="text-2xl font-bold">Produktdetaljer</h1>
            <p>Produkt-ID: {id}</p>
        </div>
    );
};

export default ProductDetail;
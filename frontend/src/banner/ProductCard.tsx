// components/ProductCard.tsx
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductCardProps {
    image: string;
    title: string;
    reviews: number;
    description: string;
    availability: string;
    to: string;
}

const ProductCard = ({ image, title, reviews, description, availability, to }: ProductCardProps) => {
    return (
        <Link
            to={to}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col gap-2"
        >
            <img src={image} alt={title} className="w-full h-40 object-contain" />
            <h3 className="text-sm font-semibold">{title}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
                {Array(5).fill(0).map((_, i) => (
                    <FaRegStar key={i} />
                ))}
                <span className="text-gray-600 text-xs ml-2">({reviews} omdömen)</span>
            </div>
            <p className="text-sm text-green-700 font-medium">{description}</p>
            <p className="text-xs text-gray-600">{availability}</p>
        </Link>
    );
};

export default ProductCard;
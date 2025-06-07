import { useAuth } from "./AuthContext.tsx";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useAuth();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
    );

    if (cart.length === 0) {
        return (
            <section className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Din kundvagn är tom</h2>
                <Link to="/dator" className="text-blue-600 hover:underline">
                    Gå tillbaka till produkter
                </Link>
            </section>
        );
    }

    return (
        <section className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Din kundvagn</h2>
            <ul className="space-y-4">
                {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-600">
                                {item.price} {item.currency} x {item.quantity}
                            </p>
                        </div>
                        <p className="font-semibold">
                            {item.price * (item.quantity ?? 1)} {item.currency}
                        </p>
                    </li>
                ))}
            </ul>
            <div className="mt-6 text-right">
                <p className="text-xl font-bold">
                    Totalt: {totalPrice.toFixed(2)} {cart[0]?.currency}
                </p>
            </div>
        </section>
    );
};

export default Cart;
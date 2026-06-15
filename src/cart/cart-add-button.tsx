import { Product } from "@/api/products/products.types";
import { Button } from "@/components/ui/button";

interface CartButtonProps {
    data: Product; 
}

export const CartButton: React.FC<CartButtonProps> = ({ data }) => {
    const saveCard = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        storedCart.push(data);
        localStorage.setItem("cart", JSON.stringify(storedCart));
    };
    return (
        <Button
            onClick={saveCard}
            className="bg-green-500 hover:bg-green-600 transition text-white px-3 py-1 rounded-full text-lg"
        >
            +
        </Button>
    );
};

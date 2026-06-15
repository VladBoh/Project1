import { useState } from "react";
import { Product } from "@/api/products/products.types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trunc } from "@/utils/trunc";

interface CartFormProps {
    products: Product[];
}

export const CartForm: React.FC<CartFormProps> = ({ products }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <Card key={product.id} className="max-w overflow-hidden h-[310px] border border-solid border-gray-300/70 gap-5 flex mt-3">
                        <img
                            src={product?.images?.[0]}
                            alt={product?.title || "Product Image"}
                            className="h-full object-contain"
                        />
                        <CardContent className="w-2/3 p-4 flex flex-col justify-between">
                            <div className="flex flex-col gap-2 text-lg">
                                <CardTitle className="text-xl font-semibold">
                                    {product?.title || "No Title"}
                                </CardTitle>
                                <p className="text-yellow-400">★★★★★</p>
                                <p className="text-gray-500">
                                    {product?.description ? trunc(product.description, 100) : "No description available"}
                                </p>
                                <p>Price: $<span>{product?.price * count || "N/A"}</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <Button className="h-[25px]" onClick={handleDecrement}>-</Button>
                                    <p>{count}</p>
                                    <Button className="h-[25px]" onClick={handleIncrement}>+</Button>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <Button className="bg-green-500">Add to Cart</Button>
                                <Button className="bg-yellow-500">Buy Now</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
        </div>
    );
};

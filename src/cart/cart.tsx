import { useState, useEffect } from "react";
import { Product } from "@/api/products/products.types";
import { FillterCartButton } from "./cart-fillter-button";
import { CartForm } from "./cart-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/config/routes";

export const CartCollection = () => {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartProducts(storedCart);
    }, []);

    return (
        <div>
            <div className="flex justify-end gap-3 p-5 z-1 fixed -right-0">
                <FillterCartButton />
                <Button className="bg-green-500">
                    <Link to={routes.checkout}>Buy</Link>
                </Button>
            </div>
            <div>
                <CartForm products={cartProducts} />
            </div>
        </div>
    );
};

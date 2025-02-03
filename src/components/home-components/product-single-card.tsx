import { useGetSingleProductQuery } from "@/api/products/products";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { trunc } from "@/utils/trunc";
import { useState } from "react";
import { CheckBox } from "../cheackbox";

export const SingleProductComponent = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product } = useGetSingleProductQuery(Number(id));
    const [count, setCount] = useState(1);

    if (!product) {
        return null;
    }

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        setCount(count > 1 ? count - 1 : 1);
    };


    return (
        <Card className="w-full overflow-hidden h-[310px] gap-5 flex">
            <img
                src={product.images}
                alt={product.title}
                className="w-1/3 h-full"
            />
            <CardContent className="w-2/3 p-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2 text-lg">
                    <CardTitle className="text-xl font-semibold">
                        {product.title}
                    </CardTitle>
                    <p className="text-yellow-500">★★★★★</p>
                    <p className="text-gray-500 ">
                        {trunc(product.description, 100)}
                    </p>
                    <p>price:<span>{product.price}</span></p>
                </div>
                <div className="flex gap-16">
                    <div className="flex gap-2">
                        <p className="font-medium">Color:</p>
                        <CheckBox />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                            <Button className="h-[25px]" onClick={handleDecrement}>-</Button>
                            <p>{count}</p>
                            <Button className="h-[25px]" onClick={handleIncrement}>+</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <Button className="bg-green-500">Add to Cart</Button>
                    <Button className="bg-yellow-500">Buy Now</Button>
                </div>
            </CardContent>
        </Card>
    );
};

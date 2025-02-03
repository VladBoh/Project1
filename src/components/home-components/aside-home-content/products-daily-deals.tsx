import { useGetProductsQuery } from "@/api/products/products";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { trunc } from "@/utils/trunc";

export const ProductDailyDeals = () => {
    const { data: products } = useGetProductsQuery({
        limit: 5,
        offset: 0,
    });

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Daily Deals</h3>
                <p className="text-sm text-blue-500 cursor-pointer hover:underline">View All</p>
            </div>
            <div>
                {products?.map((product) => (
                    <Card key={product.id} className="flex h-[80px] items-center border-none shadow-none">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={product.images[1]} alt={product.title} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardContent >
                            <div className="flex gap-6">
                                <h3 className="text-sm font-medium ">
                                    {trunc(product.title, 15)}
                                </h3>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Price:${product.price}</p>
                                </div>
                            </div>
                            <CardDescription className="text-xs text-gray-500">
                                256 Review And 1150 Order
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { routes } from "@/config/routes";

export const ProductsFooter = () => {
    return (
        <div className="flex w-full flex-col gap-8 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-green-500">Explore The Popular Categories</h2>
                <Link to={routes.categories} className="text-blue-500 cursor-pointer hover:underline">See all</Link>
            </div>
            <div className="flex gap-6">
                <Card className="flex items-center gap-4 p-4 shadow-lg rounded-lg border border-gray-200">
                    <div className="flex space-x-2">
                        <img src="src/photo/photo-for-product-footer/earn.png" alt="earn" className="w-6 h-6" />
                        <img src="src/photo/photo-for-product-footer/headphone.png" alt="headphone" className="w-6 h-6" />
                        <img src="src/photo/photo-for-product-footer/boombox.png" alt="boombox" className="w-6 h-6" />
                    </div>
                    <div className="w-[2px] h-12 bg-black"></div>
                    <CardHeader className="w-[300px]">
                        <CardTitle className="text-sm font-semibold text-black">Popular top 10 brands</CardTitle>
                        <CardDescription className="text-xs text-gray-600">$400+ Orders & reviews</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex items-center gap-4 p-4  shadow-lg rounded-lg border border-gray-200">
                    <div className="flex space-x-2">
                        <img src="src/photo/photo-for-product-footer/not.png" alt="not" className="w-6 h-6" />
                        <img src="src/photo/photo-for-product-footer/disk2.png" alt="disk2" className="w-6 h-6" />
                        <img src="src/photo/photo-for-product-footer/disk.png" alt="disk" className="w-6 h-6" />
                    </div>
                    <div className="w-[2px] h-12 bg-black"></div>
                    <CardHeader className="w-[300px]">
                        <CardTitle className="text-sm font-semibold text-black">Newest Sellers</CardTitle>
                        <CardDescription className="text-xs text-gray-600">460+ Orders & reviews</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
};

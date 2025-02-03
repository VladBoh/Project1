import { useGetProductsQuery } from "@/api/products/products"
import { useState } from "react";
import { Input } from "../ui/input";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trunc } from "@/utils/trunc";
import { routes } from "@/config/routes";

export const ProductsFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: products, isLoading, isError } = useGetProductsQuery({
        title: searchTerm,
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="shadow-md w-[300px]">
             <Input
                onChange={handleSearch}
                value={searchTerm}
                className="w-full border-gray-300 text-center"
                placeholder="Search Product..."
            />
            <div className={`mt-4 overflow-auto h-[100px] absolute bg-white border border-gray-300 rounded-sm ${searchTerm ? "block" : "hidden"}`}>
                {isLoading && <p>Loading products...</p>}
                {isError && <p>Failed to fetch products. Please try again later.</p>}
                {!isLoading && !isError && products?.length ? (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id} className="flex items-center justify-between py-2 border-b">
                                {trunc(product.title , 30)}
                                <Link to={`${routes.home}/${product.id}`}><ChevronRight/></Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="w-[270px]">
                        <p>No products found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

import { useGetProductsQuery } from "@/api/products/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { trunc } from "@/utils/trunc";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "@/config/routes";

export const ProductsCard = () => {
    const { data } = useGetProductsQuery({
        limit: 30,
        offset:0
    });

    return (
        <Carousel opts={{
            align: "start",
          }}
          className="w-full max-w-screen-md">
            <CarouselContent>
                {data?.map((product, index) => (
                    <Link  to={`${routes.home}/${product.id}`}>
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <Card key={product.id} className="border border-gray-200 rounded-lg shadow-lg h-[300px] w-[200px] flex flex-col justify-between">
                                <div className="flex justify-center items-center h-1/2 ">
                                    <img
                                        src={product.images[1]}
                                        alt={trunc(product.title, 15)}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <CardHeader className="flex flex-col items-start">
                                    <CardTitle className="text-base font-semibold">
                                        {trunc(product.title, 15)}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-500">
                                        <p>Price: <span className="font-bold">${product.price}</span></p>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex text-green-500"><span><Star className="w-[15px]" /></span>4.8<span></span></div>
                                    <Button className="bg-green-500 hover:bg-green-600 transition text-white px-3 py-1 rounded-full text-lg">
                                        +
                                    </Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </Link>
                ))}
            </CarouselContent>
            <div>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md cursor-pointer" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md cursor-pointer" />
            </div>
        </Carousel>
    );
};

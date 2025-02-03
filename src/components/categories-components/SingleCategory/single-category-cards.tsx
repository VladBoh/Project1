import { useGetAllProductsByCategoryQuery } from "@/api/categories/categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { routes } from "@/config/routes";
import { trunc } from "@/utils/trunc";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

type SingleCategoryCardsProps = {
    id: number;
};

export const SingleCategoryCards = ({ id }: SingleCategoryCardsProps) => {
    const { data: products } = useGetAllProductsByCategoryQuery(id);

    return (
        <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-[1200px] mx-auto mt-5 border border-none shadow-none rounded-lg overflow-hidden"
        >
            <CarouselContent className="flex">
                {products?.map((product, index) => (
                                      <Link  to={`${routes.home}/${product.id}`}>
                    <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/5 p-2">
                        <Card key={product.id} className="border-none w-[200px] h-[300px] border-gray-200 rounded-lg p-3 shadow-sm">
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
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2" />
            </div>
        </Carousel>
    );
};

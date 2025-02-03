import { useGetCategoriesQuery } from "@/api/categories/categories";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import { routes } from "@/config/routes";

export const CategoriesCard = () => {
    const { data: categories } = useGetCategoriesQuery({
        limit: 30,
        offset: 1
    });

    return (
        <div className="grid grid-cols-3 gap-4 pt-7">
            {categories?.map((category) => (
                <Card key={category.id} className="p-4 shadow-md">
                    <CardHeader className="flex items-center">
                        <Avatar>
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-8 h-8 rounded-full"
                            />
                        </Avatar>
                        <CardTitle className="ml-4 text-sm font-bold">{category.name}</CardTitle>
                        <Link to={`${routes.categories}/${category.id}`}>sads</Link>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

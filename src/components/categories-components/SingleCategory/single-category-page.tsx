import { useGetSingleCategoryQuery } from "@/api/categories/categories";
import { useParams } from "react-router-dom";
import { SingleCategoryCards } from "./single-category-cards";

export const SingleCategoryPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: category } = useGetSingleCategoryQuery(Number(id));

    return (
        <section className="p-5">
            <div key={category?.id}>
                <p className="text-start text-2xl font-bold mb-4">{category?.name}</p>
                <SingleCategoryCards id={Number(id)} />
            </div>
        </section>
    );
};

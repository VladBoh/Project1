import { Button } from "@/components/ui/button";

export const FillterCartButton = () => {
    const deleteCard = () => {
        localStorage.removeItem("cart")
    };
    return (
        <Button
            onClick={deleteCard}
            className="w-[100px] bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded-md text-lg"
        >
            Clear
        </Button>
    );
};

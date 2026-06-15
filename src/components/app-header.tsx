import { Bell, Mail, Search, Settings, UserRoundPen } from "lucide-react";
import { Button } from "./ui/button";
import { ProductsFilter } from "./app-header/product-filter";
import { Link } from "react-router-dom";
import { routes } from "@/config/routes";
import { useAuthorizationQuery } from "@/api/auth/auth";
import { useState } from "react";

export const AppHeader = () => {
    const { data } = useAuthorizationQuery();
    const [isAuthenticated, setIsAuthenticated] = useState(!!data);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setIsAuthenticated(false);
    };

    return (
        <header className="w-full flex justify-between items-center px-5 py-3 border-b sticky top-0 bg-white z-10">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-black">Headphone</h1>
                <p className="text-sm text-gray-600">For the top band</p>
            </div>
            <div className="relative flex items-center">
                <ProductsFilter />
                <Search className="absolute left-4 text-gray-500" />
                <Settings className="absolute right-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-3">
                <Button className="rounded-full bg-green-100 hover:bg-green-200 p-2">
                    <Mail className="text-green-600 w-5 h-5" />
                </Button>
                <Button className="rounded-full bg-green-100 hover:bg-green-200 p-2">
                    <Bell className="text-green-600 w-5 h-5" />
                </Button>
                {!isAuthenticated ? (
                    <Button className="rounded-full bg-green-100 hover:bg-green-200 p-2">
                        <Link to={routes.auth}>
                            <UserRoundPen className="text-green-600 w-5 h-5" />
                        </Link>
                    </Button>
                ) : (
                    <Button className="bg-green-500 hover:bg-red-700" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </div>
        </header>
    );
};

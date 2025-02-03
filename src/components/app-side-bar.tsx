import { Home, MessageCircle, Shirt, ShoppingCart, User } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { routes } from "@/config/routes"
import { Link, useLocation } from "react-router-dom"

const items = [
    {
        title: "Home",
        url: routes.home,
        icon: Home,
    },
    {
        title: "Categories",
        url: routes.categories,
        icon: Shirt,
    },
    {
        title: "Cart",
        url: routes.cart,
        icon: ShoppingCart,
    },
    {
        title: "Profile",
        url: routes.profile,
        icon: User,
    },
    {
        title: "Countact us",
        url: routes.contact,
        icon: MessageCircle,
    },
]

export const AppSideBar = () => {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="flex flex-col py-4 gap-7">
                    <div className="flex mx-[12px]">
                        <img className="w-[35px] h-[35px]" src="src/photo/headset-icon.png" alt="" />
                        <SidebarGroupLabel className="text-lg">Soundwind</SidebarGroupLabel>
                    </div>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="flex items-center space-x-2 p-2 rounded-md">

                                        <Link
                                            to={item.url}
                                            className={`flex items-center w-full relative pl-4 pr-2 py-2 ${location.pathname === item.url
                                                ? "text-green-700 font-semibold before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-green-500"
                                                : "text-gray-700 hover:text-green-500"
                                                }`}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <div className="flex flex-col justify-center items-center gap-3 p-4 mx-[12px] rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-green-300 text-white w-[200px] h-[200px]">
                        <button className="bg-blue-700 w-[40px] h-[40px] border border-white rounded-full flex items-center justify-center">+</button>
                        <h3 className="text-xl font-semibold">Need Help</h3>
                        <p className="text-center text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="bg-green-600 rounded-md px-4 py-1">Customer Service</button>
                    </div>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
import { Outlet } from "react-router-dom"
import { AppSideBar } from "./components/app-side-bar"
import { AppFooter } from "./components/app-footer"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"
import { MetaHead } from "./components/meta-head"
import { AppHeader } from "./components/app-header"

export const Layout = () => {
    return (
        <SidebarProvider>
            <div className="w-full flex gap-5">
                <AppSideBar />
                <MetaHead />
                <SidebarInset>
                    <main>
                        <AppHeader />
                        <Outlet />
                    </main>
                </SidebarInset>
            </div>
            <AppFooter />
        </SidebarProvider>
    )
}
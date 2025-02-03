import { ProductBanner } from "./aside-home-content/product-baner"
import { ProductDailyDeals } from "./aside-home-content/products-daily-deals"
import { SingleProductComponent } from "./product-single-card"
import { ProductsCard } from "./products-card"
import { ProductsFooter } from "./products-footer"

export const ProductsPage = () => {
    return (
        <div className="flex">
            <section className="flex flex-col gap-5 ">
                <SingleProductComponent/>
                <ProductsCard/>
                <ProductsFooter/>
            </section>
            <aside>
                <ProductBanner/>
                <ProductDailyDeals/>
            </aside>
        </div>
    )
}
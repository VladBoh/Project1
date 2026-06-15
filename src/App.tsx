import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './config/routes'
import { Layout } from './layout'
import { ErrorPage } from './components/error'
import { HomePage } from './page/home-page'
import { CategoriesPage } from './page/categories-page'
import { SingleCategoryPage } from './components/categories-components/SingleCategory/single-category-page'
import { AuthPage } from './page/auth-page'
import { UserProfilePage } from './page/user-profile-page'
import { CartPage } from './page/cart-page'
import { CheckoutPage } from './page/checkout-page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: routes.home,
                element: <HomePage />
            },
            {
                path: routes.product,
                element: <HomePage />
            },
            {
                path: routes.categories,
                element: <CategoriesPage />
            },
            {
                path: routes.category,
                element: <SingleCategoryPage />
            },
            {
                path: routes.cart,
                element: <CartPage />
            },
            {
                path: routes.profile,
                element:<UserProfilePage/>,
            },
            {
                path: routes.contact,
            }
        ]
    },
    {
        path: routes.auth,
        element: <AuthPage />

    },
    {
        path: routes.checkout,
        element: <CheckoutPage />
    }
])

export const App = () => <RouterProvider router={router} />

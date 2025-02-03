import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './config/routes'
import { Layout } from './layout'
import { ErrorPage } from './components/error'
import { HomePage } from './page/home-page'
import { CategoriesPage } from './page/categories-page'
import { SingleCategoryPage } from './components/categories-components/SingleCategory/single-category-page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: routes.home,
                element:<HomePage/>
            },
            {
                path: routes.product,
                element: <HomePage/>
            },
            {
                path: routes.categories,
                element: <CategoriesPage/>
            },
            {
                path: routes.category,
                element: <SingleCategoryPage/>
            },
            {
                path: routes.cart,
                
            },
            {
                path: routes.profile,
                
            }, 
            {
                path: routes.contact,
            }
        ]
    },
])

export const App = () => <RouterProvider router={router} />

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/root"
import PageNotFound from "./pages/page-not-found"
import { HomePage } from "./pages/home-page"
import { ShopPage } from "./pages/shop-page"
import { CartPage } from "./pages/cart-page"

const route = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: '',
				element: <HomePage />
			},
			{
				path: 'shop',
				element: <ShopPage />
			},
			{
				path: 'cart',
				element: <CartPage />
			}

		]
	}
])
function App() {
	return <RouterProvider router={route} />
}

export default App

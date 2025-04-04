import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/root"
import PageNotFound from "./pages/page-not-found"
import { HomePage } from "./pages/home-page"
import { ShopPage } from "./pages/shop-page"
import { CartPage } from "./pages/cart-page"
import { RegisterPage } from "./pages/register-page"
import { LoginPage } from "./pages/login-page"
import { PrivateRoute } from "./pages/private-route"
import { path } from "framer-motion/client"

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
				path: 'register',
				element: <RegisterPage />
			},
			{
				path: 'login',
				element: <LoginPage />
			},
			{
				path: 'cart',
				element: <PrivateRoute />,
				children: [
					{
						path: "",
						element: <CartPage />
					}
				]
			},
		]
	}
])
function App() {
	return <RouterProvider router={route} />
}

export default App

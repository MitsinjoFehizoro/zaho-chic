import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import PageNotFound from "./pages/PageNotFound"
import { HomePage } from "./pages/HomePage"

const route = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: '',
				element: <HomePage />
			}
		]
	}
])
function App() {
	return <RouterProvider router={route} />
}

export default App

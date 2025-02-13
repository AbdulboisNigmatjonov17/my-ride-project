import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import MobilePage from "./pages/mobile/MobilePage"
import Layout from "./pages/Layout"
const App = () => {

  const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage /> 
        },
        {
          path: 'mobile',
          element: <MobilePage />,
        },
      ]
    },

  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
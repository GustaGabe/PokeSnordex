import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home/home.page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />
            }
        ]
        
    }
])
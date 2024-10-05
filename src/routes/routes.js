import { Basket } from "../pages/Basket.tsx";
import { Home } from "../pages/Home.tsx";
import { SingleProduct } from "../pages/SingleProduct.tsx";


export const routes = [


    {
        path: '/cart',
        element: <></>,
    },
    {
        path: '/categories/:idCategory',
        element: <><Home /></>,
    },
    {
        path: '/product/:idProduct',
        element: <><SingleProduct /></>,
    },
    {
        path: '/basket',
        element: <><Basket /></>
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <>error</>,
    }
];
import React, { useEffect } from 'react'
import { SidebarWithMiniWindow } from '../components/SidebarWithMiniWindow/SidebarWithMiniWindow.tsx';
import { Header } from '../components/Header/Header.tsx';
import { Footer } from '../components/Footer/Footer.tsx';
import { Products } from '../components/Products/Products.tsx';
import { productsAPI } from '../API/products/productsAPI.ts';
import { categoriesAPI } from '../API/categories/categoriesAPI.ts';
import { Categories } from '../components/Categories/Categories.tsx';
import { Banner } from '../components/Banner/Banner.tsx';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks.ts';
import { productsSlice } from '../redux/products/productsSlice.ts';
import { Poster } from '../components/Poster/Poster.tsx';




export const Home = () => {

    const { data, isLoading, error } = productsAPI.useGetProductsQuery();

    const { data: categories, isLoading: getCategoriesIsLoading, error: getCategoriesError } = categoriesAPI.useGetCategoriesQuery();

    const dispatch = useAppDispatch();

    const productsAfterFilter = useAppSelector(state => productsSlice.selectors.getProductsAfterFilter(state, 100));







    /* const list = useAppSelector(); */
    /*  console.log(list); */











    useEffect(() => {


        data && dispatch(productsSlice.actions.addProducts(data));

    }, [data]);

    useEffect(() => {/////под вопросом


        data && dispatch(productsSlice.actions.filterProductsByCost(100));

    }, [data]);



    return <>
        <Header />

        <main>
            <div className='container'>
                <div className='wrapper'>
                    <SidebarWithMiniWindow>
                        <Poster />
                    </SidebarWithMiniWindow>
                    <Products isLoading={isLoading} title={'Trending'} products={data} />
                    <Categories isLoading={getCategoriesIsLoading} title={'Worth seeing'} categories={categories} />
                    <Banner />
                    <Products isLoading={isLoading} title={'Less than 100$'} products={productsAfterFilter} />



                </div>
            </div>
        </main>

        <Footer />
    </>

}



import React, { FC, memo } from 'react'
import { SidebarWithMiniWindow } from '../components/SidebarWithMiniWindow/SidebarWithMiniWindow.tsx'
import { Product } from '../components/Products/Product/Product.tsx';
import { Header } from '../components/Header/Header.tsx';
import { Footer } from '../components/Footer/Footer.tsx';
import { useParams } from 'react-router-dom';
import { productsAPI } from '../API/products/productsAPI.ts';
import { Spin } from 'antd';
import { CurrentProduct } from '../components/CurrentProduct/CurrentProduct.tsx';

export const SingleProduct: FC = memo(() => {

    const params = useParams();



    const { data: product, isLoading: isLoadingProduct, error: productError } = productsAPI.useGetProductQuery(Number(params.idProduct));



    





    return <>
        <Header />
        <main>
            <div className='container'>
                <div className='wrapper'>
                    <SidebarWithMiniWindow>
                        {isLoadingProduct ?  <Spin /> :  <CurrentProduct isLoading={isLoadingProduct} product={product} />}
                    </SidebarWithMiniWindow>




                </div>
            </div>
        </main>
        <Footer />
    </>

}
);

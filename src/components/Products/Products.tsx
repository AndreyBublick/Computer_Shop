import React, { FC, memo } from 'react';
//@ts-ignore
import style from './Products.module.scss';
import { Button, textBodyForButtonType } from '../usefulComponents/Buttons/Button/Button.tsx';
import { Product } from './Product/Product.tsx';
import { ProductType } from '../../API/products/productsAPI.ts';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton.tsx';


type propsType = {
    title: string,
    products: ProductType[] | undefined,
    isLoading: boolean,
};

export const Products: FC<propsType> = memo(({ isLoading, title, products, ...args }) => {


    const list = products?.filter((item, index) => { return index < 5 });


    return <section className={style.assortment}>

        <div className={style.assortment__container}>
            <div className={style.assortment__body}>

                <div className={style.assortment__title}>
                    <h2 className={style.title}>{title}</h2>
                </div>
                <div className={style.assortment__products}>

                    {list ? list.map(({ id, price, title, category,images }) => { return <Product key={id} id={id} price={price} subTitle={category.name} isLoading={isLoading} title={title} image={images[0]} /> }) :
                        [1, 2, 3, 4, 5].map((id) => { return <CardSkeleton key={id} isLoading={isLoading} /> })}







                </div>
                <div className={style.assortment__button}>
                    <Button params={{}} textBody={textBodyForButtonType.see} onClickEvent={() => { console.log(1) }} />
                </div>



            </div>
        </div>
    </section>

});


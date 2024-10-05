import React, { FC, memo, useEffect, useMemo, useState } from 'react';
//@ts-ignore
import style from './CartContents.module.scss';
import { Button, textBodyForButtonType } from '../usefulComponents/Buttons/Button/Button.tsx';



import { basketSlice } from '../../redux/basket/basketSlice.ts';
import { useAppSelector } from '../../hooks/reduxHooks.ts';
import { CartContent } from './CartContent/CartContent.tsx';
import { basketAPI, productAndCountType } from '../../API/basket/basketApi.ts';
import { ProductType } from '../../API/products/productsAPI.ts';



export const CartContents: FC = memo(() => {

    /* const carts = useAppSelector(basketSlice.selectors.getCartContents); */

    const { data: cartsContents, error: cartsContentsError, isLoading: cartsContentsIsLoading } = basketAPI.useGetCartContentsQuery();
    
    



    const generalSum = useMemo(() => {
        let sum = 0;  
        if (cartsContents && cartsContents.length > 0) {
            cartsContents.forEach((item:productAndCountType)=>{sum+=(item.price * item.count) });
        return sum;
        
        }
        
        
        return 0;
    }, [cartsContents]);



    const result = cartsContents && (cartsContents?.length > 0); ///check on undefind and arrayFull

    return <div className={style.cart_contents}>
        <div className={style.cart_contents__body}>
            <div className={style.cart_contents__title}>
                <h2>Your cart</h2>
            </div>
            <div className={style.cart_contents__content}>
                {(!result) && <div className={style.not_carts}>Товары не добавлены</div>}
                <div className={style.items}>

                    {result && cartsContents.map((item) => { return <CartContent key={item.id} /* id={item.id} title={item.title} subTitle = {item.category.name} image={item.images[0]}  price={item.price} cartCount={item.count} */  cart={item} /> })}




                </div>
            </div>
            <div className={style.cart_contents__footer}>
                <div className={style.footer}>
                    <div className={style.footer__body}>
                        <div className={style.footer__total_price}>
                            <p>TOTAL PRICE:</p> <span>{generalSum}$</span>

                        </div>
                        <div className={style.footer__button}>
                            <Button onClickEvent={() => { }} params={{ disabled: true }} textBody={textBodyForButtonType.checkout} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

});
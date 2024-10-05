


import React, { FC, memo, useEffect, useState } from 'react';
import { ProductType } from '../../../API/products/productsAPI.ts';
//@ts-ignore
import style from './CartContent.module.scss';
import { Button, textBodyForButtonType } from '../../usefulComponents/Buttons/Button/Button.tsx';
import { basketAPI, productAndCountType } from '../../../API/basket/basketApi.ts';


type propsType = {
    /* id: number,
    title: string,
    subTitle = { item.category.name },
    image = { item.images[0] },
    price = { item.price },
    count = { item.count },
    cart = { item }
 */
cart:productAndCountType,

};

export const CartContent: FC<propsType> = memo(({ cart }) => {





    const [count, setCount] = useState(cart.count);


    const [resultSumForCart, setResultSumForCart] = useState(cart.price);

    const [deleteCartContent, { }] = basketAPI.useDeleteCartContentMutation();
    /* const { data: cartContent, error, isLoading } = basketAPI.useGetCartContentQuery(cart.id); */
    const [changeCartContentCount, { }] = basketAPI.useChangeCartContentCountMutation();



    const deleteCartContentEvent = (id: number) => {
        deleteCartContent(id);
    };




    useEffect(() => {

        setResultSumForCart(count * cart.price);
    }, [count]);

    useEffect(() => {


        changeCartContentCount({ id: String(cart.id), cart: { ...cart, count: count } });
    }, [count]);


    /* useEffect(() => {
        if (cartContent && cartContent.count) {
            console.log(cartContent.count);
            
            setCount(cartContent.count);

        }
    }, [cartContent]); */


    const increment = () => {
        setCount(prev => prev - 1);
    };
    const decrement = () => {
        setCount(prev => prev + 1);
    };

    return <div className={style.item}>
        <div className={style.item__body}>
            {/* 1 */}<div className={style.item__content}>
                <div className={style.item__picture}>
                    <div className={style.item__picture_body}>
                        <img src={cart.images[0]} alt={cart.images[0]} />
                    </div>
                </div>
                <div className={style.item__text_block}>
                    <div className={style.item__title}>
                        <h3>{cart.title}</h3>
                    </div>
                    <div className={style.item__sub_title}>
                        <p>{cart.category.name}</p>
                    </div>
                </div>
            </div>
            {/* 2 */}<div className={style.item__price}>
                {cart.price}$
            </div>
            {/* 3 */}<div className={style.item__count}>
                <div className={style.count}>
                    {count <= 1 ? <Button onClickEvent={increment} params={{ disabled: true }} key={textBodyForButtonType.minus} textBody={textBodyForButtonType.minus} /> : <Button onClickEvent={increment} params={{ disabled: false }} key={textBodyForButtonType.minus} textBody={textBodyForButtonType.minus} />}
                    <span>{count}</span>
                    {count >= 9 ? <Button onClickEvent={decrement} params={{ disabled: true }} key={textBodyForButtonType.plus} textBody={textBodyForButtonType.plus} /> : <Button onClickEvent={decrement} params={{ disabled: false }} key={textBodyForButtonType.plus} textBody={textBodyForButtonType.plus} />}
                </div>
            </div>

            {/* 4 */}<div className={style.item__result_and_remove}>
                <div className={style.item__result}>
                    <div className={style.result}>
                        {resultSumForCart}$
                    </div>
                </div>
                <div className={style.item__remove} onClick={() => { deleteCartContentEvent(cart.id) }}>
                    X
                </div>
            </div>





        </div>
    </div>


});



import React, { FC, memo, useRef, useCallback, useState, useEffect } from 'react';
//@ts-ignore
import style from './CurrentProduct.module.scss';
import { Skeleton } from 'antd';
import { ProductType } from '../../API/products/productsAPI';
import { Button, textBodyForButtonType } from '../usefulComponents/Buttons/Button/Button.tsx';

import { useWindowParams } from '../../hooks/useWindowParams.ts';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
/* import { basketSlice } from '../../redux/basket/basketSlice.ts'; */
import { basketAPI, productAndCountType } from '../../API/basket/basketApi.ts';

type propsType = {
    product: ProductType | undefined,
    isLoading: boolean,
};
export const CurrentProduct: FC<propsType> = memo(({ product, isLoading }) => {

console.log(1||2||3);


    const [addCartContentPost, { error: CartContentError, isLoading: CartContentIsLoading }] = basketAPI.useAddCartContentMutation();

    const { data: cartContents, error: cartContentsError, isLoading: cartContentsIsLoading } = basketAPI.useGetCartContentsQuery();


    const dispatch = useAppDispatch();

    const { width } = useWindowParams();




    const [currentImage, setCurrentImage] = useState(product?.images[0]);
    const [sizes, setSizes] = useState([4.5, 5, 5.5]);
    const [currentSize, setCurrentSize] = useState(sizes[0]);

    const [isDisabledButton, setIsDisabledButton] = useState(false);

    const checkIdProduct = (id: number) => {
        const result = cartContents?.find((item) => { return Number(item.id) === id });


        if (!!result) {

            setIsDisabledButton(!!result);
        }


    };

    useEffect(() => {
        


        if (product?.id) {
            checkIdProduct(product.id);

        }


    }, [cartContents]);

    useEffect(() => {
        

    }, [isDisabledButton]);

    const setCurrentImageEvent = useCallback((img: string) => {
        setCurrentImage(img);


    }, [setCurrentImage]);


    const addCartContent = useCallback((product: ProductType | undefined) => {
        if (product) {
            /* dispatch(basketSlice.actions.addNewCart(product)); */
            addCartContentPost({...product,count:1});

        }
    }, [addCartContentPost]);


    return <div className={style.current_product}>



        <div className={style.current_product__body}>

            <div className={[style.current_product__picture, style.picture].join(' ')}>
                <div className={style.picture__body}>
                    {isLoading ? <Skeleton.Image style={{ width: '100%' }} className={`${style.picture__image}`} active={true} /> : <img className={style.picture__image} src={currentImage} alt="current_product" />}
                </div>
                {width <= 1139 && <div className={style.current_product__mini_gallery}>
                    <div className={style.gallery}>
                        <div className={style.gallery__body}>
                            <div className={style.gallery__items}>
                                {product?.images.map((item) => {


                                    return <div key={item} className={currentImage === item ? [style.gallery__item, style._active].join(' ') : style.gallery__item}>
                                        <div className={style.gallery__item_body}>
                                            <img src={item} alt={item} onClick={() => { setCurrentImageEvent(item) }} />
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            {width >= 1140 && <div className={style.current_product__mini_gallery}>
                <div className={style.gallery}>
                    <div className={style.gallery__body}>
                        <div className={style.gallery__items}>
                            {product?.images.map((item) => {


                                return <div key={item} className={currentImage === item ? [style.gallery__item, style._active].join(' ') : style.gallery__item}>
                                    <div className={style.gallery__item_body}>
                                        <img src={item} alt={item} onClick={() => { setCurrentImageEvent(item) }} />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>}
            <div className={[style.current_product__content, style.content].join(' ')}>
                <div className={style.content__body}>
                    <div className={style.content__title}>

                        <h3>{product?.title}</h3>
                    </div>
                    <div className={style.content__price}>
                        <div>{product?.price}$</div>
                    </div>
                    <div className={style.content__color}>

                        <div className={style.color}>Color:</div>
                        <div className={style.color__name}>Black</div>

                    </div>
                    <div className={style.content__sizes}>

                        <div className={style.sizes}>Sizes:</div>
                        <div className={style.sizes__items}>
                            {sizes.map((item) => {
                                return <div key={item} className={currentSize === item ? [style.sizes__item, style._active].join(' ') : style.sizes__item} >
                                    <button onClick={() => { setCurrentSize(item) }} type='button'>{item}</button>
                                </div>
                            })}


                        </div>

                    </div>
                    <div className={style.content__describe}>

                        <p className={style.describe}>
                            {product?.description}
                        </p>

                    </div>
                    <div className={style.content__buttons}>
                        {isDisabledButton ? <Button onClickEvent={() => { addCartContent(product) }} params={{ disabled: true }} textBody={textBodyForButtonType.basket} key={textBodyForButtonType.addCart} /> : <Button onClickEvent={() => { addCartContent(product) }} params={{ disabled: false }} textBody={textBodyForButtonType.addCart} key={textBodyForButtonType.addCart} />}
                        <Button onClickEvent={() => { console.log(123); }} textBody={textBodyForButtonType.addFavorite} key={textBodyForButtonType.addFavorite} params={{ disabled: true }} />
                    </div>

                </div>
                <div className={style.content__footer}>
                    <div className={style.content__purchased}>
                        19 people purchased
                    </div>
                    <div className={style.content__find_store}>
                        Find in a store
                    </div>

                </div>
            </div>


        </div>


    </div>



}

);
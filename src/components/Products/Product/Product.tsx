
import React, { FC, memo } from 'react';
//@ts-ignore
import style from './Product.module.scss'
import { Link } from 'react-router-dom'
import { categoryNames, ProductType } from '../../../API/products/productsAPI';
import { Skeleton } from 'antd';



type propsType = {
    id: number,
    title: string,
    subTitle: categoryNames,
    price: number,
    image: string,
    isLoading: boolean,
};

export const Product: FC<propsType> = memo(({ isLoading, id, title, subTitle, price, image }) => {

    return <div className={style.product}>
        <Link to={`/product/${id}`}>


            <div className={style.product__body}>

                <div className={style.product__picture}>
                    <div className={style.product__picture_body}>

                        {isLoading ? <Skeleton.Image style={{ width: '100%' }} className={`${style.picture_skelet}`} active={true} /> : <img className={style.picture} src={image} alt="product" />}
                    </div>
                </div>
                <div className={style.product__text_content}>
                    <div className={style.product__text_content_body}>
                        <div className={style.product__title}>
                            <h3>{title}</h3>
                        </div>
                        <div className={style.product__sub_title}>
                            <p>{subTitle}</p>
                        </div>
                    </div>

                    <div className={style.product__footer}>
                        <div className={style.product__prices}>
                            <p className={style.new_price}>{price}$</p>
                            <p className={style.old_price}>{(price * 10)}$</p>
                        </div>
                        <div className={style.product__purchased}>
                            <p>19 people purchased</p>
                        </div>
                    </div>

                </div>
            </div>

        </Link>
    </div>



}

);
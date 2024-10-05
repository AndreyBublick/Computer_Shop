
import React, { FC, memo } from 'react'
import style from './Category.module.scss'
import { Link } from 'react-router-dom';


type propsType = {
    image: string,
    categoryName: string,
    id:number,
};

export const Category: FC<propsType> = memo(({ id,image, categoryName }) => {
    return <div className={style.item}>
        <Link to={`/category/${id}`}>
            <div className={style.item__body}>
                <div className={style.item__picture}>
                    <div className={style.item__image}>
                        <img src={image} alt='image_category' />
                    </div>
                </div>
                <h3 className={style.item__title}>
                    {categoryName}
                </h3>
            </div>
        </Link>

    </div >

});


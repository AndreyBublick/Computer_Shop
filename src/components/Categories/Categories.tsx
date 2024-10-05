


import React, { FC, memo } from 'react';
import style from './Categories.module.scss';
import { categorieType } from '../../API/categories/categoriesAPI';
import {Category} from './Category/Category.tsx';
import { createElementByItems } from '../../utils/createElementByItems.ts';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton.tsx';

type propsType = {
    categories: categorieType[]|undefined,
    isLoading: boolean,
    title: string,
};


export const Categories: FC<propsType> = memo(({ categories, isLoading, title }) => {

    const list = categories?.filter((item,index)=>{ return index < 4});

    
    

    return <section className={style.categories}>
        <div className={style.categories__container}>
            <div className={style.categories__body}>
                <h2>{title}</h2>
                <div className={style.categories__items}>
                {list ? list.map((item)=>{ return <Category key={item.id} id={item.id} categoryName={item.name} image={item.image}  />  }) : /* createElementByItems(<CardSkeleton isLoading={isLoading} />,4) */[1, 2, 3, 4].map((id) => { return <CardSkeleton key={id} isLoading={isLoading} /> })}
                </div>
            </div>
        </div>
    </section>

});



import React, { FC, memo } from 'react'
//@ts-ignore
import style from './Button.module.scss'

export enum textBodyForButtonType {
    see = "see more",
    show = "see more",
    addCart = "Add to cart",
    addFavorite = "Add to favorites",
    checkout = "Proceed to checkout",
    plus = "+",
    minus = "-",
    basket = "В корзине",

};

type propsType = {
    onClickEvent: () => void,
    textBody: textBodyForButtonType,
    params: any | undefined,
};

export const Button: FC<propsType> = memo(({ onClickEvent, textBody, params }) => {
    return <button {...params} className={style.button} onClick={onClickEvent}>{textBody}</button>

}
);

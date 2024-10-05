import React, { FC, memo, ReactElement, ReactNode } from 'react'
//@ts-ignore
import style from './MiniWindow.module.scss'
import { Poster } from '../Poster/Poster.tsx'


type propsType = {
    children:ReactElement, 
};

export const MiniWindow:FC<propsType> = memo(({children}) => {
    return <div className={style.mini_window}>
        <div className={style.mini_window__body}>
            <div className={style.mini_window__content}>
                {children}
            </div>
        </div>
    </div>

});

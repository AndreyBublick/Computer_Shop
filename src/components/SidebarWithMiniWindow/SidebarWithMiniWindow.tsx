import React, { Component, FC, JSXElementConstructor, memo, ReactElement, ReactNode } from 'react'
//@ts-ignore
import style from './SidebarWithMiniWindow.module.scss'
import { SideBar } from '../SideBar/SideBar.tsx';
import { MiniWindow } from '../MiniWindow/MiniWindow.tsx';

type propsType = {
    children:ReactElement, 
};

export const SidebarWithMiniWindow:FC<propsType> = memo(({children}) => {
   
    
    return <div className={style.sidebar_with_mini_window}>
       
            <div className={style.sidebar_with_mini_window__body}>
                <div className={style.sidebar_with_mini_window__items}>
                    <SideBar />
                    <MiniWindow>{children}</MiniWindow>
                </div>
            </div>
        

    </div>

});



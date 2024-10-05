import React, { FC, memo, useCallback } from 'react'
import style from './Poster.module.scss';
import { Button, textBodyForButtonType } from '../usefulComponents/Buttons/Button/Button.tsx';

export const Poster: FC = memo(() => {

    const outputLogValue = useCallback(() => {
        console.log(123);

    }, []);


    return <div className={style.poster}>
        <div className={style.poster__body}>
            <div className={style.poster__sub_title}><p>the bestseller of 2024</p></div>
            <div className={style.poster__title}><h1>lennon r2d2<br />with nvidia 5090 ti</h1></div>
            <div className={style.poster__button}>
                <Button params={{}} onClickEvent={outputLogValue} textBody={textBodyForButtonType.show}></Button>
            </div>
        </div>
    </div>

});

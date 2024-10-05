
import React, { FC, MutableRefObject, useRef } from 'react';
import style from './Banner.module.scss';
import grandFather from '../../images/grandFather.png';

import { Button, textBodyForButtonType } from '../usefulComponents/Buttons/Button/Button.tsx';
import { useObserver } from '../../hooks/useObserver.ts';

export const Banner: FC = () => {
    const { elementRef: elementRefForContent, isIntersecting: isIntersectingForContent } = useObserver({ threshold: 0.1 });
    const { elementRef, isIntersecting } = useObserver({ threshold: 0.1 });






    return <section className={style.banner}>
        <div className={style.banner__body}>
            <div className={style.banner__items}>
                <div ref={elementRefForContent} className={isIntersectingForContent || isIntersecting ? [style.banner__item, style.banner__item_text_content, style._active].join(' ') : [style.banner__item, style.banner__item_text_content].join(' ')}>
                    <div className={style.text_content}>
                        <h4>NEW YEAR <br /><span>SALE</span></h4>
                        <Button params={{}} textBody={textBodyForButtonType.see} onClickEvent={() => {

                        }} />
                    </div>

                </div>
                <div ref={elementRef} className={isIntersectingForContent || isIntersecting ? [style.banner__item, style.banner__item_picture, style._active].join(' ') : [style.banner__item, style.banner__item_picture].join(' ')}>
                    <div className={style.banner__picture}>
                        <div className={style.banner__picture_body}>
                        
                            <img src={grandFather} alt="grand-father" />
                            <span className={style.banner__sale}>save up to <span>50%</span> off</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

}


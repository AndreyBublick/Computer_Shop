import React, { FC, memo } from 'react';
import style from './Footer.module.scss';
import { Logo } from '../Logo/Logo.tsx';
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";

export const Footer: FC = memo(() => {
  const link = 'https://www.figma.com/design/7itpNsHVP5LPUpK4ENDYkv/Shop?node-id=3-16&node-type=frame&t=0bB5Gc0jlWlcS1Ul-0';
  return <div className={style.footer}>
    <div className='container'>

      <div className={style.footer__body}>

        <div className={style.footer__items}>
          <div className={style.item}>
            <div className={style.item__body}>
              <Logo />
            </div>



          </div>
          <div className={style.item}>
            <div className={style.item__body}>
              <p className={style.item__develop}>Developed by <a href='https://www.figma.com/design/7itpNsHVP5LPUpK4ENDYkv/Shop?node-id=3-16&node-type=frame&t=0bB5Gc0jlWlcS1Ul-0'>Tomkovich</a></p>
            </div>



          </div>
          <div className={style.item}>
            <div className={style.item__body}>
              <div className={style.item__icons}>
                <div className={style.icon}><a href={link}><i><TbBrandYoutube /></i></a></div>
                <div className={style.icon}><a href={link}><i><AiOutlineFacebook /></i></a></div>
                <div className={style.icon}><a href={link}><i><FaInstagram /></i></a></div>
              </div>

            </div>



          </div>

        </div>
      </div>
    </div>
  </div>

});

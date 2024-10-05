import React, { FC, memo, useEffect, useState } from 'react';
import style from './Header.module.scss';
import { Link, NavLink, } from 'react-router-dom';

import Avatar from '../../images/avatar.jpg';

import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { basketAPI } from '../../API/basket/basketApi.ts';
import { Logo } from '../Logo/Logo.tsx';


export const Header: FC = memo(() => {

  const [searchValue, setSearchValue] = useState('');



  return <div className={style.header}>
    <div className="container">
      <div className={style.header__body}>
        <div className={style.header__logo}>
          <Logo />
        </div>
        <div className={style.header__user}>
          <img src={Avatar} alt="" />
          <p>NameUser</p>
        </div>
        <form className={style.header__form}>

          <div className={style.header__search}>
            <div className={style.search}>
              <IoSearchOutline />
            </div>
            <input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} placeholder={'search...'} type="text" /></div>

          {/* <div className={style.header__box}></div> */}

        </form>
        <div className={style.header__icons}>
          <Icons />
        </div>
      </div>
    </div>

  </div>

});

const Icons: FC = memo(() => {
  const { data, error, isLoading } = basketAPI.useGetCartContentsQuery();

  return <div className={style.icons}>
    <div className={style.icons__items}>
      <div className={style.icons__item}>
        <Link to={'/favorites'}><i><FaRegHeart />{data && <span className={style.circle}>{0}</span>}</i></Link>
      </div>
      <div className={style.icons__item}>
        <Link to={'/basket'}><i><CgShoppingBag />{data && <span className={style.circle}>{data.length}</span>}</i></Link>

      </div>

    </div>
  </div>

});






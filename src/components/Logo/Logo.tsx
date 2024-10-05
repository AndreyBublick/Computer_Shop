
import logoImage from '../../images/logo.svg';

import style from './Logo.module.scss';
import React, { FC, memo } from 'react'
import { NavLink } from 'react-router-dom';

export const Logo: FC = memo(() => {
    return <>
        <NavLink to={'/'}> 
        <img src={logoImage} alt="logoImage" />
        </NavLink>
    </>

});


import React, { useEffect } from 'react';
import style from './SideBar.module.scss';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { categoriesAPI } from '../../API/categories/categoriesAPI.ts';
import { ConfigProvider, Spin } from 'antd';

export const SideBar = () => {

  const params = useParams();



  const { data, error, isLoading } = categoriesAPI.useGetCategoriesQuery();



  const { data: categorie, error: categorieError, isLoading: categorieIsLoading } = categoriesAPI.useGetCategorieByIdQuery(Number(params.idCategory), { skip: !params.id });










  return <div className={style.sidebar}>

    <div className={style.sidebar__body}>
      <div className={style.sidebar__title}>Categories</div>



      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6c3eb8',

          },
        }}
      >
        <Spin spinning={isLoading || categorieIsLoading} size="large">
          {<nav>
            <ul>
              {data?.map((categorie) => { return <li key={categorie.id}><NavLink className={(isActive) => { return isActive.isActive ? `${style._active}` : '' }} to={`/categories/${categorie.id}`}>{categorie.name}</NavLink></li> })}
            </ul>
          </nav>}
        </Spin>
      </ConfigProvider>







      <div className={style.sidebar__footer}>
        <div className={style.sidebar__help}>
          <span>Help</span>
        </div>
        <div className={style.sidebar__term}>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>

  </div>
}






import { Skeleton } from 'antd';
import SkeletonNode from 'antd/es/skeleton/Node';
import React, { FC, memo } from 'react';
import style from './CardSkeleton.module.scss';

type propsType = {
    isLoading: boolean,
};

export const CardSkeleton: FC<propsType> = memo(({ isLoading }) => {


    return <div className={style.block}>
        <div className={style.block__body}>
            <Skeleton.Image active={isLoading} style={{ width: '100%', height: '150px', }} />

            <div className={style.block__text}>
            <SkeletonNode active={isLoading} style={{ height: 20, width: '70%' }} />
            <SkeletonNode active={isLoading} style={{ height: 15, width: '50%' }} />
            <div className={style.footer}>
                <SkeletonNode active={isLoading} style={{ height: 15, width: '100%' }} />
                <SkeletonNode active={isLoading} style={{ height: 15, width: '100%' }} />

            </div>
            </div>
           
        </div>

    </div>

});


import { useState, useEffect, useRef, FC, MutableRefObject, ReactElement } from 'react';

// Кастомный хук useObserver

type useObserverType = (object:options)=>{elementRef:MutableRefObject<null|HTMLDivElement>, isIntersecting:boolean};
type options ={
    threshold:number,
};

export const useObserver:useObserverType = (options:options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef:MutableRefObject<HTMLDivElement|null> = useRef(null); // Реф для отслеживания элемента

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting); // Обновляем состояние видимости
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Очищаем наблюдателя при размонтировании компонента
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return {elementRef, isIntersecting}; // Возвращаем реф и состояние
};


import  { useEffect, useState } from 'react';

export const useWindowParams = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const resizeEvent = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', resizeEvent);
        
        return () => {
            window.removeEventListener('resize', resizeEvent);

        };
    }, []);

    
    return { width, height };
}
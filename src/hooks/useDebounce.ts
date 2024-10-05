import { MutableRefObject, useCallback, useRef } from "react";






export const useDebounce = (cb: (args: any) => void, delay:number) => {


    const ref:MutableRefObject<NodeJS.Timeout | null> = useRef(null);


    const cbDebounce = useCallback((...args: any) => {


        if (ref.current) {
            clearTimeout(ref.current);
        }

        ref.current = setTimeout(() => {
            cb(args);
        }, delay);

    }, [delay, cb]);


    return cbDebounce;
};
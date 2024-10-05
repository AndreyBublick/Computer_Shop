import { ReactNode } from "react";

export const createElementByItems = ( Element:ReactNode, howMany:number ) => {
    const arrayNone = new Array(howMany).fill({});
    return arrayNone.map(() => Element);
};
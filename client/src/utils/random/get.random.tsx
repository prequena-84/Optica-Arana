import type { IPosition } from "@/components/herobanner/typescript/interfaces/Interfaces.heroLogIn";

function getRandomInt (min:number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomOpacity(min:number = 0.1, max:number = 1) {
    return Math.random() * (max - min) + min;
};

function getRandomPosition(
    minTop:number = 1,
    maxTop:number = 80,
    unitTop:string = "px",
    minLeft:number = 0,
    maxLeft:number = 80,
    unitLeft:string = "px"
): IPosition  {

    const top = `${getRandomInt(minTop,maxTop)}${unitTop}`;
    const left = `${getRandomInt(minLeft,maxLeft)}${unitLeft}`;
    return { 
        top,
        left 
    };

};

export {
    getRandomInt,
    getRandomOpacity,
    getRandomPosition,
}
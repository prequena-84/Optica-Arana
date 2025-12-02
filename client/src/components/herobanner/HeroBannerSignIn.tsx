"use client"

import React, { useState, useEffect } from "react";
import style from "@/styles/herobanner/HeroBanner.Login.module.css"

import type { IPosition,IHeroBannerLogIn } from "@/components/herobanner/typescript/interfaces/Interfaces.heroLogIn";

import { 
    //getRandomInt,
    getRandomOpacity,
    getRandomPosition,
 } from "@/utils/random/get.random"; 

const HeroBannerSignIn: React.FC<IHeroBannerLogIn> = ({children}) => {
    // Estados del SVG Lentes #1
    const [ visible1, setVisible1 ] = useState<boolean>(true);
    const [ visibleOpacity1 , setvisibleOpacity1 ] = useState<number>(0.7);
    //const [ rotation1, setRotation1 ] = useState<number>(1);
    const [ position1, setPosition1 ] = useState<IPosition>({ top:"10%",left:"25%" });

    // Estados del SVG Lentes #2
    const [ visible2, setVisible2 ] = useState<boolean>(true);
    const [ visibleOpacity2 , setvisibleOpacity2 ] = useState<number>(0.7);
    //const [ rotation2, setRotation2 ] = useState<number>(1);
    const [ position2, setPosition2 ] = useState<IPosition>({ top:"30%",left:"35%" });

    // Estados del SVG Lentes #3
    const [ visible3, setVisible3 ] = useState<boolean>(true);
    const [ visibleOpacity3 , setvisibleOpacity3 ] = useState<number>(0.7);
    //const [ rotation3, setRotation3 ] = useState<number>(1);
    const [ position3, setPosition3 ] = useState<IPosition>({ top:"45%",left:"55%" });

    // Estados del SVG Lentes #4
    const [ visible4, setVisible4 ] = useState<boolean>(true);
    const [ visibleOpacity4 , setvisibleOpacity4 ] = useState<number>(0.7);
    //const [ rotation4, setRotation4 ] = useState<number>(1);
    const [ position4, setPosition4 ] = useState<IPosition>({ top:"55%",left:"65%" });

    useEffect(() => {
        const timers:Record<string, NodeJS.Timeout> = {
            interval1: setInterval(() => {
                setPosition1(getRandomPosition(1,100,"%",1,100,"%"));       // Rotar la posición                
                setVisible1(prev => !prev);                 // Alternar visibilidad
                //setRotation1(getRandomInt(0,270));          // Rotar SVG
                setvisibleOpacity1(getRandomOpacity(0.1,1)) // Alternar Transparecia
            }, 3000),

            interval2: setInterval(() => {
                setPosition2(getRandomPosition(1,100,"%",1,100,"%"));              
                setVisible2(prev => !prev);
                //setRotation2(getRandomInt(0,270));
                setvisibleOpacity2(getRandomOpacity(0.1,1));
            }, 3000),

            interval3: setInterval(() => {
                setPosition3(getRandomPosition(1,100,"%",1,100,"%"));              
                setVisible3(prev => !prev);
                //setRotation3(getRandomInt(0,270));
                setvisibleOpacity3(getRandomOpacity(0.1,1));
            }, 3000),

            interval4: setInterval(() => {
                setPosition4(getRandomPosition(1,100,"%",1,100,"%"));            
                setVisible4(prev => !prev);
                //setRotation4(getRandomInt(0,270));
                setvisibleOpacity4(getRandomOpacity(0.1,1));
            }, 3000),
        };

        return () => {
            Object.values(timers).forEach(clearInterval);
        };
    });

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 z-0 ">
                <img 
                    src={`/svg/login/lentes-1.svg`} 
                    className={style.heroSvg} 
                    alt="lente-1" 
                    style={{
                        top:position1.top,
                        left:position1.left,
                        opacity: visible1 ? visibleOpacity1 : 0,
                        //transform: `rotate(${rotation1}deg)`,
                        transition: "all 0.5s ease-in-out",
                    }}
                />
                <img 
                    src={`/svg/login/lentes-2.svg`} 
                    className={style.heroSvg} 
                    alt="lente-2"  
                    style={{
                        top:position2.top,
                        left:position2.left,
                        opacity: visible2 ? visibleOpacity2 : 0,
                        //transform: `rotate(${rotation2}deg)`,
                        transition: "all 0.5s ease-in-out",
                    }}
                />
                <img 
                    src={`/svg/login/lentes-3.svg`} 
                    className={style.heroSvg} 
                    alt="lente-3" 
                    style={{
                        top:position3.top,
                        left:position3.left,
                        opacity: visible3 ? visibleOpacity3 : 0,
                        //transform: `rotate(${rotation3}deg)`,
                        transition: "all 0.5s ease-in-out",
                    }}
                />
                <img 
                    src={`/svg/login/lentes-1.svg`} 
                    className={style.heroSvg} 
                    alt="lente-4"  
                    style={{
                        top:position4.top,
                        left:position4.left,
                        opacity: visible4 ? visibleOpacity4 : 0,
                        //transform: `rotate(${rotation4}deg)`,
                        transition: "all 0.5s ease-in-out",
                    }}
                />
            </div>
            <div className="absolute flex flex-col items-center justify-center h-full w-full">
                {children}
            </div>
        </div>
    );
};

export default HeroBannerSignIn;
import type { 
    Ttop,
    Tleft,
    Tchildren,
    Topacity,
    TminMaxTop,
    TminMaxLeft,
 } from "@/components/herobanner/typescript/types/Types.heroLogIn"

interface IPosition {
    minTop?:TminMaxTop;
    maxTop?:TminMaxTop;
    minLeft?:TminMaxLeft;
    maxLeft?:TminMaxLeft;
    top?:Ttop;
    left?:Tleft;
    opacity?:Topacity;
}

interface IHeroBannerLogIn {
    children:Tchildren,
}

export type {
    IPosition,
    IHeroBannerLogIn,
}
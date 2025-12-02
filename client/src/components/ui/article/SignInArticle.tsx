import React from "react";
import Btn from "@/components/ui/button/ButtonBlockLine";
import HeroBannerSignIn from "@/components/herobanner/HeroBannerSignIn";

import type { Isection } from "@/components/ui/article/typescript/interfaces/InterfacesSection";

const SingInArticle: React.FC<Isection> = ({
    textH1 = "¡Bienvenidos! a Visión",
    textH2 = "Ingresa a tu cuenta",
    textBtn = "INGRESAR",
    onClick,
}) => {
    return (
        <HeroBannerSignIn>
            <h1 className="z-2">{textH1}</h1>
            <h2 className="z-2">{textH2}</h2>
            <div className="flex justify-center w-3/4">
                <Btn
                    text={textBtn}
                    variantOutLine="btn-outline-secondary"
                    sizes="btn-lg"
                    onClick={onClick}
                    className="z-2"
                />
            </div>
        </HeroBannerSignIn>
    );
};

export default SingInArticle;
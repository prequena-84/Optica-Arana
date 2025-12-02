import React from "react";
import ButtonBlockLine from "@/components/ui/button/ButtonBlockLine";
import HeroBannerlogIn from "@/components/herobanner/HeroBannerLogIn";

import type { Isection } from "@/components/ui/article/typescript/interfaces/InterfacesSection";

const LoginArticle: React.FC<Isection> = ({
    textH1 = "¡Bienvenidos! a Visión",
    textH2 = "Registra tu Cuenta",
    textBtn = "REGISTRAR",
    onClick,
}) => {

    return (
        <HeroBannerlogIn>
            <h1 className="z-2">{textH1}</h1>
            <h2 className="z-2">{textH2}</h2>
            <div className="flex justify-center w-3/4">
                <ButtonBlockLine
                    text={textBtn}
                    sizes="btn-lg"
                    onClick={onClick}
                    className="z-2"
                />
            </div>
        </HeroBannerlogIn>
    );
};

export default LoginArticle;

//Ya quedo el efecto del desplazamiento del menu a la izquierda y derecha me queda adecuar el color del article signIn, revisar como puedo agregar ambos article para que se vea el efecto de cambio entre ambos
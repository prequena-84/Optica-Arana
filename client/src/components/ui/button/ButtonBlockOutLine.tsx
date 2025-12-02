import React from "react";
import ButtonOutLine from "@/components/ui/button/ButtonOutLine";

import type { Ibutton } from "@/components/ui/button/typescript/interfaces/InterfacesButton";

const ButtonBlockOutLine: React.FC<Ibutton> = ({
    type, 
    className = undefined, 
    variantOutLine = "btn-outline-primary", 
    disabled=false,
    text ="",
    sizes= "btn-sm",
    onClick,
}) => {

    return (
        <div className="d-grid gap-2">
            <ButtonOutLine
                type={type}
                text={text}
                variantOutLine={variantOutLine}
                className={className} 
                onClick={onClick}
                sizes={sizes}
                disabled={disabled}
            />
        </div>
    );
    
};

export default ButtonBlockOutLine
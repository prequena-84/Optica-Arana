import React from "react";
import type { Ibutton } from "@/components/ui/button/typescript/interfaces/InterfacesButton";

const ButtonOutLine:React.FC<Ibutton> = ( {
    type="button",
    text= null,
    onClick=undefined,
    className="",
    variantOutLine="btn-outline-primary",
    arialDisabled="false",
    disabled=false,
    sizes="btn-sm",
} ) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantOutLine} ${sizes} ${className}`}
            arial-disabled={arialDisabled}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default ButtonOutLine;
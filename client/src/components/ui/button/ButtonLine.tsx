import React from "react";

import { Ibutton } from "@/components/ui/button/typescript/interfaces/InterfacesButton";

const ButtonLine:React.FC<Ibutton> = ({
    type="button",
    text= null,
    onClick=undefined,
    className="",
    variantLine="btn-primary",
    disabled=false,
    sizes="btn-sm",
}) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantLine} ${sizes} ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
    
};

export default ButtonLine;
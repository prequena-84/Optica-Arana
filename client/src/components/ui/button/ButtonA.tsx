import React from "react";
import type { IbuttonA } from "@/components/ui/button/typescript/interfaces/InterfacesButton";

const ButtonA:React.FC<IbuttonA> = ({
    role=undefined,
    text= null,
    onClick=undefined,
    className="",
    variant="btn-primary",
    arialDisabled=false,
    sizes="btn-sm",
}) => {
    return (
        <a 
            role={role}
            onClick={onClick}
            className={`btn ${variant} ${sizes} ${className}`}
            aria-disabled={arialDisabled}
        >
            {text}
        </a>
    );
};

export default ButtonA;
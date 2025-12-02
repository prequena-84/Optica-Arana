import React from "react";
import ButtonLine from "@/components/ui/button/ButtonLine";
import type { Ibutton } from "@/components/ui/button/typescript/interfaces/InterfacesButton";

const ButtonBlockLine:React.FC<Ibutton> = ({
    type, 
    className="", 
    variantLine="btn-primary", 
    disabled=false,
    text="",
    sizes="btn-sm",
    onClick,
}) => {
    return (
        <div className="d-grid gap-2">
            <ButtonLine
                type={type}
                text={text}
                variantLine={variantLine}
                className={className} 
                onClick={onClick}
                disabled={disabled}
                sizes={sizes}
            />
        </div>
    );
};

export default ButtonBlockLine;
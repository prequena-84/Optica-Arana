"use client"

import React from "react";
import type { IinputUserName } from "@/components/ui/input/typescript/interfaces/InterfacesInputUserName";

const InputUserName:React.FC<IinputUserName> = ({
    name,
    id,
    placeHolder,
    arialLabel,
    onChange,
    value, 
    className = "",
    classInput = "",
    labelText,
}) => {
    
    return (
        <div className={`input-group mb-3 ${className}`}>
            {labelText && (
                <label htmlFor={id} className="visually-hidden">
                    { labelText }
                </label>
            )}
            <span className="input-group-text" id="basic-addon1">@</span>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type="text" 
                className={`form-control ${classInput}`}
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default InputUserName;
;
"use client"

import React from "react";
import type { Iinput } from "@/components/ui/input/typescript/interfaces/InterfacesInput";

const Input:React.FC<Iinput> = ({
    name,
    id,
    type="text",
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
                <label htmlFor={id} className={ labelText ?? "visually-hidden"}>
                    { labelText }
                </label>
            )}
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type={type} 
                className={`form-control ${classInput}`}
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default Input;
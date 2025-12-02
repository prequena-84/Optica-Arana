"use client"

import React, { useState } from "react";
import type { IinputPassword } from "@/components/ui/input/typescript/interfaces/InterfacesInputPassword";

const InputPassword:React.FC<IinputPassword> = ({
    name,
    id,
    placeHolder,
    onChange,
    value,
    className = undefined,
    classInput = undefined,
    labelText,
}) => {

    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className={`input-group mb-3 ${className}`}>
            <label htmlFor={id} className={ labelText ?? "visually-hidden"}>
                { labelText }
            </label>
            <div className="input-group">
                <input
                    name={name} 
                    value={value}
                    onChange={onChange} 
                    id={id} 
                    type={ showPassword ? 'text' : 'password' }
                    className={`form-control ${classInput}`} 
                    placeholder={placeHolder}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="btn btn-primary"
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                    <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </button>
            </div>
        </div>
    );
};

export default InputPassword;
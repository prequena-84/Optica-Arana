import React from "react";
import Input from "@/components/ui/input/Input";
import InputPassword from "@/components/ui/input/InputPassword";
import ButtonLine from "@/components/ui/button/ButtonLine";
import BtnOutLine from "@/components/ui/button/ButtonOutLine";

//import style from "@/components/ui/form/css/LogInForm.module.css"

import type { Iform } from "@/components/ui/form/typescript/interfaces/InterfacesLogInForm";

const LogInForm: React.FC<Iform> = ({
    className,
    text="Inicio de Sesión",
    handleChange,
    onSubmit,
    onClickForgotPassword,
    onClickClear,
    dataLogin = {
        email: undefined,
        password: undefined,
    },
    isSignIn,
}) => {
    return (
        <form onSubmit={onSubmit} className={`
            ${className}
            flex 
            flex-1 
            justify-center 
            items-center
            p-6 
            bg-formLogIn 
            z-2
        `}>
            <fieldset className="w-[30vw]">
                <div className="input-group">
                    <legend>{text}</legend>
                    <div className={`input-group flex flex-1 flex-col gap-1`}>
                        <label>Correo Electronico</label>
                        <Input 
                            type="email"
                            name="email"
                            id="email"
                            placeHolder="Correo Electronico"
                            arialLabel="email"
                            value={dataLogin?.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <InputPassword 
                    name="password"
                    id="password"
                    labelText="Password"
                    placeHolder="Contraseña"
                    value={dataLogin?.password}
                    onChange={handleChange}
                    className="gap-1"
                />
                <div className="input-group flex flex-1 justify-center items-center mb-3">
                    <ButtonLine 
                        text="Olvidaste tu Contraseña"
                        type="button"
                        variantLine="btn-link"
                        onClick={onClickForgotPassword}
                    />
                </div>
                <div className="input-group flex flex-1 justify-center items-center m-8 gap-2 border">
                    <BtnOutLine
                        text="Ingresar"
                        type="submit"
                        sizes="btn-lg"                        
                    />
                    <ButtonLine
                        type="button"
                        text="Limpiar"
                        sizes="btn-lg"
                        onClick={onClickClear}
                    />
                </div>
            </fieldset>
        </form>
    );
};

export default LogInForm;
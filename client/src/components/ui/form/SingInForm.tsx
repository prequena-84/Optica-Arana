import React from "react";
import Input from "@/components/ui/input/Input";
import InputUserName from "@/components/ui/input/InputUserName";
import InputPassword from "@/components/ui/input/InputPassword";
import ButtonOutLine from "@/components/ui/button/ButtonOutLine";
import ButtonLine from "@/components/ui/button/ButtonLine";

//import style from "@/components/ui/form/css/SignInForm.module.css";

import type { Iform } from "@/components/ui/form/typescript/interfaces/InterfacesSingInForm";

const SignInForm: React.FC<Iform> = ({
    text="Registro de Usuario",
    onSubmit,
    handleChange,
    onClickClear,
    dataSingIn = {
        idUser:undefined,
        userName:undefined,
        password:undefined,
        name:undefined,
        lastName:undefined,
        email:undefined,
        whatsApp:undefined,
    },
}) => {
    return (
        <form onSubmit={onSubmit} className={""}>
            <fieldset className={""}>
                <div className="">
                    <legend>{text}</legend>
                    <Input 
                        name="idUser"
                        id="idUser"
                        placeHolder="Numero de Documento del Usuario"
                        arialLabel="idUser"
                        value={dataSingIn?.idUser}
                        onChange={handleChange}
                        className={""}
                        classInput={""}
                    />
                </div>
                <InputUserName 
                    name="userName"
                    id="userName"
                    placeHolder="Usuario"
                    arialLabel="userName"
                    value={dataSingIn?.userName}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                />
                <Input 
                    name="name"
                    id="name"
                    placeHolder="Nombres"
                    arialLabel="name"
                    value={dataSingIn?.name}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                /> 
                <Input 
                    name="lastName"
                    id="lastName"
                    placeHolder="Apellidos"
                    arialLabel="lastName"
                    value={dataSingIn?.lastName}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                />
                <Input 
                    name="email"
                    id="email"
                    type="email"
                    placeHolder="Correo Electronico"
                    arialLabel="email"
                    value={dataSingIn?.email}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                />
                <InputPassword
                    name="password"
                    id="password"
                    placeHolder="Contraseña"
                    value={dataSingIn?.password}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                />
                <Input 
                    name="whatsApp"
                    id="whatsApp"
                    type="number"
                    placeHolder="Numero de Tlf / WhatsApp"
                    arialLabel="whatsApp"
                    value={dataSingIn?.whatsApp}
                    onChange={handleChange}
                    className={""}
                    classInput={""}
                />
                <div className={""}>
                    <ButtonOutLine
                        text="Ingresar"
                        type="submit"
                        sizes="btn-lg"
                        className={""}
                    />
                    <ButtonLine
                        text="Limpiar"
                        type="button"
                        sizes="btn-lg"
                        className={""}
                        onClick={onClickClear}
                    />
                </div>
            </fieldset>
        </form>
    );
};

//Quede en hacer el componente de pagina Login y luego agregar auth Next investigar
export default SignInForm;
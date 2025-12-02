"use client"

import React, { useState } from "react";
import LogInForm from "@/components/ui/form/LogInForm";
import SectionGetLogin from "@/components/ui/section/GetLoginSection";
import SectionGetSignIn from "@/components/ui/section/GetSignInSection";


import type { TisSignIn } from "@/app/module/login/typescript/types/TypesLogIn";
import type { IdataLogin } from "@/components/ui/form/typescript/interfaces/InterfacesLogInForm";
//import type { IdataSingIn } from "@/components/ui//form/typescript/interfaces/InterfacesSingInForm";

const Login: React.FC = () => {

    // Definición del Estado Local
    const [ isSignIn, setIsSignIn ] = useState<TisSignIn>(false);
    const [ dataLogIn, setDataLogIn ] = useState<IdataLogin>({
        email:"", password:""
    });
    /*const [ dataSingIn, setDataSingIn ] = useState<IdataSingIn>({
        idUser:undefined,
        userName:"",
        password:"",
        name:"",
        lastName:"",
        email:"",
        whatsApp:undefined,
    });*/

    // Actualizacion de datos en los inputs de logIN (Funciona "OK")
    const handleChangeLogIn = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDataLogIn( prevDataLogIn => ({
            ...prevDataLogIn,
            [name]:value
        }));
    };

    // Metodo pendiente del olvido de la contraseña
    const forgotPassword = () => { alert("Proximamente") };

    // Metodo para limpiar el Formulario (Funciona "OK")
    const clearForm = () => {
        setDataLogIn({
            email:"",
            password:"",
        });
    };

    // Cambio de login a SignIn
    const togleSingIn = () => setIsSignIn(!isSignIn);

    return (
        <section className="relative h-screen w-screen overflow-hidden">
            <div className={`
                flex 
                w-[200%] h-full 
                transform transition-transform duration-5000 ease-in-out
                ${isSignIn ? "-translate-x-1/2" : "translate-x-0"}
            `}>
                <div className="w-full h-full flex">
                    <div className="w-2/3 h-full">
                        <LogInForm
                            className="w-full h-full"
                            dataLogin={dataLogIn}
                            handleChange={handleChangeLogIn}
                            onClickForgotPassword={forgotPassword}
                            onClickClear={clearForm}
                            isSignIn={isSignIn}
                        />
                    </div>
                    <div className="w-1/3 h-full">
                        <SectionGetLogin
                            className="w-full h-full"
                            onClick={togleSingIn}
                            isSignIn={isSignIn}
                        />
                    </div>
                </div>
                <div className="w-full h-full flex">
                    <div className="w-1/3 h-full">
                            <SectionGetSignIn
                                className="w-full h-full"
                                onClick={togleSingIn}
                                isSignIn={isSignIn}
                            />
                    </div>
                    <div className="w-2/3 h-full">
                        <form>
                            <h1>prueba slider 2</h1>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Login;
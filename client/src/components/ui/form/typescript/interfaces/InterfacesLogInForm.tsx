import type { 
    Tchildren,
    TclassName,
    TonSubmit,
    Ttext,
    ThtmlFor,
    Tonclick,
    ThandleChange,
    Temail,
    Tpassword,
    TisSignIn,
} from "@/components/ui/form/typescript/types/TypesForm";

interface IdataLogin {
    email:Temail | undefined;
    password:Tpassword | undefined;
}

 interface Iform {
    children?:Tchildren;
    className?:TclassName | undefined;
    onSubmit?:TonSubmit | undefined;
    text?:Ttext | undefined;
    htmlFor?:ThtmlFor | undefined;
    onClickClear?:Tonclick;
    onClickForgotPassword?:Tonclick;
    handleChange?:ThandleChange;
    dataLogin?:IdataLogin;
    isSignIn?:TisSignIn;
}

export type {
    Iform,
    IdataLogin,
}
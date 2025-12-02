import type { 
    TclassName,
    TonSubmit,
    Ttext,
    Tonclick,
    ThandleChange,
    Temail,
    Tpassword,
    TidUser,
    TuserName,
    Tname,
    TlastName,
    TwhatsApp,
} from "@/components/ui/form/typescript/types/TypesForm";

interface IdataSingIn {
    idUser:TidUser | undefined;
    userName:TuserName | undefined;
    password:Tpassword | undefined;
    name:Tname | undefined;
    lastName:TlastName | undefined;
    email:Temail | undefined;
    whatsApp:TwhatsApp | undefined;
}

interface Iform {
    onSubmit?:TonSubmit;
    className?:TclassName;
    text?:Ttext;
    handleChange?:ThandleChange;
    onClickClear?:Tonclick;
    dataSingIn?:IdataSingIn;
}

export type {
    IdataSingIn,
    Iform,
}
import type { ReactNode,FormEventHandler,MouseEventHandler,ChangeEvent} from "react";

type Tkey = string;
type Tchildren = ReactNode;
type TclassName = string;
type TonSubmit = FormEventHandler<HTMLFormElement>;
type Ttext = string;
type ThtmlFor = string;
type Tonclick = MouseEventHandler<HTMLButtonElement>;
type ThandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
type Temail = string;
type Tpassword = string;
type TidUser = number;
type TuserName = string;
type Tname = string;
type TlastName = string;
type TwhatsApp = number;
type TisSignIn = boolean;

export type {
    Tkey,
    Tchildren,
    TclassName,
    TonSubmit,
    Ttext,
    ThtmlFor,
    Tonclick,
    ThandleChange,
    Temail,
    Tpassword,
    TidUser,
    TuserName,
    Tname,
    TlastName,
    TwhatsApp,
    TisSignIn,
}
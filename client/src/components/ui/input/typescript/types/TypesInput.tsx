import type { InputHTMLAttributes } from "react";

type TclassName = string;
type TclassInput = string;
type Tname = string;
type Tid = string;
type TplaceHolder = string;
type Tvalue = string | number;
type TonChange= InputHTMLAttributes<HTMLInputElement>['onChange'];
type TlabelText = string;
type Ttype =  "text" | "password" | "email" | "url" | "number" | "date" | "checkbox" | "radio" | "radio" | "file" | "submit";
type TarialLabel = string;

export type {
    TclassName,
    TclassInput,
    Tname,
    Tid,
    TplaceHolder,
    Tvalue,
    TonChange,
    TlabelText,
    Ttype,
    TarialLabel,
}
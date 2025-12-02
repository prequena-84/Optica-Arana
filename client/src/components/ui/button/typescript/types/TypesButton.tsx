import type { MouseEventHandler } from "react";

type Tkey = string;
type Ttype = "button" | "submit" | "reset";
type TclassName = string;
type Ttext = string;
type TvariantLine = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
type TvariantOutLine = 'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark';
type Tsizes = 'btn-lg' | 'btn-sm';
type Tdisabled = boolean;
type TariaDisabled = boolean;
type TonClick = MouseEventHandler<HTMLButtonElement>;
type Trole = "button";

export type {
    Tkey,
    Ttype,
    TclassName,
    Ttext,
    TvariantLine,
    TvariantOutLine,
    Tsizes,
    Tdisabled,
    TariaDisabled,
    TonClick,
    Trole,
}
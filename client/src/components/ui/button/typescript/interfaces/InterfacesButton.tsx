import type { 
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
} from "@/components/ui/button/typescript/types/TypesButton";

interface Ibutton {
    key?:Tkey | undefined;
    type?:Ttype | undefined;
    className?:TclassName | null;
    text?:Ttext | null;
    variantLine?:TvariantLine | null;
    variantOutLine?:TvariantOutLine | null;
    sizes?:Tsizes;
    disabled?:Tdisabled; 
    arialDisabled?:TariaDisabled;
    onClick?:TonClick | undefined;
}

interface IbuttonA extends Ibutton {
    role?:Trole | undefined;
    variant?:TvariantLine | null;
    onClick?: ( e:React.FormEvent ) => void | undefined;
}

export type {
    Ibutton,
    IbuttonA,
}
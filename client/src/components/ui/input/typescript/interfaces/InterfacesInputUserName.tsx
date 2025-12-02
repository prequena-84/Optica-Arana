import type { 
    TclassName,
    TclassInput,
    Tname,
    Tid,
    TplaceHolder,
    Tvalue,
    TonChange,
    Ttype,
    TarialLabel,
    TlabelText,
} from "@/components/ui/input/typescript/types/TypesInput";

export interface IinputUserName {
    name:Tname | undefined;
    id:Tid;
    type?:Ttype;
    className?:TclassName;
    classInput?:TclassInput;
    placeHolder?:TplaceHolder;
    arialLabel?:TarialLabel;
    value:Tvalue | undefined;
    onChange:TonChange;
    labelText?:TlabelText;
}
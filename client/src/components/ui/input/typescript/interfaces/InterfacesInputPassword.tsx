import type { 
    TclassName,
    TclassInput,
    Tname,
    Tid,
    TplaceHolder,
    Tvalue,
    TonChange,
    TlabelText,
} from "@/components/ui/input/typescript/types/TypesInput";

export interface IinputPassword {
    className?:TclassName | undefined;
    classInput?:TclassInput | undefined;
    name:Tname;
    id:Tid;
    placeHolder?:TplaceHolder;
    value:Tvalue | undefined;
    onChange:TonChange;
    labelText?:TlabelText | undefined;
}
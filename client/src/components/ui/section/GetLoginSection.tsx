import React from "react";
import LoginArticle from "@/components/ui/article/LoginArticle";

import type { IsectionLogin } from "@/components/ui/section/typescript/interfaces/InterfacesSectionGetLogIn";

const SectionGetLogin: React.FC<IsectionLogin> = ({
    className,
    onClick,
}) => {
    return (
        <section className={`relative min-h-0 ${className} overflow-hidden`}>
            <article className={`
                relative
                w-full h-full max-w-full max-h-full min-h-0
                box-decoration-clone
                bg-gradient-to-r from-logIn to-zinc-900 text-white
            `}>
                <LoginArticle onClick={onClick}/>
            </article>
        </section>
    )
};

export default SectionGetLogin;
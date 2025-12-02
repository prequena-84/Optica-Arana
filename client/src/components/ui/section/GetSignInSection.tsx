import React from "react";
import SingInArticle from "@/components/ui/article/SignInArticle";

import type { IsectionLogin } from "@/components/ui/section/typescript/interfaces/InterfacesSectionGetLogIn";

const SectionGetSignIn: React.FC<IsectionLogin> = ({
    className,
    onClick,
}) => {
    return (
        <section className={`relative min-h-0 ${className} overflow-hidden`}>
            <article className={`
                relative
                w-full h-full max-w-full max-h-full min-h-0
                box-decoration-clone
                bg-gradient-to-r from-zinc-900 to-singIn text-white
            `}>
                <SingInArticle onClick={onClick}/>
            </article>
        </section>
    );
};

export default SectionGetSignIn;

// En este componente me queda pendiente cambiar el color de los lente por el color del fondo del form e invertir el singIn y form pro sugerencia de Yubi ya que pareciera que esta duplicado.
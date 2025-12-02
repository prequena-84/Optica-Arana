import React from "react";

export default function LayoutUsuarios({ children }:{ children: React.ReactNode }) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};
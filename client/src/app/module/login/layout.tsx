import React from "react";

export default function LayoutLogin({ children }:{ children: React.ReactNode }) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};
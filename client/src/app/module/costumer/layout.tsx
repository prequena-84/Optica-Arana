import React from "react";

export default function LayoutCostumer({ children }:{ children: React.ReactNode }) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};
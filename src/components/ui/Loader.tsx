// src/components/ui/Loader.tsx
import React from "react";

export const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#A855F7]" />
        </div>
    );
};

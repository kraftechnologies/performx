import React from "react";
import logo from "/kraf.png";



const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <div
                className="relative w-[90px] h-[50px] bg-black rounded-3xl overflow-hidden border border-gray-800 border-[2px] animate-spin-slow"
                style={{ borderTop: '3px solid #18cb96' }}
            ></div>




            {/* Logo Image */}
            <img
                src={logo}
                alt="Logo"
                className="absolute inset-0 z-10 w-9 h-9 object-contain m-auto"
            />
        </div>
    );
};

export default Loader;

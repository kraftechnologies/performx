import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // 
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className={`${loading ? "hidden" : "block"} transition-opacity duration-500`}>
                {children}
            </div>
        </>
    );
};

export default Layout;

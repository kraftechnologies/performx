import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "../../components/ui/TopBar";
import { NavbarByAnima } from "../LandingPage/sections/NavbarByAnima";
import { RecurringFooter } from "../LandingPage/sections/FooterByAnima/RecurringFooter";
import ScrollToTop from "../../components/ui/ScrollToTop";

interface FeaturePageProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    activeTab: "collaboration" | "cloud" | "employee";
    navigateTo: {
        collaboration: string;
        cloud: string;
        employee: string;
    };
    children: React.ReactNode;
}

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const FeaturePage = ({
    title,
    imageSrc,
    imageAlt,
    activeTab,
    navigateTo,
    children,
}: FeaturePageProps) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0D0620] text-white min-h-screen relative">
            <ScrollToTop />
            <TopBar />
            <NavbarByAnima />

            <div className="min-h-screen bg-[#0D0620] text-white px-6 py-10 max-w-7xl mx-auto">
                {/* Back Arrow + Title */}
                <motion.div
                    className="flex items-center mb-12 gap-3"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="p-1 rounded hover:bg-white/10 transition"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        {title}
                    </h2>
                </motion.div>

                {/* Tabs with fade-in */}
                <motion.div
                    className="flex gap-4 mb-14 flex-wrap"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <button
                        onClick={() => navigate(navigateTo.collaboration)}
                        className={`px-6 py-2 rounded-lg ${activeTab === "collaboration"
                            ? "bg-[#8E24AA] text-white font-medium"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                            }`}
                    >
                        Collaboration Team
                    </button>
                    <button
                        onClick={() => navigate(navigateTo.cloud)}
                        className={`px-6 py-2 rounded-lg ${activeTab === "cloud"
                            ? "bg-[#8E24AA] text-white font-medium"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                            }`}
                    >
                        Cloud Storage
                    </button>
                    <button
                        onClick={() => navigate(navigateTo.employee)}
                        className={`px-6 py-2 rounded-lg ${activeTab === "employee"
                            ? "bg-[#8E24AA] text-white font-medium"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                            }`}
                    >
                        Employee Management
                    </button>
                </motion.div>

                {/* Image with reveal animation */}
                <motion.div
                    className="w-full h-[500px] overflow-hidden mb-10 rounded-2xl"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content with fade-up animation */}
                <motion.div
                    className="text-white/90 space-y-6 text-lg leading-relaxed"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    {children}
                </motion.div>
            </div>

            <RecurringFooter />
        </div>
    );
};

export default FeaturePage;

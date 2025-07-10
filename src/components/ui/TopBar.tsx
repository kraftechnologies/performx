import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white text-black text-[10px] md:text-xs shadow-sm">
            <div className="max-w-[1440px] mx-auto px-2 py-4 md:px-3 md:py-3">
                <div className="flex items-center justify-between flex-wrap gap-2 md:gap-0">
                    {/* Social Icons */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <a href="https://www.facebook.com/kraftechnologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="hover:text-gray-600 text-[13px] md:text-base" />
                        </a>
                        <a href="https://www.instagram.com/kraftechnologies/?igsh=MTZ2NncwM2xjOGU1NA%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="hover:text-gray-600 text-[13px] md:text-base" />
                        </a>
                        <a href="https://www.linkedin.com/company/kraftechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn className="hover:text-gray-600 text-[13px] md:text-base" />
                        </a>
                    </div>

                    {/* Email + Phone */}
                    <div className="flex items-center space-x-4 md:space-x-6 text-right text-sm md:text-sm">
                        <span>sales@kraftechnologies.com</span>
                        <span>|</span>
                        <span>+91 9670269295</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

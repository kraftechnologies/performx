import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white text-black text-xs md:text-sm shadow-sm">
            <div className="max-w-[1440px] mx-auto md:px-3 md:py-3">
                {/* Desktop View */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Social Icons - Left */}
                    <div className="flex items-center space-x-4">
                        <a href="https://www.facebook.com/kraftechnologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="hover:text-gray-600 text-base" />
                        </a>
                        <a href="https://www.instagram.com/kraftechnologies/?igsh=MTZ2NncwM2xjOGU1NA%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="hover:text-gray-600 text-base" />
                        </a>
                        <a href="https://www.linkedin.com/company/kraftechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn className="hover:text-gray-600 text-base" />
                        </a>
                    </div>

                    {/* Email + Phone - Right */}
                    <div className="flex items-center space-x-6 text-right">
                        <span>PerformX@kraftechnologies.com</span>
                        <span>+91 9670269295</span>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="flex flex-col items-center justify-center md:hidden space-y-1">
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="text-base" />
                        </a>
                        <a href="https://www.instagram.com/kraftechnologies?igsh=MTZ2NncwM2xjOGU1NA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-base" />
                        </a>
                        <a href="https://www.linkedin.com/company/kraftechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn className="text-base" />
                        </a>
                    </div>
                    <span>PerformX@kraftechnologies.com</span>
                    <span>+91 9670269295</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import {
    AwardIcon, UsersIcon, Building2Icon, RocketIcon, HeartIcon,
} from "lucide-react";
import { countries } from "./countries";

export const ConsultationSection = () => {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        country: "+91",
        phone: "",
        message: "",
        date: "",
        time: "",
    });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm(
            "service_t3o3jsv",
            "template_ov0kvfd",
            form.current,
            "fn8pMeEWhX2PnqQ0F"
        )
            .then(() => alert("Message sent successfully"))
            .catch(() => alert("Failed to send message, please try again."));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const features = [
        {
            icon: <AwardIcon className="text-purple-500 w-6 h-6" />,
            title: "3+ years of Excellence",
            description: "Providing cutting-edge solutions for businesses of all sizes",
        },
        {
            icon: <UsersIcon className="text-purple-500 w-6 h-6" />,
            title: "250+ Satisfied Clients",
            description: "Serving startups & enterprises with innovation and precision",
        },
        {
            icon: <Building2Icon className="text-purple-500 w-6 h-6" />,
            title: "80+ Expert Professionals",
            description: "A highly skilled team committed to driving success",
        },
        {
            icon: <RocketIcon className="text-purple-500 w-6 h-6" />,
            title: "Innovative and Scalable Solutions",
            description: "Empowering business with technology-driven growth",
        },
        {
            icon: <HeartIcon className="text-purple-500 w-6 h-6" />,
            title: "Client-Centric Approach",
            description: "Delivering customized solutions tailored to your unique needs",
        },
    ];

    return (
        <section className="w-full text-white py-6 px-4 sm:px-8  overflow-hidden">
            <motion.h2
                className="text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Book a Free Consultation
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Features */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold text-white">Trusted by Industry Leaders</h3>
                    <div className="space-y-5">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                            >
                                <div className="p-2 bg-white/10 rounded-md">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                                    <p className="text-sm text-white/70 max-w-md">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <Button className="bg-purple-600 hover:bg-purple-700">Book a call</Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">Email Us</Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">Whatsapp</Button>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-[#0A223E] p-6 sm:p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
                    <p className="text-sm text-white/70 mb-6">Get a response within 1 business hour.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Input name="fullName" placeholder="Full Name" onChange={handleChange} value={formData.fullName} required className="text-white" />
                        <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required className="text-white" />
                        <select name="country" onChange={handleChange} value={formData.country} className="bg-[#0A223E] border border-[#3B3B44] rounded-md text-white px-4 py-2">
                            {countries.map((c, idx) => (
                                <option key={idx} value={c.code}>{c.name} ({c.code})</option>
                            ))}
                        </select>
                        <Input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} required className="text-white" />
                        <Input name="date" type="date" onChange={handleChange} value={formData.date} required className="text-white" />
                        <Input name="time" type="time" onChange={handleChange} value={formData.time} required className="text-white" />
                    </div>

                    <Textarea name="message" placeholder="Project Brief" onChange={handleChange} value={formData.message} required className="text-white mb-4" />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Enquire Now</Button>
                </motion.form>
            </div>
        </section>
    );
};

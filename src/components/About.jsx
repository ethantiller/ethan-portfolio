import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HACKER_TEXT = "Hey! I'm Ethan";
const HACKER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";

function useHackerText(text, duration = 10000, interval = 50) {
    const [display, setDisplay] = useState("");
    useEffect(() => {
        let frame = 0;
        let revealed = 0;
        let timer;
        function animate() {
            let output = "";
            for (let i = 0; i < text.length; i++) {
                if (i < revealed) {
                    output += text[i];
                } else {
                    output += HACKER_CHARS[Math.floor(Math.random() * HACKER_CHARS.length)];
                }
            }
            setDisplay(output);
            frame++;
            if (revealed < text.length) {
                if (frame % Math.ceil(duration / interval / text.length) === 0) {
                    revealed++;
                }
                timer = setTimeout(animate, interval);
            } else {
                setDisplay(text);
            }
        }
        animate();
        return () => clearTimeout(timer);
    }, [text, duration, interval]);
    return display;
}

export default function About() {
        const hackerText = useHackerText(HACKER_TEXT, 1200, 30);
    return (
        <div id="about" className="w-full max-w-6xl mx-auto py-20 px-6">
            {/* Background with subtle gradient */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-purple-100/20 rounded-3xl"></div>

                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                    {/* Floating orbs for visual interest */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

                    <div className="relative p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Profile */}
                            <motion.div
                                className="flex flex-col items-center lg:items-start space-y-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Enhanced Profile Picture */}
                                <div className="relative">
                                    <motion.div
                                        className="relative w-64 h-64"
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {/* Glowing background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>

                                        {/* Main image container */}
                                        <motion.div
                                            className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src="/ethan-portfolio/ethan-headshot.png"
                                                alt="Ethan Tiller"
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
                                        </motion.div>

                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                className="space-y-8 text-center"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Main heading */}
                                <div className="space-y-4">
                                    <motion.h1
                                        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r via-orange-400 to-red-700 bg-clip-text text-transparent leading-tight font-mono tracking-wide"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        {hackerText}
                                    </motion.h1>
                                    <motion.div
                                        className="text-xl text-gray-600 font-medium"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                        Computer Science Student @ University of Cincinnati
                                    </motion.div>
                                </div>

                                {/* Description */}
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        I'm passionate about creating innovative solutions through code.
                                        With hands-on experience from various projects and internships,
                                        I've developed strong skills in software development and problem-solving.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        I thrive in collaborative environments and love tackling complex
                                        challenges that push the boundaries of what's possible with technology.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = document.getElementById('about').getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        };

        const aboutSection = document.getElementById('about');
        aboutSection?.addEventListener('mousemove', handleMouseMove);
        return () => aboutSection?.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div id="about" className="relative w-full max-w-6xl mx-auto py-20 px-6">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 opacity-20 blur-3xl"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
                {/* Main card with glassmorphism */}
                <motion.div
                    className="relative bg-white/40 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated mesh gradient overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-200 via-transparent to-red-200"></div>
                        <motion.div
                            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-300/40 to-red-300/40 blur-3xl"
                            animate={{
                                x: [mousePosition.x - 192, mousePosition.x - 192],
                                y: [mousePosition.y - 192, mousePosition.y - 192],
                            }}
                            transition={{ type: "spring", damping: 30, stiffness: 100 }}
                        />
                    </div>

                    <div className="relative p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Profile */}
                            <motion.div
                                className="flex flex-col items-center justify-center space-y-8"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Enhanced Profile Picture with rings */}
                                <div className="relative">
                                    {/* Animated rings */}
                                    <motion.div
                                        className="absolute inset-0 w-72 h-72 -left-4 -top-4"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300/40"></div>
                                    </motion.div>

                                    <motion.div
                                        className="absolute inset-0 w-72 h-72 -left-4 -top-4"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className="absolute inset-8 rounded-full border-2 border-dotted border-red-300/40"></div>
                                    </motion.div>

                                    <motion.div
                                        className="relative w-64 h-64 z-10"
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-orange-500/30 rounded-full blur-2xl animate-pulse"></div>

                                        {/* Image container with gradient border */}
                                        <motion.div
                                            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Gradient border */}
                                            <div className="absolute rounded-full">
                                                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                                    <img
                                                        src="/ethan-headshot.png"
                                                        alt="Ethan Tiller"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Shine effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                                                initial={{ x: '-100%', y: '-100%' }}
                                                whileHover={{ x: '100%', y: '100%' }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Floating particles */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                                            style={{
                                                left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                                                top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                                            }}
                                            animate={{
                                                y: [0, -20, 0],
                                                opacity: [0.3, 1, 0.3],
                                                scale: [1, 1.5, 1]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.5,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    ))}
                                </div>

                                <motion.div
                                    className="flex flex-wrap gap-2 justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {['React', 'Node.js', 'Python', 'C++'].map((tech, i) => (
                                        <motion.span
                                            key={tech}
                                            className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-50 rounded-full text-sm font-semibold text-gray-700 border border-orange-200/50"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Right Column - Content */}
                            <motion.div
                                className="flex flex-col justify-center space-y-8"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Main heading with enhanced styling */}
                                <div className="space-y-4">
                                    <motion.h1
                                        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 bg-clip-text text-transparent leading-tight font-mono tracking-wide"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        {hackerText}
                                    </motion.h1>

                                    <motion.div
                                        className="relative inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                        <div className="absolute"></div>
                                        <div className="text-xl text-gray-700 font-semibold px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg">
                                            Computer Science Student @ University of Cincinnati
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Description with enhanced styling */}
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-600 rounded-full"></div>
                                        <p className="text-lg text-gray-700 leading-relaxed pl-6">
                                            I'm passionate about creating innovative solutions through code.
                                            With hands-on experience from various projects and internships,
                                            I've developed strong skills in software development and problem-solving.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-600 rounded-full"></div>
                                        <p className="text-lg text-gray-700 leading-relaxed pl-6">
                                            I thrive in collaborative environments and love tackling complex
                                            challenges that push the boundaries of what's possible with technology.
                                        </p>
                                    </div>
                                </motion.div>


                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

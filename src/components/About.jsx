import React from "react";

export default function About() {
    return (
        <div
            id="home"
            className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-medium"
            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="flex flex-col items-center pt-10">
                <div className="w-full max-w-4xl text-center flex flex-col justify-between items-center gap-10">
                    {/* Top Div for Home */}
                    <div className="w-full flex flex-col gap-6 items-center justify-center">
                        <div>
                            <img
                                src="/ethan-headshot.png"
                                alt="Ethan Tiller"
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl shadow-black/30"
                            />
                        </div>
                        <div className="text-center pt-4 sm:pt-6">
                            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-zinc-900 to-red-600 text-transparent bg-clip-text">
                                Hey! I'm Ethan,
                            </span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
                                {" a Computer Science student "}
                            </span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                {"@ "}
                            </span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
                                the
                            </span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-zinc-900 to-red-600 text-transparent bg-clip-text">
                                {" University of Cincinnati"}
                            </span>
                        </div>
                        {/* Bottom Div for About */}
                        <div className="w-full flex flex-col gap-8 items-center justify-center pt-8">
                            <p id="about" className="text-zinc-900 text-base sm:text-lg leading-relaxed max-w-prose px-2">
                                I specialize in Software Development for Web Applications.  I am currently an AI Software Engineering Intern @ GE Appliances.  I have 2 years experience in Software Development through Companies, Events e.g. Hackathons, and Personal Projects
                            </p>

                            {/* Download Resume Button */}
                            <a
                                href="/Tiller_Ethan_Resume2025-2026.pdf"
                                download="Tiller_Ethan_Resume2025-2026.pdf"
                                aria-label="Download Ethan Tiller resume"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 text-base sm:text-lg md:text-xl to-red-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 w-full sm:w-auto"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>


                    <div className="w-full flex justify-center mt-8">
                        <div className="w-full max-w-4xl relative overflow-hidden px-4 sm:px-6 py-8 bg-white/0">
                            {/* Ensure the text is above the background image */}
                            <div className="relative z-10 text-center">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 leading-tight">About Me</h1>
                                <div className="mx-auto max-w-2xl pt-8 sm:pt-12 text-zinc-900 text-base sm:text-lg leading-relaxed px-2">
                                    I am a Full-Stack Software Developer and Computer Science Student located in Cincinnati, Ohio.
                                </div>
                            </div>

                            {/* Decorative image placed behind and slightly inset from the bottom-right */}
                            <img
                                src="/bloc.png"
                                alt="Bloc Logo"
                                className="pointer-events-none absolute bottom-0 right-0 hidden md:block w-40 h-52 lg:w-48 lg:h-60 object-contain opacity-40 -translate-x-58 -translate-y-15"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

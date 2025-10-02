import React from "react";

export default function About() {
    return (
        <div
            id="home"
            className="w-full max-w-full mx-auto py-20 px-6 font-medium"
            style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
        >
            <div className="flex items-center justify-center">
                <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/40 shadow-md px-8 py-8 text-center flex flex-col justify-between items-center">
                    {/* Top Div for Home */}
                    <div className="w-auto max-w-140 flex flex-col gap-6 items-center justify-center mb-6">
                        <div>
                            <img
                                src="/ethan-headshot.png"
                                alt="Ethan Tiller"
                                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl shadow-black/30"
                            />
                        </div>
                        <div className="text-center pt-7">
                            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-zinc-900 to-red-600 text-transparent bg-clip-text">
                                Hey! I'm Ethan,
                            </span>
                            <span className="text-2xl md:text-3xl font-semibold text-zinc-900">
                                {" a Computer Science student "}
                            </span>
                            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                                {"@ "}
                            </span>
                            <span className="text-2xl md:text-3xl font-semibold text-zinc-900">
                                the
                            </span>
                            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-zinc-900 to-red-600 text-transparent bg-clip-text">
                                {" University of Cincinnati"}
                            </span>
                        </div>
                        {/* Bottom Div for About */}
                        <div className="w-auto max-w-160 flex flex-col gap-12 items-center justify-center mb-6 pt-8 ">
                            <p className="text-zinc-900 text-base md:text-lg leading-relaxed">
                                I specialize in Software Development for Web Applications.  I am currently an AI Software Engineering Intern @ GE Appliances.  I have 2 years experience in Software Development through Companies, Events e.g. Hackathons, and Personal Projects
                            </p>

                            {/* Download Resume Button */}
                            <a
                                href="/resume.pdf"
                                download="Tiller_Ethan_Resume2025-2026.pdf"
                                aria-label="Download Ethan Tiller resume"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400
                            text-lg md:text-xl to-red-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>


                    <div
                        id="about"
                        className="w-full pt-15">

                        <span className="text-6xl font-semibold text-zinc-900">
                            About Me
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

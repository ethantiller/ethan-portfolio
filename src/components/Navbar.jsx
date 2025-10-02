import { useEffect, useState } from "react";
import NavbarButton from "./navbar_components/NavbarButtons";
import Socials from "./navbar_components/Socials";
import { liquidGlass } from "../styles";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full px-4 sm:px-6 py-3">
            <div
                className="mx-auto flex w-full max-w-4xl flex-col gap-3 md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 text-sm font-medium border border-white/10 backdrop-blur-lg shadow-md transition-all duration-300 ease-out"
                style={liquidGlass}
            >
                <div className="flex w-full items-center justify-between gap-4">
                    <Socials />
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/20 text-zinc-900 shadow-sm transition hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-orange-300 md:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-controls="primary-navigation"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {isOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div
                    id="primary-navigation"
                    className={`${isOpen ? "flex" : "hidden"} flex-col gap-2 md:flex md:flex-row md:items-center md:gap-6`}
                >
                    <NavbarButton onClick={() => handleScroll("home")}>Home</NavbarButton>
                    <NavbarButton onClick={() => handleScroll("about")}>About</NavbarButton>
                    <NavbarButton onClick={() => handleScroll("qualifications")}>Qualifications</NavbarButton>
                    <NavbarButton onClick={() => handleScroll("projects")}>Projects</NavbarButton>
                    <NavbarButton onClick={() => handleScroll("contact")}>Contact</NavbarButton>
                </div>
            </div>
        </nav>
    );
}

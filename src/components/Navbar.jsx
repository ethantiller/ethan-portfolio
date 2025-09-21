import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import NavbarButton from "./navbar_components/NavbarButtons";

export default function Navbar() {
    return (
        <nav className="w-full p-3 bg-primary flex justify-between items-center shadow-md">
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/ethantiller"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                    aria-label="GitHub"
                >
                    <BsGithub size={35} color="black" />
                </a>
                <a
                    href="https://linkedin.com/in/ethan-tiller-ba5475225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                    aria-label="LinkedIn"
                >
                    <LiaLinkedin size={40} color="black" />
                </a>
            </div>

            <div className="flex gap-6">
                <NavbarButton onClick={() => window.location.href = "#home"}>Home</NavbarButton>
                <NavbarButton onClick={() => window.location.href = "#about"}>About</NavbarButton>
                <NavbarButton onClick={() => window.location.href = "#qualifications"}>Qualifications</NavbarButton>
                <NavbarButton onClick={() => window.location.href = "#projects"}>Projects</NavbarButton>
                <NavbarButton onClick={() => window.location.href = "#contact"}>Contact</NavbarButton>
            </div>
        </nav>
    );
}

import NavbarButton from "./navbar_components/NavbarButtons";
import Socials from "./navbar_components/Socials";
import { liquidGlass } from "../styles";

export default function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="w-full px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-lg shadow-md transition-all duration-300 ease-out flex flex-row items-center justify-between fixed top-0 left-0 z-50"
            style={liquidGlass}
        >
            <Socials />
            <div className="flex flex-row gap-6 items-center">
                <NavbarButton onClick={() => handleScroll("home")}>Home</NavbarButton>
                <NavbarButton onClick={() => handleScroll("about")}>About</NavbarButton>
                <NavbarButton onClick={() => handleScroll("qualifications")}>Qualifications</NavbarButton>
                <NavbarButton onClick={() => handleScroll("projects")}>Projects</NavbarButton>
                <NavbarButton onClick={() => handleScroll("contact")}>Contact</NavbarButton>
            </div>
        </nav>
    );
}

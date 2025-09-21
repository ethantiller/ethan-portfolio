import NavbarButton from "./navbar_components/NavbarButtons";
import Socials from "./navbar_components/Socials";

export default function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="w-full p-3 bg-primary flex justify-between items-center shadow-md">
            <Socials />

            <div className="flex gap-6">
                <NavbarButton onClick={() => handleScroll("home")}>Home</NavbarButton>
                <NavbarButton onClick={() => handleScroll("about")}>About</NavbarButton>
                <NavbarButton onClick={() => handleScroll("qualifications")}>Qualifications</NavbarButton>
                <NavbarButton onClick={() => handleScroll("projects")}>Projects</NavbarButton>
                <NavbarButton onClick={() => handleScroll("contact")}>Contact</NavbarButton>
            </div>
        </nav>
    );
}

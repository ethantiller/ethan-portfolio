import Qualifications from "./components/Qualifications";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  return (
    <>
      {/* Navbar Component that includes socials and buttons to different parts of the page.*/}
      <Navbar />

      {/* About Section, includes my name and my message to cause*/}
      <About />

      {/* Qualifications Component, includes a vertical timeline of my experience.*/}
      <Qualifications />
    </>
  );
}

import Qualifications from "./components/Qualifications";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      {/* Navbar Component that includes socials and buttons to different parts of the page.*/}
      <Navbar />

      {/* Qualifications Component, includes a vertical timeline of my experience.*/}
      <Qualifications />
    </>
  );
}

import Socials from "./navbar_components/Socials";
export default function Contact() {
    return (
        <div id="contact" className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-medium" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
            <div className="flex flex-col items-center justify-center gap-8 pt-10 w-full max-w-2xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-black text-center">Reach Out</h2>
                <p className="text-zinc-900 text-base md:text-lg leading-relaxed mb-2 text-center">I am available for Summer of 2026 Internship. Connect with me through email or socials below.</p>
                <div className="flex items-center gap-3 mt-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm0 0l8 8 8-8" /></svg>
                    <a href="mailto:tiller.ethan05@gmail.com" className="text-lg md:text-xl font-semibold text-zinc-900 hover:underline focus:outline-none">tiller.ethan05@gmail.com</a>
                </div>
                <div className="mt-6">
                    <Socials />
                </div>
            </div>
        </div>
    );
}

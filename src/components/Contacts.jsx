export default function Contact() {
    return (
        <div id="contact" className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 font-medium" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
            <div className="flex flex-col md:flex-row items-start justify-center gap-12 pt-10 w-full max-w-4xl mx-auto">
                <div className="flex-1 flex flex-col gap-6 items-start justify-start w-full">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-black">Reach Out</h2>
                    <p className="text-zinc-900 text-base md:text-lg leading-relaxed mb-2">I am available for Summer of 2026 Internship, connect with me through email.</p>
                    <div className="flex items-center gap-3 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm0 0l8 8 8-8" /></svg>
                        <a href="mailto:tiller.ethan05@gmail.com" className="text-lg md:text-xl font-semibold text-zinc-900 hover:underline focus:outline-none">tiller.ethan05@gmail.com</a>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <form className="p-0 flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-zinc-700 font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 placeholder-zinc-300 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" required placeholder="Type your name..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-zinc-700 font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 placeholder-zinc-300 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" required placeholder="Type your email..." />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-zinc-700 font-medium mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 placeholder-zinc-300 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" required placeholder="Type your message..." />
                        </div>
                        <button type="submit" className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

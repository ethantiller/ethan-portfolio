import TimelineItem from "./timeline_components/Timeline";
import { TIMELINE } from "./timeline_components/TimelineItems";

export default function Qualifications() {
    return (
        <div id="qualifications" className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
            <div className="relative">
                {/* Gradient overlay: red-100 to orange-100 */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-red-300 via-transparent to-orange-300 rounded-3xl opacity-30 blur-2xl pointer-events-none"></div>

                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                    {/* Floating orbs for visual interest */}
                    <div className="hidden md:block absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
                    <div className="hidden md:block absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-2xl"></div>

                    <div className="relative p-6 sm:p-8 md:p-12">
                        <div className="flex flex-col items-center mb-8 w-full gap-8" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
                            <div className="w-full flex justify-center mb-3">
                                <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">Qualifications</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-center text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-orange-400 to-red-700 bg-clip-text text-transparent">
                                    My Computer Science Journey To Now
                                </span>
                            </div>
                            <div className="mb-6 sm:mb-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base text-zinc-700">
                                <span className="flex items-center text-lg sm:text-xl gap-2">🎓 <span>Education</span></span>
                                <span className="flex items-center text-lg sm:text-xl gap-2">💼 <span>Experience</span></span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <ol className="relative w-full max-w-5xl mx-auto space-y-10 md:space-y-16">
                            {/* Timeline vertical line: only between first and last photo nodes */}
                            <div
                                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-zinc-400"
                                style={{
                                    top: `calc(3rem + 0.5rem)`,
                                    bottom: `calc(3rem + 0.5rem)`,
                                    height: 'auto',
                                }}
                            />

                            {TIMELINE.map((item, idx) => (
                                <TimelineItem key={item.id} item={item} index={idx} />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

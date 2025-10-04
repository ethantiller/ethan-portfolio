import TimelineItem from "./timeline_components/Timeline";
import { TIMELINE } from "./timeline_components/TimelineItems";

export default function Qualifications() {
    return (
        <div id="qualifications" className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
            <div>
                <div className="p-4 sm:p-6 md:p-8 relative">
                    {/* main content above the decorative image */}
                    <div className="relative z-10">
                        <div className="flex flex-col items-center mb-8 w-full gap-8" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
                            <div className="w-full flex justify-center mb-3">
                                <div className="flex items-center gap-3 relative justify-center">
                                    {/* Blob image behind text */}
                                    <img
                                        src={"/bloc.png"}
                                        alt="decorative blob"
                                        className="absolute left-1/2 top-1/2 w-40 h-40 sm:w-30 sm:h-56 object-contain opacity-40 -translate-x-53 -translate-y-16 z-0"
                                    />
                                    <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">Qualifications</p>
                                </div>
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

import TimelineItem from "./timeline_components/Timeline";
import { TIMELINE } from "./timeline_components/TimelineItems";

export default function Qualifications() {
    return (
        <div id="qualifications" className="w-full max-w-6xl mx-auto py-20 px-6">
            <div className="relative">
                {/* Gradient overlay: red-100 to orange-100 */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-300 via-transparent to-orange-300 rounded-3xl opacity-30 blur-2xl pointer-events-none"></div>

                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                    {/* Floating orbs for visual interest */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-2xl"></div>

                    <div className="relative p-12">
                        <div className="flex flex-col items-center mb-8 w-full gap-17" style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
                            <div className="w-full flex justify-center mb-4">
                                <p className="text-center text-7xl font-bold">Qualifications</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-center text-sm font-bold bg-gradient-to-r from-orange-400 to-red-700 bg-clip-text text-transparent">
                                    My Computer Science Journey To Now
                                </span>
                            </div>
                            <div className="mb-10 flex items-center gap-6 text-sm text-zinc-700">
                                <span className="flex items-center text-xl gap-2">🎓 <span>Education</span></span>
                                <span className="flex items-center text-xl gap-2">💼 <span>Experience</span></span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <ol className="relative w-full max-w-5xl">
                            {/* Timeline vertical line: only between first and last photo nodes */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-zinc-400"
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

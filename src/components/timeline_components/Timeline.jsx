
import TimelinePhoto from "./TimelinePhoto";

export default function TimelineItem({ item, index }) {
    const isLeft = index % 2 === 0;

    const CardText = () => (
        <>
            <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1">{item.title}</h3>
            <p className="text-sm md:text-base text-zinc-700 mb-1">{item.company}</p>
            <p className="text-xs md:text-sm text-zinc-500">📅 {item.date}</p>
        </>
    );

    return (
        <li className="relative flex flex-col md:flex-row w-full md:min-h-[160px] py-4 md:py-10">
            {/* Mobile layout */}
            <div className="md:hidden flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/80 shadow-lg p-5">
                <div className="flex items-center gap-4">
                    <TimelinePhoto logo={item.logo} alt={item.company} className="shrink-0" />
                    <div className="text-left">
                        <CardText />
                    </div>
                </div>
            </div>

            {/* Desktop line and node */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-white to-purple-200 h-full z-0" />

            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <TimelinePhoto logo={item.logo} alt={item.company} />
            </div>

            {/* Desktop alternating cards */}
            <div className="hidden md:flex w-full z-20">
                {isLeft ? (
                    <>
                        <div className="w-1/2 flex justify-end pr-12 items-center">
                            <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl p-6 max-w-sm text-left hover:scale-[1.03] transition-transform duration-300">
                                <CardText />
                            </div>
                        </div>
                        <div className="w-1/2" />
                    </>
                ) : (
                    <>
                        <div className="w-1/2" />
                        <div className="w-1/2 flex justify-start pl-12 items-center">
                            <div className="bg-white/45 backdrop-blur-xl rounded-2xl border border-white/25 shadow-xl p-6 max-w-sm text-left hover:scale-[1.03] transition-transform duration-300">
                                <CardText />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </li>
    );
}

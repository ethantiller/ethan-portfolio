
import TimelinePhoto from "./TimelinePhoto";

export default function TimelineItem({ item, index }) {
    const isLeft = index % 2 === 0;
    return (
        <li className="relative flex w-full min-h-[120px]">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-white to-purple-200 h-full z-0" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <TimelinePhoto logo={item.logo} alt={item.company} />
            </div>

            {/* Card content, alternate sides to make it easier to read */}
            {isLeft ? (
                <>
                    <div className="w-1/2 flex justify-end pr-12 items-center z-20">
                        <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl p-6 max-w-md text-left hover:scale-[1.03] transition-transform duration-300">
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">{item.title}</h3>
                            <p className="text-base text-zinc-700 mb-1">{item.company}</p>
                            <p className="text-xs text-zinc-500">📅 {item.date}</p>
                        </div>
                    </div>
                    <div className="w-1/2" />
                </>
            ) : (
                <>
                    <div className="w-1/2" />
                    <div className="w-1/2 flex justify-start pl-12 items-center z-20">
                        <div className="bg-white/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 max-w-md text-left hover:scale-[1.03] transition-transform duration-300">
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">{item.title}</h3>
                            <p className="text-base text-zinc-700 mb-1">{item.company}</p>
                            <p className="text-xs text-zinc-500">📅 {item.date}</p>
                        </div>
                    </div>
                </>
            )}
        </li>
    );
}

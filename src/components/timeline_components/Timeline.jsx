import clsx from "clsx";
import TimelinePhoto from "./TimelinePhoto";

export default function TimelineItem({ item, index }) {
    const isLeft = index % 2 === 0;

    return (
        <li className="relative flex w-full items-center mb-12">
            {/* Left column */}
            <div className={clsx("w-1/2 flex justify-end px-6", isLeft ? "text-right" : "")}>
                {isLeft && (
                    <div className="inline-block text-left">
                        <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                        <p className="text-sm text-zinc-600">{item.company}</p>
                        <p className="mt-1 text-xs text-zinc-500">📅 {item.date}</p>
                    </div>
                )}
            </div>

            <TimelinePhoto logo={item.logo} alt={item.company} />

            {/* Right column */}
            <div className={clsx("w-1/2 flex justify-start px-6", !isLeft ? "text-left" : "")}>
                {!isLeft && (
                    <div className="inline-block text-left">
                        <h3 className="text-sm font-semibold text-zinc-900">{item.title}</h3>
                        <p className="text-sm text-zinc-600">{item.company}</p>
                        <p className="mt-1 text-xs text-zinc-500">📅 {item.date}</p>
                    </div>
                )}
            </div>
        </li>
    );
}

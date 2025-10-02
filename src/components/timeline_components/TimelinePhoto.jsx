export default function TimelinePhoto({ logo, alt = "", className = "" }) {
    return (
        <div
            className={`relative flex items-center justify-center rounded-full bg-white/80 ring-4 ring-blue-200 shadow-xl z-10 h-14 w-14 sm:h-16 sm:w-16 ${className}`.trim()}
        >
            <img src={logo} alt={alt} className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover" />
        </div>
    );
}

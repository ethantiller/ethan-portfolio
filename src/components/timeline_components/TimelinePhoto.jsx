export default function TimelinePhoto({ logo, alt = "" }) {
    return (
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/80 ring-4 ring-blue-200 shadow-xl z-10">
            <img src={logo} alt={alt} className="h-14 w-14 rounded-full object-cover" />
        </div>
    );
}

export default function TimelinePhoto({ logo, alt = "" }) {
    return (
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white ring-2 ring-zinc-300 shadow-md z-10">
            <img src={logo} alt={alt} className="h-13 w-13 rounded-full" />
        </div>
    );
}

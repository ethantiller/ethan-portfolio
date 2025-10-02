import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Socials() {
    return (
        <div className="flex items-center gap-4">
            {/* GitHub Button */}
            <button
                className={`
                        group
                        relative
                        bg-transparent
                        border-none
                        text-black
                        cursor-pointer
                        p-0
                        transition-colors
                        duration-200
                        hover:text-black
                        focus:outline-none
                        focus:text-black
                        font-semibold
                    `}
                style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                aria-label="GitHub"
                onClick={() => window.open("https://github.com/ethantiller", "_blank", "noopener,noreferrer")}
            >
                <span className="relative flex flex-col items-center">
                    <BsGithub size={35} color="black" />
                    <span
                        className="
                                absolute
                                left-1/2
                                -translate-x-1/2
                                bottom-[-8px]
                                h-1
                                w-full
                                scale-x-0
                                rounded-full
                                bg-gradient-to-r
                                from-orange-400
                                to-red-700
                                transition-transform
                                duration-300
                                ease-out
                                origin-center
                                group-hover:scale-x-100
                            "
                    />
                </span>
            </button>
            {/* LinkedIn Button */}
            <button
                className={`
                        group
                        relative
                        bg-transparent
                        border-none
                        text-black
                        cursor-pointer
                        p-0
                        transition-colors
                        duration-200
                        hover:text-black
                        focus:outline-none
                        focus:text-black
                        font-semibold
                    `}
                style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                aria-label="LinkedIn"
                onClick={() => window.open("https://linkedin.com/in/ethan-tiller-ba5475225", "_blank", "noopener,noreferrer")}
            >
                <span className="relative flex flex-col items-center">
                    <LiaLinkedin size={40} color="black" />
                    <span
                        className="
                                absolute
                                left-1/2
                                -translate-x-1/2
                                bottom-[-8px]
                                h-1
                                w-full
                                scale-x-0
                                rounded-full
                                bg-gradient-to-r
                                from-orange-400
                                to-red-700
                                transition-transform
                                duration-300
                                ease-out
                                origin-center
                                group-hover:scale-x-100
                            "
                    />
                </span>
            </button>
        </div>
    );
}

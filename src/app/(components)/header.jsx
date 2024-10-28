import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-black flex justify-between items-center p-2 space-x-2">
            {/* Left Side */}
            <div className="flex items-center space-x-2">
                <button>
                    <Image
                        width={20}
                        height={20}
                        src="/icons/hamburger.png"
                        alt="Hamburger"
                    />
                </button>
                <Link href="/" >
                    <Image
                        width={80}
                        height={80}
                        src="/logo/Logo 2.png"
                        alt="Logo"
                        className="w-20 h-20 md:w-24 md:h-24 cursor-pointer"
                    />
                </Link>
            </div>

            {/* Search Side */}
            <div className="hidden md:flex flex-grow justify-center items-center mx-4">
                <div className="border border-baseGray rounded-full flex items-center w-3/4 px-1 py-1">
                    <input
                        className="placeholder:text-baseGray text-white bg-transparent focus:outline-none flex-grow"
                        placeholder="Type something"
                    />
                    <button className="bg-white rounded-l-full px-4 py-2 border-r border-baseGray">
                        <Image
                            width={18}
                            height={18}
                            src="/icons/search.png"
                            alt="Search"
                        />
                    </button>
                    <button className="bg-white rounded-r-full px-4 py-2">
                        <Image
                            width={18}
                            height={18}
                            src="/icons/microphone-black-shape.png"
                            alt="Microphone"
                        />
                    </button>
                </div>
            </div>

            {/* Profile Side */}
            <div className="flex items-center space-x-2">
                <button className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                    <Image
                        width={20}
                        height={20}
                        src="/icons/join.png"
                        alt="Join"
                    />
                </button>
                <div className="hidden sm:flex space-x-1 items-center">
                    <button className="bg-white rounded-full p-2">
                        <Image
                            width={18}
                            height={18}
                            src="/icons/video-camera.png"
                            alt="Video"
                        />
                    </button>
                    <button className="bg-white rounded-full p-2">
                        <Image
                            width={18}
                            height={18}
                            src="/icons/bell.png"
                            alt="Bell"
                        />
                    </button>
                </div>
                <button className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                    <Image
                        width={20}
                        height={20}
                        src="/icons/user.png"
                        alt="User"
                    />
                </button>
            </div>
        </div>
    );
}

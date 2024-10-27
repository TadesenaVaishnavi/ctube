import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-black flex justify-between px-2">
            {/* Left Side */}
            <div className="flex justify-center items-center">
                <button>
                    <Image
                        width={20}
                        height={20}
                        src="/icons/hamburger.png"
                        alt="Hamburger"
                    />
                </button>
                <Image
                    width={100}
                    height={100}
                    src="/logo/Logo 2.png"
                    alt="Logo"
                />
            </div>

            {/* Search Side */}
            <div className="flex justify-center items-center ">
                <div className="border-baseGray border-2 rounded-full px-1 py-1 flex gap-1 justify-between">
                    <input
                        className="placeholder:text-baseGray text-white bg-transparent focus:outline-none px-3"
                        placeholder="Type something"
                    />
                    <div>
                        <button className="bg-white rounded-l-full  px-6 py-2 border-r-2 border-baseGray">
                            <Image
                                width={18}
                                height={18}
                                src="/icons/search.png"
                                alt="Hamburger"
                            />
                        </button>
                        <button className="bg-white rounded-r-full  px-6 py-2">
                            <Image
                                width={18}
                                height={18}
                                src="/icons/microphone-black-shape.png"
                                alt="Hamburger"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Side */}
            <div className="flex justify-center items-center ">
                <div className="flex justify-center items-center gap-2 p-1 rounded-full border-2 border-baseGray">
                    <button className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                        <Image
                            width={20}
                            height={20}
                            src="/icons/join.png"
                            alt="Hamburger"
                        />
                    </button>

                    <div>
                        <button className="bg-white rounded-l-full px-6 p-2 border-r-2 border-baseGray">
                            <Image
                                width={18}
                                height={18}
                                src="/icons/video-camera.png"
                                alt="Hamburger"
                            />
                        </button>
                        <button className="bg-white rounded-r-full px-6 p-2">
                            <Image
                                width={18}
                                height={18}
                                src="/icons/bell.png"
                                alt="Hamburger"
                            />
                        </button>
                    </div>

                    <button className="bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center">
                        <Image
                            width={20}
                            height={20}
                            src="/icons/user.png"
                            alt="Hamburger"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
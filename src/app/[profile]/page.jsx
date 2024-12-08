import Image from "next/image";

export default function Profile() {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">

            {/* CARD */}
            <div className="bg-baseDark pt-10 pb-10 w-[400px] flex flex-col gap-2 justify-center items-center rounded-xl">

                {/* PROFILE PICTURE*/}
                <div className=" bg-yellow-400 h-[80px] w-[80px] rounded-full">

                </div>

                {/* PROFILE PICTURE*/}
                <div className="flex flex-col justify-center items-center  text-white">
                    <div className="font-bold  text-3xl">
                        John David
                    </div>
                    <div className="text-[10px] ">
                        Joined • 18/11/2023
                    </div>
                </div>

                {/* Input Tabs*/}
                <div className="mt-10 mb-10 flex flex-col justify-center gap-2 items-center  text-black ">
                    <div className="flex items-center relative">
                        <input type="text" placeholder="@Username"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" value="@johndavid343_2" contentEditable="false" />
                        <button className="absolute right-4 scale-75">
                            <Image
                                width={20}
                                height={20}
                                alt="edit"
                                src="/icons/edit.png"
                            />
                        </button>
                    </div>

                    <div className="flex items-center relative">
                        <input type="email" placeholder="@Username"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" value="johndavid832@gmail.com" contentEditable="false" />
                    </div>

                    <div className="flex items-center relative">
                        <input type="password" placeholder="Enter current password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                        <button className="absolute right-4 scale-75">
                            <Image
                                width={20}
                                height={20}
                                alt="edit"
                                src="/icons/edit.png"
                            />
                        </button>
                    </div>

                    <div className="flex items-center relative">
                        <input type="password" placeholder="Enter new password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                        <button className="absolute right-4 scale-75">
                            <Image
                                width={20}
                                height={20}
                                alt="edit"
                                src="/icons/edit.png"
                            />
                        </button>
                    </div>

                    <div className="flex items-center relative">
                        <input type="password" placeholder="Confirm new password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                        <button className="absolute right-4 scale-75">
                            <Image
                                width={20}
                                height={20}
                                alt="edit"
                                src="/icons/edit.png"
                            />
                        </button>
                    </div>
                </div>

                {/* PROFILE PICTURE*/}
                <div className="flex flex-col justify-center items-center text-white">
                    <button className="bg-white rounded-xl w-[80px] h-[35px]  text-black ">Save</button>
                </div>

            </div>
        </div>
    );
}
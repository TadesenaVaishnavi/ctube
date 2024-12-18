import Link from "next/link";

export default function SignUp() {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">

            <div className="bg-baseDark pt-10 pb-10 w-[400px] flex flex-col justify-center items-center rounded-xl">
                <div className="font-semibold text-xl text-center text-white ">
                    Create your account on<br /> C-Tube Today!
                </div>

                {/* Input Tabs*/}
                <div className="mt-4 mb-4 flex flex-col justify-center gap-2 items-center  text-black ">
                    <div className="flex items-center relative">
                        <input type="text" placeholder="Username"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                    <div className="flex items-center relative">
                        <input type="email" placeholder="Email"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                    <div className="flex items-center relative">
                        <input type="password" placeholder="Password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                    <div className="flex items-center relative">
                        <input type="password" placeholder="Confirm Password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                </div>

                <div className=" text-white flex flex-col justify-center gap-3 items-center">
                    <button className="px-4 py-2 rounded-full bg-white text-xs  text-black">Sign up</button>
                    <div className="flex text-xs gap-1">
                        <p>Already have an account?</p>
                        <Link href="/login">
                            <button className="animate-pulse">Log In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
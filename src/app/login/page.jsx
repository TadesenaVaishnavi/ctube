import Link from "next/link";

export default function SignUp() {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">

            <div className="bg-baseDark pt-10 pb-10 w-[400px] flex flex-col justify-center items-center rounded-xl">
                <div className="font-semibold text-xl text-center text-white ">
                    Log into your account!
                </div>

                {/* Input Tabs*/}
                <div className="mt-4 mb-4 flex flex-col justify-center gap-2 items-center  text-black ">
                    <div className="flex items-center relative">
                        <input type="email" placeholder="Email"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                    <div className="flex items-center relative">
                        <input type="password" placeholder="Password"
                            className="h-9 px-4 py-1 rounded-xl placeholder:text-[12px] text-[15px] text-start w-[300px]" />
                    </div>
                </div>

                <div className=" text-white flex flex-col justify-center gap-3 items-center">
                    <button className="px-4 py-2 rounded-full bg-white text-xs  text-black">Login</button>
                    <div className="flex text-xs gap-1">
                        <p>Don&apos;t have an account?</p>
                        <Link href="/signup">
                        <button className="animate-pulse">Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
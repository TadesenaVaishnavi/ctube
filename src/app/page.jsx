import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-baseDark h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-white text-7xl animate-pulse ">
        Welcome To, <span className="font-semibold">C-Tube</span>
      </div>
      <div className="flex gap-5">
        <Link href="/signup">
          <button className="bg-white rounded-md px-4 py-2 hover:scale-110">Sign up</button>
        </Link>
        <Link href="/login">
          <button className="bg-white rounded-md px-4 py-2 hover:scale-110">Log In</button>
        </Link>

      </div>
    </div>
  );
}

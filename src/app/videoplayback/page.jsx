import Image from 'next/image';
import MainHeader from "@/app/(components)/header.jsx";
export default function VideoPlaybackTemplate() {
    return (
        <div className="bg-black">
            <MainHeader />

            {/* Below Header Base */}
            <div className="h-screen grid sm:grid-cols-1 md:grid-cols-2 ">
                {/* Grid 1 */}
                <div className="bg-yellow-500 sm:w-full md:w-5/6">
                    <div>
                        {/* Video Player */}
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="bg-yellow-800 sm:w-full md:w-1/2">
                    <div>
                        {/* Video Player */}

                    </div>
                </div>
            </div>
        </div>
    );
}

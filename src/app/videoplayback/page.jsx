import Image from 'next/image';
import MainHeader from "@/app/(components)/header.jsx";

export default function VideoPlaybackTemplate() {
    return (
        <div className="bg-black text-white">
            <MainHeader />

            {/* Below Header Base */}
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8">
                {/* Main Video Section */}
                <div className="col-span-2 flex flex-col space-y-4 order-1 md:order-1">
                    <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                        <div className="relative aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Video Title and Details */}
                    <div className="space-y-2 flex flex-col p-2 ">
                        <h1 className="text-xl font-semibold">Title of the video which was uploaded on this platform</h1>
                        <hr />
                        <div className="flex gap-5 justify-between items-center ">
                            <div className="flex gap-5 items-center">
                                <div className="flex gap-5">
                                    <div className="w-[60px] h-[60px] bg-yellow-400 rounded-full">
                                        {/* Profile Picture */}
                                    </div>
                                    <div>
                                        <div className="text-xl text-bold">Channel Name</div>
                                        <div className="text-xs text-gray-400">1 Million Subscribers</div>
                                    </div>
                                </div>
                                <button className=" bg-white px-5 py-2 text-black rounded-full">Subscribe</button>
                            </div>
                            <button className=" bg-white px-5 py-2 text-black rounded-full">Like</button>
                        </div>
                    </div>

                    {/* Video Description */}
                    <div className="bg-baseGray p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">1M views • Uploaded on Oct 28, 2024</p>
                        <p className="text-sm">This is the video description section. Add information about the video here.</p>
                    </div>
                </div>

                {/* Sidebar for Related Videos */}
                <div className="space-y-4 order-3 md:order-2">
                    <h2 className="text-lg font-semibold">Related Videos</h2>
                    <div className="space-y-4">
                        {/* Sample Related Video */}
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-16 bg-baseGray rounded-md"></div>
                            <div>
                                <h3 className="text-sm font-semibold">Related Video Title</h3>
                                <p className="text-xs text-gray-400">Channel Name</p>
                                <p className="text-xs text-gray-400">123K views • 1 month ago</p>
                            </div>
                        </div>
                        {/* Repeat above block for more related videos */}
                    </div>
                </div>

            </div>
        </div>
    );
}

import Image from 'next/image';
import MainHeader from "@/app/(components)/header.jsx";

export default function VideoPlaybackTemplate() {
    return (
        <div className="bg-black text-white">
            <MainHeader />

            {/* Below Header Base */}
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8">
                {/* Main Video Section */}
                <div className="col-span-2 flex flex-col space-y-4">
                    <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                        <div className="relative aspect-video">
                            {/* Replace with actual video source */}
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
                    <div className="space-y-2">
                        <h1 className="text-xl font-semibold">Video Title Here</h1>
                        <p className="text-gray-400 text-sm">1M views • Uploaded on Oct 28, 2024</p>
                        <div className="flex items-center space-x-4">
                            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">Like</button>
                            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">Dislike</button>
                            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">Share</button>
                        </div>
                    </div>

                    {/* Video Description */}
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <p className="text-sm">This is the video description section. Add information about the video here.</p>
                    </div>
                </div>

                {/* Sidebar for Related Videos */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Related Videos</h2>
                    <div className="space-y-4">
                        {/* Sample Related Video */}
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-16 bg-gray-700 rounded-md"></div>
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

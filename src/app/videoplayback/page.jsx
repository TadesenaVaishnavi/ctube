import Image from 'next/image';
import MainHeader from "@/app/(components)/header.jsx";
export default function VideoPlaybackTemplate() {
    return (
        <div>
            <MainHeader />
            <div className="flex flex-col items-center min-h-screen bg-black text-white">
                {/* Main Content */}
                <main className="flex w-4/5 mt-6">
                    {/* Video Section */}
                    <div className="flex-3 w-3/4">
                        <div className="w-full h-80 bg-gray-300 mb-4"></div>
                        <h1 className="text-2xl mb-4">Title of the video uploaded by the channel on the platform known as C Tube</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                            <div>
                                <p>Channel Name</p>
                                <p>1.3 Million Subscribers</p>
                            </div>
                            <button className="ml-auto bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer">Subscribe</button>
                            <button className="bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer ml-2">
                                <Image src="/like.png" alt="Like Icon" height={20} width={20} />
                            </button>
                        </div>

                        {/* Comments Section */}
                        <div className="bg-gray-800 p-4 rounded-md">
                            <input
                                type="text"
                                placeholder="Type a comment"
                                className="w-full p-2 mb-4 bg-gray-700 rounded-md text-white outline-none"
                            />
                            <div className="comment">
                                <p className="font-bold">Channel Name - <span className="font-normal">2 years ago</span></p>
                                <p>This is a comment that was posted on this video.</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Videos */}
                    <div className="flex-1 pl-4">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <div key={index} className="flex flex-col gap-2 mb-6">
                                <div className="w-full h-24 bg-gray-200"></div>
                                <p>Title of the video</p>
                                <p>Channel Name</p>
                                <p>2.3M views • {index + 1} years ago</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

import Image from 'next/image';

export default function VideoPlaybackTemplate() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="flex justify-between items-center p-4 w-full">
                <div className="flex items-center space-x-4">
                    <div className="cursor-pointer">nav bar</div>
                    <div className="logo">
                        <Image src="/logo2.png" alt="Logo" height={100} width={100} className="rounded-full" />
                    </div>
                </div>

                <div className="flex items-center space-x-4 w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="Type something..."
                        className="flex-1 bg-black text-white p-2 rounded-full outline-none"
                    />
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/search.png" alt="Search Icon" height={25} width={25} />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/microphone-black-shape.png" alt="Microphone Icon" height={25} width={25} />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/join.png" alt="Join Icon" height={40} width={40} />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/bell.png" alt="Bell Icon" height={40} width={40} />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/video-camera.png" alt="Video Camera Icon" height={40} width={40} />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
                        <Image src="/user.png" alt="User Icon" height={35} width={35} />
                    </div>
                </div>
            </header>

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
    );
}

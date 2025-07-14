const AcademicInfo = () => { 
    return (
        <div className="min-h-screen bg-white flex justify-center p-6"> {/* ⬅️ changed to bg-white */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {/* Left - Academic Information Form */}
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Step 2: Academic Information</h2>

                    {/* Institution Name */}
                    <label className="block text-sm font-medium">Institution Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4"
                        placeholder="Start typing your institution name"
                    />

                    {/* Program of Study & Current Level */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Program of Study</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md mt-1"
                                placeholder="e.g. Computer Science, Engineering"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Current Level</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md mt-1">
                                <option>Select your current level</option>
                            </select>
                        </div>
                    </div>

                    {/* GPA */}
                    <label className="block text-sm font-medium mt-4">Grade Point Average (GPA)</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4"
                        placeholder="Enter your current GPA"
                    />

                    {/* Upload Transcript */}
                    <label className="block text-sm font-medium mt-4">Upload Transcript</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="text-4xl text-gray-400 mb-2">☁️</div>
                        <p>Choose a file or drag and drop here</p>
                        <p className="text-xs text-gray-500">* We support PDF format, max size: 5MB</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                            Browse files
                        </button>
                    </div>
                </div>

                {/* Right - Buttons (No Background) */}
                <div className="flex flex-col justify-start gap-4 self-start">
                    <button className="px-5 py-2 bg-blue-500 text-white rounded-md w-full">
                        Save Progress
                    </button>
                    <button className="px-5 py-2 bg-gray-200 text-black rounded-md w-full">
                        Back to Homepage
                    </button>
                    <p className="text-red-500 text-xs text-center mt-4">
                        Note: Applications close on 26th March 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AcademicInfo;

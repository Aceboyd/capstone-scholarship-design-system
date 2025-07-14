import { ArrowLeft, ArrowRight } from "lucide-react";

const files = [
  {
    name: "Egbuna Princess/ Recommendation Letter.pdf",
    type: "pdf",
    progress: 100,
    status: "completed",
  },
  {
    name: "Egbuna Princess/ Passport Photograph.jpg",
    type: "img",
    progress: 100,
    status: "error",
    error: "File size too large",
  },
  {
    name: "Egbuna Princess/ Application Supporting Documents.pdf",
    type: "pdf",
    progress: 80,
    status: "uploading",
  },
  {
    name: "Egbuna Princess/ CV 2025.pdf",
    type: "pdf",
    progress: 30,
    status: "cancelled",
  },
  {
    name: "Egbuna Princess/ Research Project - Automated Traffic...",
    type: "pdf",
    progress: 100,
    status: "completed",
  },
];

const FileIcon = ({ type }) => {
  return (
    <div className="w-8 h-10 flex items-center justify-center bg-red-500 text-white rounded">
      {type === "img" ? "PNG" : "PDF"}
    </div>
  );
};

export default function UploadList() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>

        <div className="space-y-4">
          {files.map((file, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <FileIcon type={file.type} />

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{file.name}</span>
                  {file.status === "completed" && (
                    <span className="text-blue-600 text-sm font-semibold">Completed</span>
                  )}
                  {file.status === "cancelled" && (
                    <span className="text-gray-500 text-sm">Cancel</span>
                  )}
                  {file.status === "error" && (
                    <span className="text-red-500 text-sm font-medium">{file.error}</span>
                  )}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${
                      file.status === "error"
                        ? "bg-red-400"
                        : file.status === "completed"
                        ? "bg-blue-600"
                        : "bg-blue-400"
                    }`}
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full max-w-3xl mt-8">
        <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <span>Next</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}



import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import pdfIcon from '../assets/image/pdfIcon.png';
import jpgIcon from '../assets/image/nice.png';
import pngIcon from '../assets/image/pngIcon.png';
import docIcon from '../assets/image/nice.png';
import Header from '../Component/Header';
import Background from '../Components4/Background';
import Navigationresponsive3 from '../Components4/Navigationresponsive3';
import Steps3 from '../Components4/Steps3';
import Stepsresponsive3 from '../Components4/Stepsresponsive3';
import { Link } from 'react-router-dom';

const ScholarshipForm = () => {
  const navigate = useNavigate();
  const [formFilled, setFormFilled] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    // ✅ Load saved uploads from localStorage if available
    const saved = localStorage.getItem("step3Files");
    return saved ? JSON.parse(saved) : [];
  });
  const [progress, setProgress] = useState(40); 
  const [appStatus, setAppStatus] = useState('Not Started');

  useEffect(() => {
    const maxDocuments = 5; 
    const filledFields = uploadedFiles.filter(file => !file.error).length;
    const step3Progress = (filledFields / maxDocuments) * 90; 
    const totalProgress = 40 + step3Progress; 
    setProgress(totalProgress);
    setAppStatus(filledFields > 0 ? 'In Progress' : 'Not Started');

    // ✅ Save to localStorage whenever uploads change
    localStorage.setItem("step3Files", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'application/pdf':
        return pdfIcon;
      case 'image/jpeg':
      case 'image/jpg':
        return jpgIcon;
      case 'image/png':
        return pngIcon;
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return docIcon;
      default:
        return pdfIcon;
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const supportedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    files.forEach(file => {
      if (!supportedTypes.includes(file.type)) {
        alert(`Unsupported file type: ${file.name}.`);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setUploadedFiles(prevFiles => [
          ...prevFiles,
          { name: file.name, progress: 100, status: 'Error: File size too large', error: true, size: file.size, type: file.type },
        ]);
        return;
      }

      const newFile = { name: file.name, progress: 0, status: 'Uploading', error: false, size: file.size, type: file.type };
      setUploadedFiles(prevFiles => [...prevFiles, newFile]);

      const reader = new FileReader();
      reader.onload = () => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += 10;
          if (currentProgress >= 100) {
            clearInterval(interval);
            setUploadedFiles(prevFiles =>
              prevFiles.map(f => f.name === file.name ? { ...f, progress: 100, status: 'Completed' } : f)
            );
          } else {
            setUploadedFiles(prevFiles =>
              prevFiles.map(f => f.name === file.name ? { ...f, progress: currentProgress } : f)
            );
          }
        }, 200);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCancelUpload = (fileName) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedFiles.length > 0 && uploadedFiles.every(file => !file.error)) {
      setFormFilled(true);

      // ✅ Persist before moving to step 4
      localStorage.setItem("step3Files", JSON.stringify(uploadedFiles));

      navigate('/portal-step-4');
    } else {
      alert('Please upload at least one valid document before proceeding.');
    }
  };

  const [selectedCategories, setSelectedCategories] = useState([]); 
    
      const handleSetSelectedCategories = useCallback((categories) => {
        setSelectedCategories(categories);
      }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFF]">
      <Header
                  setSelectedCategories={handleSetSelectedCategories}
                    selectedCategories={selectedCategories}
                    className="w-full px-3 sm:px-6 lg:px-12"
                  />
      <div className='mt-20'><Background /></div>
      <main className="mx-auto w-full px-2">
        <div className="mt-8"><Steps3 progress={progress} appStatus={appStatus} /></div>

        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className='md:hidden mt-8 w-[20%]'><Stepsresponsive3 progress={progress} appStatus={appStatus} /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%]">
              <div className="md:col-span-2">
                <div className="bg-white p-6">
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold mb-6">Step 3: Supporting Documents</h3>
                    <div className="space-y-6">
                      <p className="text-sm text-gray-500">
                        Kindly upload the following documents: Recommendation Letter, CV, Valid ID Card, Passport photograph and any other document that may strengthen your application.
                      </p>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
                        <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                          <div className="flex justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                          </div>
                          <p className="mt-2 mb-2 text-sm text-gray-600">Choose a file or drag and drop here</p>
                          <p className="text-xs mb-6 text-red-600">file supported: .PDF, .JPG, .PNG, .JPEG, .DOC, .DOCX max 5MB</p>
                          <label className="mt-4 inline-block">
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Browse files</span>
                            <input
                              type="file"
                              className="hidden"
                              onChange={handleFileUpload}
                              accept=".pdf,.jpg,.png,.jpeg,.doc,.docx"
                              multiple
                            />
                          </label>
                        </div>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700">Uploaded Files</h4>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex flex-col bg-gray-50 p-3 rounded-md mt-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <img src={getFileIcon(file.type)} alt="File Icon" className="w-6 h-6 mr-2" />
                                  <span className="text-sm text-gray-800">{file.name}</span>
                                  <span className="text-xs text-gray-500 ml-2">({file.progress}%)</span>
                                </div>
                                <div className="flex items-center">
                                  <span className={file.error ? 'text-red-600' : file.progress === 100 ? 'text-[#0000FE]' : 'text-blue-600'}>
                                    {file.status}
                                  </span>
                                  {file.progress < 100 && !file.error && (
                                    <button
                                      type="button"
                                      className="ml-2 text-blue-600 hover:text-blue-800"
                                      onClick={() => handleCancelUpload(file.name)}
                                    >
                                      Cancel
                                    </button>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${file.progress}%` }}></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-start mt-4">
                        <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mr-2 text-gray-600 text-xs">i</span>
                        <p className="text-xs text-gray-600">
                          Your uploaded documents will be securely saved, making it easy to reuse them for future scholarship applications.<br />
                          You can edit, replace, or update your saved documents anytime from your Profile on the dashboard.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col md:justify-start gap-4 max-md:hidden bg-[#FAFAFF]">
                              <button
                                className="px-4 py-2 bg-[#0000FE] text-white rounded-md w-[100%] cursor-pointer"
                              >
                                Save Progress
                              </button>
                              <Link to='/landing'><button
                                className="px-4 py-2 bg-gray-200 text-[#0000FE] rounded-md w-full cursor-pointer"
                              >
                                Back to Homepage
                              </button></Link>
                              <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
                                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                                  i
                                </span>
                                Note: Applications closes on 26th March 2025
                              </p>
                            </div>
              <div className="md:col-span-3 flex justify-between mt-8 max-md:hidden py-4">
                <a
                  href="/application"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back
                </a>
                <a
                  href="/portal-step-4"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center cursor-pointer"
                  onClick={handleSubmit}
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='md:hidden justify-between flex flex-row py-4'>
            <Navigationresponsive3 />
            <button
              id="next-button"
              href="/portal-step-4"
              onClick={handleSubmit}
              className="mt-8 px-6 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </div>
          <p className="mt-2 py-8 flex items-center justify-end text-sm text-indigo-700 font-medium md:hidden mx-auto">
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
              i
            </span>
            Note: Applications close on 26th March 2025
          </p>
        </div>
      </main>
    </div>
  );
};

export default ScholarshipForm;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoBg from "../assets/image/portal4/svg/logobg.svg";
import Header2anon from "../Component3/Header2anon";
import Background from "../Components4/Background";
import Steps4 from "../Components4/Steps4";
import Stepsresponsive4 from "../Components4/Stepsresponsive4";

export default function PortalStep4() {
  const [sopText, setSopText] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiGeneratedText, setAiGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(75); 
  const [appStatus, setAppStatus] = useState("Not Started");

  // ✅ Load saved data
  useEffect(() => {
    const savedStep4 = localStorage.getItem("step4Data");
    if (savedStep4) {
      const parsed = JSON.parse(savedStep4);
      if (parsed.sopText) setSopText(parsed.sopText);
      if (parsed.aiPrompt) setAiPrompt(parsed.aiPrompt);
      if (parsed.aiGeneratedText) setAiGeneratedText(parsed.aiGeneratedText);
      if (parsed.progress) setProgress(parsed.progress);
      if (parsed.appStatus) setAppStatus(parsed.appStatus);
    }
  }, []);

  // ✅ Save data automatically
  useEffect(() => {
    localStorage.setItem(
      "step4Data",
      JSON.stringify({ sopText, aiPrompt, aiGeneratedText, progress, appStatus })
    );
  }, [sopText, aiPrompt, aiGeneratedText, progress, appStatus]);

  // ✅ Progress calculation
  useEffect(() => {
    const minWords = 2000;
    const words = sopText.trim().split(/\s+/).filter(word => word.length > 0).length;
    const step4Progress = Math.min((words / minWords) * 90, 90);
    const totalProgress = 75 + step4Progress;
    setProgress(totalProgress);
    setAppStatus(words > 0 ? "In Progress" : "Not Started");
  }, [sopText]);

  // ✅ Handle AI generation (local mock until backend exists)
  const handleGenerateAI = async () => {
    setLoading(true);
    try {
      // Collect all step data from localStorage
      const step1 = JSON.parse(localStorage.getItem("step1Data") || "{}");
      const step2 = JSON.parse(localStorage.getItem("step2Data") || "{}");
      const step3 = JSON.parse(localStorage.getItem("step3Files") || "[]"); // ✅ fixed key

      // Merge all for AI
      const allData = {
        ...step1,
        ...step2,
        uploadedFiles: step3,
        sopInstruction: aiPrompt,
      };

      // 🚀 Mock AI generation (replace later with backend call)
      const generated = `
Dear Scholarship Committee,

I am excited to apply for this opportunity. My academic journey, as shown in my documents, highlights my persistence and achievements. ${aiPrompt ? `I would especially like to emphasize: ${aiPrompt}.` : ""}

I believe my background and dedication make me an excellent candidate for this scholarship.

Sincerely,
${step1.firstName || "Your Name"} ${step1.lastName || ""}
      `.trim();

      setAiGeneratedText(generated);
    } catch (error) {
      console.error("AI generation failed", error);
      setAiGeneratedText("Error: Failed to generate SOP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FAFAFF]">
      <Header2anon />
      <div className="mt-8"><Background /></div>
      <main className="mx-auto w-full px-2">
        <div className="mt-8"><Steps4 progress={progress} appStatus={appStatus} /></div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="md:hidden mt-8 w-[20%]">
              <Stepsresponsive4 progress={progress} appStatus={appStatus} />
            </div>
            <div className="w-[80%] md:w-full flex flex-row justify-center md:px-10 lg:px-20 px-1 gap-3">
              <div className="w-full md:w-[70%] p-5 space-y-2 bg-white">
                {/* Section 1 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xl">
                      <span className="font-bold">Step 4 :</span> Write your Statement of Purpose
                    </p>
                    <div>
                      <img src={LogoBg} alt="Logo Background" className="size-14 object-cover" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Tell us about your goals, what you’ve achieved so far, and why you’re a great fit for this scholarship.
                  </p>
                </div>
                <div className="h-0.5 w-full bg-gray-300"></div>
                <div className="space-y-4">
                  <p className="text-xl">
                    <span className="font-bold">Section 1 :</span> Write your statement of purpose below{" "}
                    <span className="text-xl">(minimum of 2000 words)</span>
                  </p>
                  <textarea
                    rows={20}
                    placeholder="I am applying for the Ghana STEM Excellence Scholarship because I am passionate about using technology to solve real-world problems…"
                    className="w-full rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                    value={sopText}
                    onChange={(e) => setSopText(e.target.value)}
                  ></textarea>
                </div>

                {/* Section 2 - AI Assistant */}
                <div className="space-y-2 p-5">
                  <div className="space-y-2">
                    <p className="text-xl">
                      <span className="font-bold">Section 2 :</span> Capstone AI Assistant
                    </p>
                    <p className="text-sm text-gray-700">
                      Let our Capstone AI assistant draft a personalised version for you using your earlier uploaded documents.
                    </p>
                  </div>
                  <div className="h-0.5 w-full bg-gray-300"></div>
                  <div className="space-y-4">
                    <p className="text-xl">
                      Tell us what you want your statement of purpose to highlight
                    </p>
                    <div className="relative">
                      <textarea
                        rows={10}
                        placeholder='" e.g. Please focus on my academic challenges and my goal to work in AI ethics. "'
                        className="w-full rounded-md border-2 border-gray-300 p-4 outline-none placeholder:text-pretty"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                      ></textarea>
                      <button
                        onClick={handleGenerateAI}
                        disabled={loading}
                        className="absolute right-5 bottom-5 rounded-lg bg-blue-400 px-4 py-2 text-gray-100 disabled:opacity-50"
                      >
                        {loading ? "Generating..." : "Generate with AI"}
                      </button>
                    </div>
                  </div>

                  {/* AI Generated Result */}
                  {aiGeneratedText && (
                    <div className="mt-4 p-4 border rounded-md bg-gray-50">
                      <p className="font-bold text-blue-600 mb-2">✨ Capstone AI Draft:</p>
                      <p className="whitespace-pre-line text-gray-800">{aiGeneratedText}</p>
                      <p className="text-xs text-gray-500 mt-2">You can copy and paste this into Section 1.</p>
                    </div>
                  )}

                  <p className="w-full text-balance text-blue-700">
                    <span className="font-bold">Please note :</span> Any statement generated by Capstone AI will be clearly labelled and added below your original writing - your original text won’t be lost. Capstone AI only uses the documents you’ve uploaded to create helpful suggestions that reflect your story.
                  </p>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="flex flex-col items-end md:col-span-1 max-md:hidden w-[30%] bg-[#FAFAFF]">
                <button
                  className="mb-2 w-full max-w-xs rounded-md bg-[#0000FE] px-4 py-2 text-white hover:bg-blue-700"
                  onClick={() =>
                    localStorage.setItem("step4Data", JSON.stringify({ sopText, aiPrompt, aiGeneratedText, progress, appStatus }))
                  }
                >
                  Save Progress
                </button>
                <a
                  href="#"
                  className="mb-2 block w-full max-w-xs rounded-md border border-blue-600 px-4 py-2 text-center text-[#0000FE] hover:bg-blue-50"
                >
                  Back to Homepage
                </a>
                <div className="mt-2 flex items-center justify-end text-sm text-gray-600">
                  <p className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                    i
                  </p>
                  Note: Applications closes on 26th March 2025
                </div>
              </div>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="mt-8 flex justify-between md:col-span-3 py-4">
            <Link
              to="/step-3"
              className="flex cursor-pointer items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </Link>
            <Link
              to="/portal-step-5"
              className="flex w-fit items-center justify-between gap-4 rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
            >
              <span>Next</span>
              <svg className="mr-2 h-5 w-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <p className="mt-2 py-8 flex items-center justify-center text-sm text-indigo-700 font-medium md:hidden mx-auto">
          <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
            i
          </span>
          Note: Applications close on 26th March 2025
        </p>
      </main>
    </section>
  );
}

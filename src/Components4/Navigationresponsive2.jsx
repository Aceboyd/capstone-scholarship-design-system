import { useNavigate } from "react-router-dom";

const navigate = useNavigate;

  const handleBack = () => {
    navigate("/step-1");
  };
const Navigationresponsive2 = () => {
  return (
    <>
    <div className="mt-8 flex md:col-span-3 md:hidden bg-[#FAFAFF]">
            <a href="/step-1"><button
          onClick={handleBack}
          className="px-6 py-2 bg-gray-300 text-black rounded"
        >
          Back
        </button></a>
            </div>
    </>
  )
}

export default Navigationresponsive2
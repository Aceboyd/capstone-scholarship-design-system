import { SlOptions } from "react-icons/sl";

export default function Notifications() {
  return (
    <div className="space-y-4 rounded-xl bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <p className="text-[17px] font-bold">Notifications</p>

        <span>
          <SlOptions color="#99B8FF" />
        </span>
      </div>

      <p className="text-[13px]">March 31, 2025</p>

      <div className="space-y-4">
        <div className="flex gap-10">
          <p className="font-black">12:00</p>

          <p className="flex flex-col border-l-2 border-[#99B8FF] pl-2 text-[11px]">
            <span>2025 MTN Fully Funded</span>
            <span className="font-bold">Interview</span>
          </p>
        </div>

        <div className="flex gap-10">
          <p className="font-black">09:00</p>

          <p className="flex flex-col border-l-2 border-[#FF841F] pl-2 text-[11px]">
            <span>Turkey First Class Scholarship</span>
            <span className="font-bold">Dead Line</span>
          </p>
        </div>
      </div>

      <p className="text-[13px]">April 3, 2025</p>

      <div className="space-y-4">
        <div className="flex gap-10">
          <p className="font-black">10:00</p>

          <p className="flex flex-col border-l-2 border-[#99B8FF] pl-2 text-[11px]">
            <span>Akwa Ibom state Government Grant</span>
            <span className="font-bold">Dead Line</span>
          </p>
        </div>
      </div>
    </div>
  );
}

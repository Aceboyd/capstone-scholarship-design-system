export default function MyApplication() {
  return (
    <div className="flex justify-between gap-4">
      {/* My Applications */}
      <div className="w-full space-y-4 text-[13px]">
        <p className="text-[15px] font-bold">My Applications</p>

        <div className="flex h-[117px] items-center justify-between rounded-md border-l-4 border-[#FF841F] bg-white py-8 pr-4 pl-8">
          <div>
            <p className="text-[17px] font-bold">
              Ghana Stem Excellence Scholarship
            </p>
            <p>Ghana Education Trust Fund (GETFund)</p>
          </div>

          <p className="italic">View all</p>
        </div>
      </div>

      {/* Offer */}
      <div className="space-y-4 text-[13px]">
        <p className="font-bold">Offer</p>

        <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#FF841F] p-4 text-white">
          <p className="text-3xl font-bold">02</p>
          <p className="text-balance">Offered Scholarship</p>
        </div>
      </div>

      {/* Unsuccessful */}
      <div className="space-y-4 text-[13px]">
        <p className="font-bold">Unsuccessful</p>

        <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#FF841F] p-4 text-white">
          <p className="text-3xl font-bold">00</p>
          <p className="text-balance">Unsuccessful Scholarship</p>
        </div>
      </div>
    </div>
  );
}

export default function MyApplication() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      {/* My Applications */}
      <div className="w-full space-y-4 text-[13px]">
        <p className="text-[15px] font-bold">My Applications</p>

        <div className="flex min-h-[117px] items-center justify-between rounded-md border-l-4 border-[#FF841F] bg-white py-8 pr-4 pl-4 md:pl-8">
          <div>
            <p className="text-[14px] font-bold md:text-[17px]">
              Ghana Stem Excellence Scholarship
            </p>
            <p>Ghana Education Trust Fund (GETFund)</p>
          </div>

          <p className="min-w-10 text-[11px] italic md:text-[13px]">View all</p>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Offer */}
        <div className="space-y-4 text-[13px]">
          <p className="font-bold">Offer</p>

          <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#FF841F] p-4 text-white">
            <p className="text-3xl font-bold">02</p>
            <p className="text-[11px] text-balance md:text-[13px]">
              Offered Scholarship
            </p>
          </div>
        </div>

        {/* Unsuccessful */}
        <div className="space-y-4 text-[13px]">
          <p className="font-bold">Unsuccessful</p>

          <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#FF841F] p-4 text-white">
            <p className="text-3xl font-bold">00</p>
            <p className="text-[11px] text-balance md:text-[13px]">
              Unsuccessful Scholarship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

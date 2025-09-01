export default function ScholarshipLists() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      {/* Scholarship Lists */}
      <div className="w-full space-y-4 text-[13px]">
        <p className="text-[15px] font-bold">Scholarship Lists</p>

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
        {/* Draft */}
        <div className="space-y-4 text-[13px]">
          <p className="font-bold">Draft</p>

          <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#99B8FF] p-4 text-white">
            <p className="text-3xl font-bold">04</p>
            <p className="text-[11px] text-balance md:text-[13px]">
              Drafted but not submitted
            </p>
          </div>
        </div>

        {/* Bookmark */}
        <div className="space-y-4 text-[13px]">
          <p className="font-bold">Bookmark</p>

          <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#99B8FF] p-4 text-white">
            <p className="text-3xl font-bold">07</p>
            <p className="text-[11px] text-balance md:text-[13px]">
              Bookmarked Scholarship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

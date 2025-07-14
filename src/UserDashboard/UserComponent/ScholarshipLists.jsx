export default function ScholarshipLists() {
  return (
    <div className="flex justify-between gap-4">
      {/* Scholarship Lists */}
      <div className="w-full space-y-4 text-[13px]">
        <p className="text-[15px] font-bold">Scholarship Lists</p>

        <div className="flex h-[117px] items-center justify-between rounded-md border-l-4 border-[#99B8FF] bg-white py-8 pr-4 pl-8">
          <div>
            <p className="text-[17px] font-bold">
              Ghana Stem Excellence Scholarship
            </p>
            <p>Ghana Education Trust Fund (GETFund)</p>
          </div>

          <p className="italic">View all</p>
        </div>
      </div>

      {/* Draft */}
      <div className="space-y-4 text-[13px]">
        <p className="font-bold">Draft</p>

        <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#99B8FF] p-4 text-white">
          <p className="text-3xl font-bold">04</p>
          <p className="text-balance">Drafted but not submitted</p>
        </div>
      </div>

      {/* Bookmark */}
      <div className="space-y-4 text-[13px]">
        <p className="font-bold">Bookmark</p>

        <div className="flex h-[117px] w-[114px] flex-col justify-center gap-2 rounded-md bg-[#99B8FF] p-4 text-white">
          <p className="text-3xl font-bold">07</p>
          <p className="text-balance">Bookmarked Scholarship</p>
        </div>
      </div>
    </div>
  );
}

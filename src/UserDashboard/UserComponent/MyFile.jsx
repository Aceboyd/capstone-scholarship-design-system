export default function MyFile() {
  return (
    <div className="space-y-4">
      <p className="text-[13px] font-bold md:text-[15px]">My Files</p>

      <div className="flex items-center justify-between rounded-md border-l-4 border-[#56C4F9] bg-white py-4 pr-4 pl-8 text-[12px] md:text-[13px]">
        <div className="flex gap-8">
          <button className="cursor-pointer rounded-md bg-[#EBEDFF] px-4 py-1 font-medium md:px-6">
            Saved Files
          </button>

          <button className="cursor-pointer rounded-md bg-[#EBEDFF] px-4 py-1 font-medium md:px-6">
            Edit Files
          </button>
        </div>

        <p className="font-[11px] italic md:pr-12">See more</p>
      </div>
    </div>
  );
}

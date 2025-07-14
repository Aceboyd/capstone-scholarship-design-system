export default function MyFile() {
  return (
    <div className="space-y-4">
      <p className="text-[15px] font-bold">My Files</p>

      <div className="flex items-center justify-between rounded-md border-l-4 border-[#56C4F9] bg-white py-4 pr-4 pl-8 text-[13px]">
        <div className="flex gap-8">
          <button className="cursor-pointer rounded-md bg-[#EBEDFF] px-6 py-1 font-medium">
            Saved Files
          </button>

          <button className="cursor-pointer rounded-md bg-[#D2D6FF] px-6 py-1 font-medium">
            Edit Files
          </button>
        </div>

        <p className="pr-12 font-[11px] italic">See more</p>
      </div>
    </div>
  );
}

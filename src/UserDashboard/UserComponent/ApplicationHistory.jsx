export default function ApplicationHistory() {
  const applicationHistory = [
    {
      imageHistory:
        "https://plus.unsplash.com/premium_photo-1682284548131-58cb47f6ab2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scholarshipType: "Turkiye First Class Scholarships 2025",
      fundType: "| Fully Funded",
    },
    {
      imageHistory:
        "https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scholarshipType:
        "2025 Indian Government ICCR (Undergraduate, Postgraduate) Scholarship",
      fundType: "| Fully Funded",
    },
    {
      imageHistory:
        "https://plus.unsplash.com/premium_photo-1677572452827-899002f7ca12?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scholarshipType: "Akwa Ibom state Government Grant",
      fundType: "2025 | $1500 Fund",
    },
    {
      imageHistory:
        "https://plus.unsplash.com/premium_photo-1714265042273-9664e4537f7d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scholarshipType: "2025 Illinois Wesleyan University",
      fundType: "scholarships in USA",
    },
    {
      imageHistory:
        "https://plus.unsplash.com/premium_photo-1683749808830-5ece949ce8e4?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      scholarshipType: "US Wells Mountain initiative Scholarship",
      fundType: "2025 | $1500 Fund",
    },
  ];

  return (
    <div className="space-y-4 rounded-xl bg-white px-6 py-4">
      <div className="flex items-end justify-between">
        <p className="text-[17px] font-bold">Application History</p>

        <span className="text-[13px] italic">See all</span>
      </div>

      {applicationHistory.map(
        ({ imageHistory, scholarshipType, fundType }, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_9fr] items-center gap-4"
          >
            <div className="size-8">
              <img
                src={imageHistory}
                alt={scholarshipType}
                className="size-full overflow-hidden rounded-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="text-[11px] text-black/50">
              <p className="font-medium text-balance">{scholarshipType}</p>
              <p>{fundType}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

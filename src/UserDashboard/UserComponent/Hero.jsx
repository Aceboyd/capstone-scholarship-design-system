import HeroSVG from "../../assets/image/user-dashboard/pic1.svg";

export default function Hero() {
  return (
    <div className="relative flex">
      <div className="relative -mx-[16px] mt-10 flex overflow-hidden bg-[#0000FE] px-4 py-4 sm:mx-0 sm:rounded-3xl sm:px-8">
        <div className="space-y-4 text-white">
          <h1 className="text-sm font-bold sm:text-[25px]">Hello Adewale</h1>

          <p className="w-[90%] text-[8px] sm:w-[70%] sm:text-[15px] sm:text-pretty">
            Capstone provides scholarships to support students based on merit
            and need. Apply by submitting required documents before the
            deadline.
          </p>

          <button className="rounded-md bg-white px-3 py-1 text-[8px] font-bold text-[#0000FE] transition-transform hover:translate-y-1 hover:shadow-2xl md:px-6 md:text-[13px]">
            Apply Now
          </button>
        </div>

        {/* Svg Image to fill up the space in blue background */}
        <div>
          <img
            src={HeroSVG}
            alt="Hero Image"
            loading="lazy"
            className="invisible w-full -translate-x-4 -translate-y-4 scale-145 object-cover"
          />
        </div>

        {/* Circle behind the svg image */}
        <span className="absolute -top-1 -right-25 size-40 rounded-full bg-[#99B8FF]/40"></span>
      </div>

      <div className="absolute -top-4.5 -right-14 scale-65 sm:right-2 sm:scale-100 md:top-0">
        <img
          src={HeroSVG}
          alt="Hero Image"
          loading="lazy"
          className="object-cover"
        />
      </div>
    </div>
  );
}

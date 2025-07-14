import HeroSVG from "../../assets/image/user-dashboard/pic1.svg";

export default function Hero() {
  return (
    <div className="relative flex">
      <div className="relative mt-10 flex overflow-hidden rounded-3xl bg-[#0000FE] px-8 py-4">
        <div className="space-y-4 text-white">
          <h1 className="text text-[25px] font-bold">Hello Adewale</h1>

          <p className="w-[70%] text-[15px] text-pretty">
            Capstone provides scholarships to support students based on merit
            and need. Apply by submitting required documents before the
            deadline.
          </p>

          <button className="rounded-md bg-white px-6 py-1 text-[13px] font-bold text-[#0000FE] transition-transform hover:translate-y-1 hover:shadow-2xl">
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

      <div className="absolute right-2">
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

import ApplicationHistory from "./UserComponent/ApplicationHistory";
import CopyRight from "./UserComponent/CopyRight";
import Hero from "./UserComponent/Hero";
import MyApplication from "./UserComponent/MyApplication";
import MyFile from "./UserComponent/MyFile";
import Notifications from "./UserComponent/Notifications";
import ScholarshipApplication from "./UserComponent/ScholarshipApplication";
import ScholarshipLists from "./UserComponent/ScholarshipLists";
import SortSearchFilter from "./UserComponent/SortSearchFilter";

export default function UserMain() {
  return (
    <section className="flex min-h-screen flex-col gap-4 px-4 pt-6 md:grid md:grid-cols-[3fr_1.08fr]">
      <div className="space-y-11">
        <Hero />
        <ScholarshipLists />
        <MyApplication />
        <ScholarshipApplication />
        <MyFile />
      </div>
      <div className="space-y-4 md:space-y-6 pt-4 md:pt-10">
        <SortSearchFilter />
        <Notifications />
        <ApplicationHistory />
      </div>

      <footer className="col-span-2 -mx-4 w-full text-center md:text-left">
        <CopyRight />
      </footer>
    </section>
  );
}
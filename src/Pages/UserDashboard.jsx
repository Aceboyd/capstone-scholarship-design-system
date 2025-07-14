import UserHeader from "../UserDashboard/UserHeader";
import UserMain from "../UserDashboard/UserMain";
import UserNav from "../UserDashboard/UserNav";

export default function UserDashboard() {
  return (
    <div className="font-nunito grid h-dvh grid-cols-[17.688rem_1fr] grid-rows-[4.5rem_1fr]">
      <header className="col-span-2">
        <UserHeader />
      </header>

      <aside className="bg-[#0000FE]">
        <UserNav />
      </aside>

      <main className="overflow-y-scroll bg-[#f5f6fa]">
        <UserMain />
      </main>
    </div>
  );
}

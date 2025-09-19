import Header from "../Component/Header";
import Navbar from "../Component3/Header2";
import Content from "../Components4/Content";
import SearchBar from "../Components4/SearchBar";
import Sidebar from "../Components4/Sidebar";

let ScholarshipPortal = () => {
  return (
    <div className="relative">
      <Header/>

      <SearchBar />

      <main className="grid grid-cols-[2.5fr_8fr] gap-6 px-4 pt-4">
        <aside className="sticky top-0 self-start">
          <Sidebar />
        </aside>

        <div className="sticky top-0 self-start">
          <Content />
        </div>
      </main>
    </div>
  );
};

export default ScholarshipPortal;

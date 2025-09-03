import Navbar from "../Component3/Header2";
import Content from "../Components4/Content";
import SearchBar from "../Components4/SearchBar";
import Sidebar from "../Components4/Sidebar";

let ScholarshipPortal = () => {
  return (
    <div>
      <Navbar />

      <SearchBar />

      <div className="grid grid-cols-[2fr_8fr] gap-6 p-4">
        <Sidebar />

        <Content />
      </div>
    </div>
  );
};

export default ScholarshipPortal;

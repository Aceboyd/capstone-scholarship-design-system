import { useState } from "react";
import Navbar from "../Component3/Header2";
import Content from "../Components4/Content";
import SearchBar from "../Components4/SearchBar";
import Sidebar from "../Components4/Sidebar";

let ScholarshipPortal = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      <Navbar />
      <SearchBar toggle={toggleSidebar} setSearchQuery={setSearchQuery} />
      <main className="grid grid-cols-[2.5fr_8fr] gap-6 px-4 pt-4">
        <aside className="sticky top-0 self-start">
          <Sidebar
            isVisible={isSidebarVisible}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </aside>
        <div className="sticky top-0 self-start">
          <Content selectedFilters={selectedFilters} searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
};

export default ScholarshipPortal;
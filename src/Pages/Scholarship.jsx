import { useState } from "react";

import Navbar from "../Component3/Header2";
import Content from "../Components4/Content";
import SearchBar from "../Components4/SearchBar";
import Sidebar from "../Components4/Sidebar";

let ScholarshipPortal = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative">
      <Navbar />
      
      <SearchBar setSearchQuery={setSearchQuery} />

      <main className="grid gap-6 px-2 pt-4 sm:px-4 lg:grid-cols-[2.5fr_8fr]">
        <aside className="sticky top-0 hidden self-start lg:block">
          <Sidebar
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </aside>

        <div className="sticky top-0 self-start">
          <Content
            selectedFilters={selectedFilters}
            searchQuery={searchQuery}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
      </main>
    </div>
  );
};

export default ScholarshipPortal;

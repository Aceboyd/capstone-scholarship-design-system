import Sidebar from "./Sidebar"
import Content from "./Content"
import SearchBar from "./SearchBar"
import { useState } from "react"

let Results = () => {
    let [hello, isOpen] = useState(true)
   
    let toggle = () => {
        isOpen(!hello)
        console.log(hello);
    }
    return (
        <div>
        <SearchBar hello={hello} toggle={toggle} />
        <div className="flex">
          <Sidebar hello={hello} />
          <Content />
        </div>
        </div>
    )
}

export default Results
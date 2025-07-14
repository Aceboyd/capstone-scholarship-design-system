import { cardInfo } from "./cardInfo"
import { useState } from "react"
import { Link } from "react-router-dom"


let Card = (props) => {

    let [info, cInfo] = useState(cardInfo)

    return (
        <div className={`${props.grid ? "grid grid-cols-2 gap-2 max-[800px]:flex flex-col": "" } space-y-6`}>
            {
                info.map((details, key) => {
                    return (
                        <div key={key} className={`${key != undefined && key != null ? "hover:scale-105 duration-1500 cursor-pointer": " "} bg-white shadow-lg p-4 rounded-md space-y-1`} >

                        <div className="flex justify-between">
                            <p className="text-2xl max-[700px]:text-xl">{details.mainTitle}</p>
                            <p className="text-gray-900 text-xs self-center">Posted {details.time}</p>
                        </div>
                        <p className="max-[700px]:text-sm">{details.subTitle}</p>
                        <div className="flex gap-2 items-center">
                            <p className="flex"><img src="images/tuition.png" alt="tuition" /> : </p>
                            <p>{details.tuition}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="flex"> <img src="images/date.png" /> : </p>
                            <div className="flex gap-1">
                                <p>{details.date}</p>
                                <p className="text-[#0000FE] text-xs font-bold self-center">closes in {details.expiry}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="flex"><img src="images/student.png" /> : </p>
                            <p>{details.student}</p>
                        </div>
                        <div>
                        <div className="min-[800px]:flex gap-1">
                        <p>Application Status:</p>
                        <div className="min-[800px]:flex items-center min-[700px]:gap-1">
                        <img src={details.progress} alt="progress bar" />
                        <p className="text-[#0000FE] text-xs font-bold self-center">{details.appStatus}</p>
                         </div>   
                        </div>
                        </div>
                        <hr></hr>
                        <div className={`${props.grid ? "grid grid-cols-1 place-items-center space-y-1" : "min-[800px]:flex items-center justify-between"} `}>
                            <div className="flex gap-2 text-sm">
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag1}</p>
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag2}</p>
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag3}</p>
                            </div>

                            <div className="flex gap-1 max-[800px]:w-40 max-[800px]:place-self-center items-center max-[700px]:pt-2">
                                <button className="bg-[#0000FE] p-2 rounded-md text-white cursor-pointer max-[700px]:text-xs">{details.apply}</button>
                                <Link to={'/info'}><img src="images/info icon.png" className="bg-[#DCDDFF] w-fit p-2 rounded-md" alt="info" /></Link>
                                <img src={details.bookmark} className={`bg-[#DCDDFF] w-fit p-2 rounded-md`} alt="bookmark" />
                            </div>
                        </div>
                    </div>

                    )
                })
            }
        </div>
    )
    
}

export default Card
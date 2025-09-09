import { useState } from "react";
import { Link } from "react-router-dom";

import { cardInfo } from "./cardInfo";

let Card = (props) => {
  let [info, cInfo] = useState(cardInfo);

  return (
    <div
      className={`${props.grid ? "grid grid-cols-2 flex-col gap-2 max-[800px]:flex" : ""} space-y-6`}
    >
      {info.map((details, key) => {
        return (
          <div
            key={key}
            className={`${key !== undefined && key !== null ? "cursor-pointer duration-1500 hover:scale-101" : ""} space-y-1 rounded-md bg-white p-4 shadow-lg`}
          >
            <div className="flex justify-between">
              <p className="text-2xl max-[700px]:text-xl">
                {details.mainTitle}
              </p>
              <p className="self-center text-xs text-gray-900">
                Posted {details.time}
              </p>
            </div>
            <p className="max-[700px]:text-sm">{details.subTitle}</p>
            <div className="flex items-center gap-2">
              <p className="flex">
                <img src="images/tuition.png" alt="tuition" /> :
              </p>
              <p>{details.tuition}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="flex">
                <img src="images/date.png" /> :
              </p>
              <div className="flex gap-1">
                <p>{details.date}</p>
                <p className="self-center text-xs font-medium text-[#0000FE] italic">
                  Closes in {details.expiry}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="flex">
                <img src="images/student.png" /> :
              </p>
              <p>{details.student}</p>
            </div>
            <div className="w-fit">
              <div className="flex gap-1">
                <p className="w-fit">Application Status:</p>

                <div className="items-center min-[700px]:gap-1 min-[800px]:flex">
                  <img
                    className="max-w-[85%] object-cover"
                    src={details.progress}
                    alt="progress bar"
                  />

                  <p className="self-center text-xs font-bold text-[#0000FE]">
                    {details.appStatus}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div
              className={`${props.grid ? "grid grid-cols-1 place-items-center space-y-1" : "items-center justify-between min-[800px]:flex"}`}
            >
              <div className="flex gap-2 text-sm">
                <p className="w-fit rounded-md bg-[#ebedff] p-2">
                  {details.tag1}
                </p>
                <p className="w-fit rounded-md bg-[#ebedff] p-2">
                  {details.tag2}
                </p>
                <p className="w-fit rounded-md bg-[#ebedff] p-2">
                  {details.tag3}
                </p>
              </div>
              <div className="flex items-center gap-1 max-[800px]:w-40 max-[800px]:place-self-center max-[700px]:pt-2">
                {key === 0 ? (
                  <Link
                    to="/ghanapage"
                    className="cursor-pointer rounded-md bg-[#0000FE] px-3 py-2 text-white max-[700px]:text-xs"
                  >
                    {details.apply}
                  </Link>
                ) : (
                  <button className="cursor-pointer rounded-md bg-[#0000FE] p-2 text-white max-[700px]:text-xs">
                    {details.apply}
                  </button>
                )}
                <img
                  src="images/info icon.png"
                  className="w-fit rounded-md bg-[#DCDDFF] p-2"
                  alt="info"
                />
                <img
                  src={details.bookmark}
                  className="w-fit rounded-md bg-[#DCDDFF] p-2"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

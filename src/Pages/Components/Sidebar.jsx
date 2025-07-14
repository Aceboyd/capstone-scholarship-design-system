import {useState} from 'react';


let Sidebar = (props) => {

  let [show, isShown] = useState(true);

  let remove = () => {
    isShown(!show);
    console.log("clicked");
  }


    return (
        <div className={`${props.hello ? "max-[800px]:invisible max-[800px]:w-0" : "max-[700px]:visible"} w-80 space-y-2`}>
        <div>
          <div className="flex items-center mx-5 pb-2">
          <img src="images/filter.png" alt="filter icon" />
          <div className="flex gap-10">
          <p className=" text-[#000000]">Selected Filter</p>
          <p onClick={remove} className="text-[#0000FE] font-bold cursor-pointer">Reset Filters</p>
          </div>
          </div>

          <div className={`${show ? "" : "hidden"} space-y-2`}>
           <div className='flex max-[700px]:flex-col max-[700px]:space-y-2 max-[700px]:ml-8 ml-8 min-[700px]:gap-4 '>
           <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit rounded-md">Undergraduate<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
           <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit rounded-md">STEM<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
           </div>
            <div className='flex max-[700px]:flex-col max-[700px]:space-y-2 max-[700px]:ml-8 ml-8 min-[700px]:gap-4 '>
            <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit rounded-md">Ghana<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
            <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit rounded-md">Closing in 30 days<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
            </div>
            <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit ml-8 rounded-md">Africa-wide Sponsorship<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
            <button className="p-2 bg-[#EBEDFF] flex items-center gap-2 text-sm w-fit ml-8 rounded-md">Closing in 90 days<img src="images/cancel.png" className="cursor-pointer" alt="cancel" /></button>
          </div>
        </div>



        <div className='bg-[#F4F5FF] ml-8'>
        <div className="mx-8 p-2 space-y-2 pb-4 ">
        <div className="flex justify-between">
          <p className="font-bold">By Study Level </p> <img src="images/down arrow.png" alt="down arrow" />
        </div>
        <hr />
        <div className="mx-4 space-y-2">
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4" /><p>Undergraduate</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Postgraduate (Master's)</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>PhD / Doctoral</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Postdoctoral Research</p></div>
        </div>
        <hr />
        </div>
  
        <div className="mx-8 p-2 space-y-2">
        <div className="flex justify-between">
          <p className="font-bold max-[700px]:text-sm">By Field of Study </p> <img src="images/down arrow.png" alt="down arrow" />
        </div>
        <hr />
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">STEM (Science, Technology, Engineering, Math)</p> <img src="images/down arrow.png" alt="down arrow" />
          </div>
        </div>
        <hr/>
        <div className="mx-4 space-y-2">
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4" /><p>Computer Science</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Data Science and AI</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Cybersecurity</p></div>
        <div className="flex"><input type="checkbox" className="w-7 max-[700px]:w-4"  /><p>Mechanical Engineering</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Electrical Engineering</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Renewable Energy</p></div>
        <div className="flex"><input type="checkbox" className="w-6 max-[700px]:w-4"  /><p>Biotechnology</p></div>
        </div>
        </div>
        <hr />
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Medical and Health Sciences</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
  
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Business and Finances</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
  
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Social Sciences and Humanities</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
  
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Arts and Creative Fields</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        </div>
  
        <div className="mx-8 p-2 space-y-2 ">
        <div className="flex justify-between">
          <p className="font-bold">By Country </p> <img src="images/down arrow.png" alt="down arrow" />
        </div>
  
        <div className="space-y-2">
        <div>
        <div className="grid grid-cols-3 items-center rounded-md bg-white">
                    <img src="images/search.png" className='col-end-1' />
                    <input type="search" className="p-2 col-start-1 col-span-3 text-xs" placeholder="Search for countries"/>
                    <img src="images/down arrow.png" className='col-start-4' alt="down arrow" />
                </div>
        </div>
       
        <div className=" max-[700px]:mx-0 space-y-2">
        <div className="flex"><input type="checkbox" className="w-8 max-[700px]:w-4" /><p>Ghana</p></div>
        </div>
        </div>
        <hr/>
  
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="font-bold text-xl">By Sponsoring Organization</p> <img src="images/down arrow.png" alt="down arrow" />
          </div>
          <div className="flex justify-between items-center pt-2">
          <p className="">Africa Wide Sponsorships </p> <img src="images/down arrow.png" alt="down arrow" />
          </div>
          <hr />
          <div className="mx-4 space-y-2 pt-2">
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Mastercard Foundation Schlors Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6"  /><p className='col-start-2'>African Union Kwame Nkrumah Scientific Awards</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Ashinaga Africa Initiative</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Mo Ibrahim Foundation Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Mandela Rhodes Scholarship</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>African Leadership University (ALU) Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Graca Machel Trust Women Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Carnegie Corporation of New York – African Academic Scholars Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>DAAD In-Country/In-Region Africa Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Oxford-Weidenfeld & Hoffmann Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Schwarzman Scholars for Africa</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Nelson Mandela World Human Rights Moot Court Scholarship</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Wells Mountain Initiative (WMI) Scholars Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>UNESCO Africa Scholarship Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>University of Cape Town Mastercard Foundation Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>African Women in Science and Engineering (AWSE) Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>University of Pretoria Mastercard Foundation Scholars Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Alliance for African Partnership (AAP) Scholarships</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Tony Elumelu Foundation Entrepreneurship Program</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>YALI Regional Leadership Center Scholarships</p></div>
        </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Nigeria-Wide Schlorships</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">International Organizations</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Government & National Scholarship Programs</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Private & Corporate Sponsorships</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">Academic & University Scholarships</p> <img src="images/up arrow.png" alt="up arrow" />
          </div>
        </div>
        <hr/>
        </div>
        <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center pt-2">
          <p className="max-[700px]:text-sm font-semibold">By Deadline</p> <img src="images/down arrow.png" alt="down arrow" />
          </div>
        </div>
        <hr/>
        <div className="mx-4 space-y-2">
        <div className="flex gap-1"><input type="checkbox" className="w-6" /><p>Closing this week</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Closing in the next 30 days</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Closing in the next 90 days</p></div>
        <div className="grid gap-1"><input type="checkbox" className="w-6" /><p className='col-start-2'>Closing in the next 4-6 months</p></div>
        </div>
        </div>
  
        </div>
        </div>
      </div>
    )
}

export default Sidebar
import { Link } from "react-router-dom"

let Navbar = () => {
    return (
        <div className="">
            
            <div className="flex max-[800px]:flex-col max-[800px]:space-y-4 justify-between items-center ml-8">
                <div className="">
                <Link to={`/signup`}><img src="images/capstone logo.png" className="" alt="logo"/></Link>
                </div>

                <div className="flex items-center gap-5 min-[800px]:text-xl">
                    <p>Home</p>
                    <p>Find Scholarships</p>
                    <p>How It works</p>
                    <p className="flex items-center">Categories <img src="images/down arrow.png" className='col-start-4' alt="down arrow" /></p>
                </div>



                <div className="flex max-[800px]:flex-col items-center min-[800px]:gap-10">
                <div className=" flex items-center gap-5 justify-self-end">
                <img src="images/notification.png" className="cursor-pointer" alt="notification" />
                <button className="bg-[#0000FE] p-2 pr-6 pl-6 rounded-md text-white cursor-pointer max-[700px]:text-xs">Apply Now</button>
                </div>
                    <img src="images/profile.png" className="max-[700px]:scale-60" alt="profile image" />
                </div>

            </div>
        </div>
    )
}

export default Navbar
import { Link } from "react-router-dom"
import { useState } from "react";

let Navbar = () => {
        const [mobileOpen, setMobileOpen] = useState(false);
        const toggleMobile = () => setMobileOpen(v => !v);
    return (
                <div className="">
            
                        <div className="flex max-[800px]:fixed max-[800px]:top-0 max-[800px]:left-0 max-[800px]:right-0 max-[800px]:bg-white max-[800px]:z-40 max-[800px]:px-4 max-[800px]:py-3 max-[800px]:items-center max-[800px]:justify-between max-[800px]:space-x-4 md:static md:px-0 justify-between items-center ml-8">
                <div className="">
                                <div className="flex items-center gap-3">
                                    <button type="button" aria-label="Open menu" onClick={toggleMobile} className="min-[800px]:hidden p-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                    </button>
                                    <Link to={`/signup`}><img src="images/capstone logo.png" className="" alt="logo"/></Link>
                                </div>
                </div>

                                <div className="hidden min-[800px]:flex items-center gap-5 min-[800px]:text-xl">
                                        <p>Home</p>
                                        <p>Find Scholarships</p>
                                        <p>How It works</p>
                                        <p className="flex items-center">Categories <img src="images/down arrow.png" className='col-start-4' alt="down arrow" /></p>
                                </div>



                                <div className="flex items-center gap-4">
                                <div className=" flex items-center gap-5 justify-self-end">
                                <img src="images/notification.png" className="cursor-pointer" alt="notification" />
                                <button className="bg-[#0000FE] p-2 pr-6 pl-6 rounded-md text-white cursor-pointer max-[700px]:text-xs">Apply Now</button>
                                </div>
                                        <img src="images/profile.png" className="max-[700px]:scale-60" alt="profile image" />
                                </div>

            </div>
                        {/* mobile stacked menu, left-aligned */}
                        {mobileOpen && (
                            <div className="max-[800px]:absolute max-[800px]:top-full max-[800px]:left-0 max-[800px]:right-0 max-[800px]:bg-white max-[800px]:z-30 max-[800px]:p-4 max-[800px]:shadow-md">
                                <nav className="flex flex-col gap-3 text-left">
                                    <Link to="/" onClick={() => setMobileOpen(false)} className="block">Home</Link>
                                    <Link to="/scholarships" onClick={() => setMobileOpen(false)} className="block">Find Scholarships</Link>
                                    <Link to="/how-it-works" onClick={() => setMobileOpen(false)} className="block">How It works</Link>
                                    <button type="button" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>Categories <img src="images/down arrow.png" className='w-4 h-4' alt="down arrow" /></button>
                                </nav>
                            </div>
                        )}
        </div>
    )
}

export default Navbar
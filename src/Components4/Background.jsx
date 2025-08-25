const Background = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* If getf.png is meant to be small, contain it */}
            <img 
                src="/getf.png" 
                className="hidden md:block w-800 h-auto object-contain mt-4" 
                alt="background or logo" 
            />
            <img 
                src="/bg-getf.png" 
                className="md:hidden w-full  md:object-cover md:h-[25vh] mt-4" 
                alt="background or logo" 
            />

            {children}
        </div>
    );
};
 
export default Background;


const Background = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* If getf.png is meant to be small, contain it */}
            <img 
                src="/getf.png" 
                className="w-800 h-auto object-contain mt-4" 
                alt="background or logo" 
            />

            {children}
        </div>
    );
};
 
export default Background;


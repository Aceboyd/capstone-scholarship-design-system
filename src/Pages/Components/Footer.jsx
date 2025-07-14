let Footer = () => {
  return (
    <div className="bg-[#03037E] mt-30 pt-10">
      <div className="mx-14  text-white grid grid-cols-3 max-[700px]:grid-cols-1 max-[700px]:text-center max-[700px]:place-self-center">
        <div className="space-y-4">
          <p className="text-2xl">Quick links</p>
          <p>Apply Now</p>
          <p>Eligibity Criteria</p>
          <p>Supporting Document</p>
          <p>FAQs</p>
        </div>

        <div className="space-y-4">
          <p className="text-2xl">Contact Us</p>
          <p>scholarships@capstone.gov.ng</p>
          <p>
            +234 (0) 702 123 456 , <br />
            +234 (0) 809 187 653
          </p>
          <p>
            2nd Floor, Trust House, Ridge, <br /> Lagos, Nigeria
          </p>
          <p>Office Hours:Monday – Friday</p>
        </div>

        <div className="space-y-4">
          <p>Subscribe to our newsletter</p>
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-white border border-white rounded-md p-2"
            />
            <button className="bg-white text-[#0000FE] p-4 rounded-md cursor-pointer hover:bg-gray-300">
              Submit
            </button>
          </form>
          <p>Our socials</p>
          <div className="flex gap-2 pt-2 items-center place-self-center">
            <img src="images/insta.png" alt="insta" />
            <img src="images/whatsapp.png" alt="whatsapp" />
            <img src="images/x.png" alt="x" />
          </div>
        </div>
      </div>

      <hr className="p-[0.02em] mt-4 mb-4 bg-white" />

      <p className="text-[#ffffff30] text-center">
        © 2025 Capstone Scholarship Nigeria. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

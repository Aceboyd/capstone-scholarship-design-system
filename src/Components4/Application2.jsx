import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepsresponsive from './Stepsresponsive';
import Navigationresponsive from './Navigationresponsive';

// Sample data for African countries and their states/provinces
const africanCountries = [
  { name: "Algeria", states: ["Algiers", "Oran", "Constantine", "Annaba"] },
  { name: "Angola", states: ["Luanda", "Benguela", "Huambo", "Lobito"] },
  { name: "Benin", states: ["Porto-Novo", "Cotonou", "Parakou", "Djougou"] },
  { name: "Botswana", states: ["Gaborone", "Francistown", "Molepolole", "Serowe"] },
  { name: "Burkina Faso", states: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora"] },
  { name: "Burundi", states: ["Gitega", "Bujumbura", "Ngozi", "Rutana"] },
  { name: "Cameroon", states: ["Yaoundé", "Douala", "Garoua", "Bamenda"] },
  { name: "Cape Verde", states: ["Praia", "Mindelo", "Santa Maria", "Sal Rei"] },
  { name: "Central African Republic", states: ["Bangui", "Bimbo", "Berbérati", "Carnot"] },
  { name: "Chad", states: ["N'Djamena", "Moundou", "Sarh", "Abéché"] },
  { name: "Comoros", states: ["Moroni", "Mutsamudu", "Fomboni"] },
  { name: "Democratic Republic of the Congo", states: ["Kinshasa", "Lubumbashi", "Goma", "Kisangani"] },
  { name: "Djibouti", states: ["Djibouti City", "Ali Sabieh", "Dikhil", "Tadjoura"] },
  { name: "Egypt", states: ["Cairo", "Alexandria", "Giza", "Luxor"] },
  { name: "Equatorial Guinea", states: ["Malabo", "Bata", "Ebebiyin", "Aconibe"] },
  { name: "Eritrea", states: ["Asmara", "Keren", "Massawa", "Assab"] },
  { name: "Eswatini", states: ["Mbabane", "Manzini", "Big Bend", "Malkerns"] },
  { name: "Ethiopia", states: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar"] },
  { name: "Gabon", states: ["Libreville", "Port-Gentil", "Franceville", "Oyem"] },
  { name: "Gambia", states: ["Banjul", "Serekunda", "Brikama", "Bakau"] },
  { name: "Ghana", states: ["Accra", "Kumasi", "Tamale", "Takoradi"] },
  { name: "Guinea", states: ["Conakry", "Nzérékoré", "Kankan", "Kindia"] },
  { name: "Guinea-Bissau", states: ["Bissau", "Bafatá", "Gabú", "Buba"] },
  { name: "Ivory Coast", states: ["Abidjan", "Yamoussoukro", "Bouaké", "Daloa"] },
  { name: "Kenya", states: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"] },
  { name: "Lesotho", states: ["Maseru", "Teyateyaneng", "Mafeteng", "Mohale's Hoek"] },
  { name: "Liberia", states: ["Monrovia", "Gbarnga", "Buchanan", "Ganta"] },
  { name: "Libya", states: ["Tripoli", "Benghazi", "Misrata", "Tobruk"] },
  { name: "Madagascar", states: ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa"] },
  { name: "Malawi", states: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"] },
  { name: "Mali", states: ["Bamako", "Sikasso", "Mopti", "Timbuktu"] },
  { name: "Mauritania", states: ["Nouakchott", "Nouadhibou", "Rosso", "Atar"] },
  { name: "Mauritius", states: ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe"] },
  { name: "Morocco", states: ["Rabat", "Casablanca", "Fes", "Marrakech"] },
  { name: "Mozambique", states: ["Maputo", "Matola", "Beira", "Nampula"] },
  { name: "Namibia", states: ["Windhoek", "Walvis Bay", "Swakopmund", "Oshakati"] },
  { name: "Niger", states: ["Niamey", "Zinder", "Maradi", "Agadez"] },
  { name: "Nigeria", states: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Kaduna"] },
  { name: "Rwanda", states: ["Kigali", "Gisenyi", "Ruhengeri", "Butare"] },
  { name: "Sao Tome and Principe", states: ["São Tomé", "Neves", "Santana", "Trindade"] },
  { name: "Senegal", states: ["Dakar", "Thiès", "Kaolack", "Ziguinchor"] },
  { name: "Seychelles", states: ["Victoria", "Anse Boileau", "Beau Vallon", "Takamaka"] },
  { name: "Sierra Leone", states: ["Freetown", "Bo", "Kenema", "Makeni"] },
  { name: "Somalia", states: ["Mogadishu", "Hargeisa", "Kismayo", "Baidoa"] },
  { name: "South Africa", states: ["Cape Town", "Johannesburg", "Durban", "Pretoria"] },
  { name: "South Sudan", states: ["Juba", "Wau", "Malakal", "Yei"] },
  { name: "Sudan", states: ["Khartoum", "Omdurman", "Port Sudan", "Kassala"] },
  { name: "Tanzania", states: ["Dodoma", "Dar es Salaam", "Mwanza", "Arusha"] },
  { name: "Togo", states: ["Lomé", "Sokodé", "Kara", "Atakpamé"] },
  { name: "Tunisia", states: ["Tunis", "Sfax", "Sousse", "Kairouan"] },
  { name: "Uganda", states: ["Kampala", "Gulu", "Lira", "Mbale"] },
  { name: "Zambia", states: ["Lusaka", "Kitwe", "Ndola", "Kabwe"] },
  { name: "Zimbabwe", states: ["Harare", "Bulawayo", "Chitungwiza", "Mutare"] },
];

const Application2 = ({ onFormUpdate }) => {
  const navigate = useNavigate();

  // Load saved data from localStorage on mount
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("step1Data");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "",
          lastName: "",
          dobDay: "",
          dobMonth: "",
          dobYear: "",
          email: "",
          nin: "",
          streetAddress: "",
          city: "",
          state: "",
          country: "",
          enrolled: "",
        };
  });

  // Always save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("step1Data", JSON.stringify(formData));
    if (onFormUpdate) {
      onFormUpdate(formData); // update parent progress/status
    }
  }, [formData]);

  // Calculate progress
  const fields = [
    "firstName",
    "lastName",
    "dobDay",
    "dobMonth",
    "dobYear",
    "email",
    "nin",
    "streetAddress",
    "city",
    "state",
    "country",
    "enrolled",
  ];
  const filledFields = fields.filter((f) => formData[f]);
  const progress = Math.round((filledFields.length / fields.length) * 100);

  let appStatus = "Not Started";
  if (progress === 100) appStatus = "Completed";
  else if (progress > 0) appStatus = "In Progress";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProgress = () => {
    localStorage.setItem("step1Data", JSON.stringify(formData));
    alert("Progress saved successfully!");
  };

  const handleBack = () => {
    navigate("/ghanapage");
  };

  const handleNext = () => {
    navigate("/application");
  };

  // Get states based on selected country
  const selectedCountry = africanCountries.find((c) => c.name === formData.country);
  const states = selectedCountry ? selectedCountry.states : [];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <div className="w-[20%] md:hidden">
          <Stepsresponsive progress={progress} appStatus={appStatus} />
        </div>
        <div className="w-[80%] min-h-screen flex flex-col justify-start">
          {/* Main Content Area */}
          <div className="flex-grow flex justify-center px-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
              {/* Left - Personal Details Form */}
              <div className="col-span-2 bg-white p-6">
                <h2 className="text-lg font-bold mb-4">Step 1: Personal Details</h2>

                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <div className="grid grid-cols-3 gap-1 sm:gap-4 mb-4 max-sm:text-[11px]">
                  <select
                    name="dobDay"
                    value={formData.dobDay}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="dobMonth"
                    value={formData.dobMonth}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="dobYear"
                    value={formData.dobYear}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4 max-sm:text-sm"
                />

                {/* NIN */}
                <label className="block text-sm font-medium max-sm:text-sm">
                  National Identity Number (NIN)
                </label>
                <input
                  type="text"
                  name="nin"
                  value={formData.nin}
                  onChange={handleInputChange}
                  placeholder="Enter your National Identity Number (NIN)"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 max-sm:text-sm"
                />
                <p className="text-xs text-blue-600 mt-1">What is my NIN number?</p>

                {/* Residential Address */}
                <label className="block text-sm font-medium mt-4">Residential Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="Street Address"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 mb-4 max-sm:text-sm"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full p-2 border border-gray-300 rounded-md max-md:hidden"
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Country</option>
                    {africanCountries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Question */}
                <label className="block text-sm font-medium mt-4">
                  Are you currently enrolled in a tertiary institution?
                </label>
                <select
                  name="enrolled"
                  value={formData.enrolled}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mt-1"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Right - Buttons */}
              <div className="flex flex-col md:justify-start gap-4 max-md:hidden bg-[#FAFAFF]">
                <button
                  onClick={handleSaveProgress}
                  className="px-4 py-2 bg-[#0000FE] text-white rounded-md w-[100%]"
                >
                  Save Progress
                </button>
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 text-[#0000FE] rounded-md w-full"
                >
                  Back to Homepage
                </button>
                <p className="mt-2 flex items-center justify-end text-sm text-gray-600">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-600">
                    i
                  </span>
                  Note: Applications closes on 26th March 2025
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Back Left, Next Right */}
          <div className="w-full px-4 py-4 flex justify-between items-center bg-[#FAFAFF] max-md:hidden">
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-300 text-black rounded"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Navigationresponsive />
      </div>
      <p className="mt-2 py-8 flex items-center justify-end text-sm text-indigo-700 font-medium md:hidden mx-auto">
        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-700 text-xs text-indigo-700">
          i
        </span>
        Note: Applications close on 26th March 2025
      </p>
    </div>
  );
};

export default Application2;
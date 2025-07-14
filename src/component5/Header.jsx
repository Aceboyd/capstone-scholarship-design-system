import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import menuIcon from '../assets/icon/close-icon.svg';
import closeIcon from '../assets/icon/menu-icon.svg';
import adminImage from '../assets/image/admin.png';
// Import SVGs as image sources (if SVGR is not working)
import viewProfileIcon from '../assets/icon/view-profile.svg';
import avatarIcon from '../assets/icon/avatar.svg';
import languageIcon from '../assets/icon/language.svg';
import themeIcon from '../assets/icon/theme.svg';
import settingsIcon from '../assets/icon/settings.svg';
import switchRoleIcon from '../assets/icon/switch-role.svg';
import logoutIcon from '../assets/icon/logout.svg';

const Header = ({ isCollapsed, setIsCollapsed }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section: Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
          >
            <img
              src={isCollapsed ? menuIcon : closeIcon}
              alt={isCollapsed ? 'Menu icon' : 'Close icon'}
              className="w-8 h-8"
              style={{ objectFit: 'contain' }}
              onError={(e) => {
                e.target.src =
                  isCollapsed
                    ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
              }}
            />
            {isCollapsed ? (
              <Menu size={24} className="hidden text-gray-800 ml-[-24px]" />
            ) : (
              <X size={24} className="hidden text-gray-800 ml-[-24px]" />
            )}
          </button>
          <div className="h-10 md:h-12 w-px bg-gray-300 mx-2"></div>
        </div>

        {/* Center Section: Search */}
        <div className="flex-1 flex justify-center">
          <div className="max-w-3xl md:max-w-[32rem] w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search applicants, programs, etc..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Profile */}
        <div className="relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-4 md:space-x-6 rounded-lg px-4 py-3 md:px-6 md:py-4 transition-colors cursor-pointer"
          >
            <img
              src={adminImage}
              alt="Admin profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              onError={(e) => {
                e.target.src =
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
              }}
            />
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 md:text-base">Princess</p>
              <p className="text-xs text-gray-500 md:text-sm text-start">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1 space-y-1">
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src={viewProfileIcon} alt="View Profile" className="w-5 h-5 mr-2" />
                  View Profile
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src={avatarIcon} alt="Change Avatar" className="w-5 h-5 mr-2" />
                  Change Avatar
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src={languageIcon} alt="Language" className="w-5 h-5 mr-2" />
                  Language: English
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src={themeIcon} alt="Theme" className="w-5 h-5 mr-2" />
                  Theme: Light Mode
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200">
                  <img src={settingsIcon} alt="Account Settings" className="w-5 h-5 mr-2" />
                  Account Settings
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src={switchRoleIcon} alt="Switch Role" className="w-5 h-5 mr-2" />
                  Switch Role
                  <span className="ml-auto">➜</span>
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200">
                  <img src={logoutIcon} alt="Logout" className="w-5 h-5 mr-2" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
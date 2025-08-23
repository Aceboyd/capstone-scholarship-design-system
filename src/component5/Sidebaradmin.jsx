import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  FileText,
  Settings,
  Users,
  MessageSquare,
  FolderOpen,
  BarChart3,
  UserCheck
} from 'lucide-react';

import logo from '../assets/icon/Capstone Logo.svg'; // ✅ Import your SVG logo here

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const navigationItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: FileText, label: 'Application Management', path: '/admin/application-management' },
    { icon: Settings, label: 'Program Setup & Management', path: '/admin/program-setup' },
    { icon: UserCheck, label: 'Reviewer Assignment Panel', path: '/admin/reviewer-assignment' },
    { icon: MessageSquare, label: 'Communication Centre', path: '/admin/communication' },
    { icon: FolderOpen, label: 'Document Centre', path: '/admin/document-centre' },
    { icon: BarChart3, label: 'Reports & Exports', path: '/admin/reports' },
    { icon: Users, label: 'User and Role Management', path: '/admin/user-management' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' }
  ];

  return (
    <div
      className={`text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-14 sm:w-16 lg:w-64' : 'w-32 sm:w-48 lg:w-64'
      } min-h-screen flex flex-col`}
      style={{ background: 'linear-gradient(180deg, #0000FE 0%, #00009F 100%)' }}
    >
      {/* Header Section with Logo */}
      <div className="p-2 sm:p-4 flex items-center justify-start">
        {!isCollapsed ? (
          <img src={logo} alt="Logo" className="h-10 sm:h-14 lg:h-20 w-auto" />
        ) : (
          <img src={logo} alt="Logo" className="h-8 sm:h-14 w-8 sm:w-14" />
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-2 sm:py-4">
        <ul className="space-y-1 px-1 sm:px-3">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = window.location.pathname === item.path;

            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-all duration-200 hover:bg-white group`
                  }
                  title={isCollapsed ? item.label : ''}
                >
                  <IconComponent
                    size={18}
                    className={`flex-shrink-0 text-white group-hover:text-[#0000FE] ${
                      isActive ? 'text-[#0000FE]' : ''
                    }`}
                  />
                  {!isCollapsed && (
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isActive ? 'text-white' : 'text-blue-100'
                      } group-hover:text-[#0000FE] transition-colors whitespace-nowrap`}
                    >
                      {item.label}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

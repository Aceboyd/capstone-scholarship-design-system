import React from 'react';
import { ArrowRight, ChevronDown, MoreVertical } from 'lucide-react';

const Dashboard = () => {
  // Stats Cards Data
  const stats = [
    {
      title: 'Total Applications',
      value: '1,240',
      subtitle: '120+ this month',
      detail: 'Last updated: Today',
      color: 'border-[#040498] bg-[#E6F3FF]',
      textColor: 'text-[#0000DA] bg-[#0000DA]/[0.08]',
      borderStyle: 'border-2 border-dashed'
    },
    {
      title: 'Pending Reviews',
      value: '182',
      subtitle: '7 past deadline',
      color: 'bg-[#FFE8C7]',
      textColor: 'text-[#E07800] bg-[#E07800]/[0.08]',
    },
    {
      title: 'Recommended Applications',
      value: '426',
      subtitle: 'Ready for final decision',
      color: 'bg-[#CDF3ED]',
      textColor: 'text-[#007260] bg-[#007260]/[0.08]',
    },
    {
      title: 'Withdrawn Applications',
      value: '36',
      subtitle: 'Includes 5 disqualified',
      color: 'bg-[#F5DBDE]',
      textColor: 'text-[#C30D24] bg-[#C30D24]/[0.08]',
    }
  ];

  // Program Insights Data
  const programs = [
    { name: 'STEM for Girls', applications: 420, gpa: 3.6, recommended: 180, deadline: 'May 30', status: 'closing' },
    { name: 'Rural Tech Access Fund', applications: 318, gpa: 3.4, recommended: 110, deadline: 'June 10', status: 'open' },
    { name: 'Health & Science Scholarship', applications: 289, gpa: 3.7, recommended: 92, deadline: 'May 28', status: 'deadline' },
    { name: 'Innovation Growth Program', applications: 500, gpa: 3.8, recommended: 205, deadline: 'July 1', status: 'open' },
    { name: 'Engineering Futures Award', applications: 365, gpa: 4.1, recommended: 348, deadline: 'Aug 5', status: 'closing' },
    { name: 'Female Coders Initiative', applications: 198, gpa: 3.9, recommended: 86, deadline: 'May 25', status: 'deadline' }
  ];

  // Alerts Data
  const alerts = [
    {
      type: 'Deadline Alert',
      priority: 'High',
      message: 'STEM for Girls closes in 3 days. 42 applications still pending review.',
      color: 'bg-gray-100 border-l-4 border-[#C30D24]',
      textColor: 'text-gray-900',
      buttonColor: 'bg-gray-100 border border-gray-300 text-[#0000DA]'
    },
    {
      type: 'Reviewer-related Alerts',
      priority: 'Medium',
      message: '10 applications across 2 programs are unassigned. No reviewers have been allocated yet.',
      color: 'bg-gray-100 border-l-4 border-[#E68D25]',
      textColor: 'text-gray-900',
      buttonColor: 'bg-gray-100 border border-gray-300 text-[#0000DA]'
    },
    {
      type: 'Document Alert',
      priority: 'High',
      message: '3 applicants in Health & Science Scholarship have missing recommendation letters.',
      color: 'bg-gray-100 border-l-4 border-[#C30D24]',
      textColor: 'text-gray-900',
      buttonColor: 'bg-gray-100 border border-gray-300 text-[#0000DA]'
    },
    {
      type: 'Reviewer-related Alerts',
      priority: 'Low',
      message: 'Reviewer Rachel is assigned to 62 applications. Reviewer load may be imbalanced.',
      color: 'bg-gray-100 border-l-4 border-blue-600',
      textColor: 'text-gray-900',
      buttonColor: 'bg-gray-100 border border-gray-300 text-[#0000DA]'
    }
  ];

  // Helper function for Program Insights status colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'closing': return 'bg-[#FFE7C7] text-yellow-800';
      case 'open': return 'bg-[#CDF3ED] text-green-800';
      case 'deadline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hello, Princess!</h1>
        <p className="text-gray-600">Your hub for managing scholarships and users.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${stat.color} ${stat.borderStyle || ''}`}
          >
            <div className="mb-1">
              <span className={`inline-block text-3xl font-semibold px-3 py-1 rounded-md ${stat.textColor}`}>
                {stat.value}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{stat.subtitle}</p>
            {stat.detail && <p className="text-xs text-gray-400">{stat.detail}</p>}
          </div>
        ))}
      </div>

      {/* Program Insights */}
      <div className="mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Program Insights</h2>
          <p className="text-gray-600">Track key metrics across scholarship programs. Stay ahead of deadlines and application progress.</p>

          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#FFE7C7] rounded-full"></div>
              <span className="text-sm text-[#E07800]">Closing soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#CDF3ED] rounded-full"></div>
              <span className="text-sm text-[#12806E]">Open</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#F5DBDE] rounded-full"></div>
              <span className="text-sm text-[#C30D24]">Deadline Alert</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Name</th>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Avg. GPA</th>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended</th>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {programs.map((program, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${getStatusColor(program.status).split(' ')[0]}`}></div>
                      <span className="text-sm font-medium text-gray-900">{program.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{program.applications}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{program.gpa}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{program.recommended}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{program.deadline}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <MoreVertical size={16} className="text-black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 text-center mt-[-5px]">
          <button className="inline-flex items-center px-10 py-4 border text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            View more Programs
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Alerts and Reminders */}
      <div className="rounded-xl">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Alerts and Reminders</h2>
              <p className="text-gray-600">Stay informed about upcoming deadlines and incomplete reviews.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Filter by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All</option>
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className={`flex items-center space-x-6 p-6 ${alert.color} rounded-lg`}>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-1">
                  <span className={`text-sm font-medium ${alert.textColor}`}>{alert.type}</span>
                </div>
                <p className={`text-sm ${alert.textColor}`}>{alert.message}</p>
              </div>
              <button className={`px-4 py-2 ${alert.buttonColor} rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium flex items-center`}>
                <span className="text-[#0000DA] mr-2">Actions</span>
                <ChevronDown size={16} className="text-[#0000DA]" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 text-center mt-[-30px]">
        <button className="inline-flex items-center px-10 py-4 border text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
          View all Alerts
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
      <div className="mt-8 text-center border-t border-gray-200 text-sm text-gray-500">
        <h1 className="mt-8">© 2025 Capstone Scholarship Nigeria. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Dashboard;
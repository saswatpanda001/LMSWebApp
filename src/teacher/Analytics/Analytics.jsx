import React from 'react'
import PerformanceTrends from './PerformanceTrends';
import AttendanceTrends from './AttendanceTrends';
const Analytics = () => {
  
    return (
    
        <div>

           
            
            <nav class="bg-white shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 flex items-center">
                                <i class="fas fa-graduation-cap text-primary text-2xl mr-2"></i>
                                <span class="text-xl font-bold text-dark">EduConnect</span>
                            </div>
                        </div>
                        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                            <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Dashboard</a>
                            <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Courses</a>
                            <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Assignments</a>
                            <a href="#" class="text-primary border-b-2 border-primary px-3 py-2 font-medium">Analytics</a>
                            <div class="flex items-center ml-4">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="w-8 h-8 rounded-full mr-2"/>
                                <span class="text-sm font-medium">Dr. Sarah Smith</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
       
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-dark">Student Analytics</h1>
                        <p class="text-gray-600 mt-1">Track performance, attendance trends, and generate reports</p>
                    </div>
                    <div class="mt-4 md:mt-0 flex space-x-3">
                        <div class="relative">
                            <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary">
                                <option>Mathematics 101</option>
                                <option>Chemistry 201</option>
                                <option>Literature 150</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                            <i class="fas fa-file-export mr-2"></i> Export Report
                        </button>
                    </div>
                </div>


                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                
                    <div class="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
                        <h2 class="text-lg font-semibold text-dark mb-4">Class Overview</h2>
                        <div class="space-y-4">
                            <div>
                                <p class="text-sm text-gray-500">Total Students</p>
                                <p class="text-xl font-bold">24</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Average Grade</p>
                                <p class="text-xl font-bold">B+ (86%)</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div class="bg-blue-500 h-2 rounded-full" style={{width: '86%'}}></div>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Attendance Rate</p>
                                <p class="text-xl font-bold">92%</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div class="bg-green-500 h-2 rounded-full" style={{width: "92%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Assignment Completion</p>
                                <p class="text-xl font-bold">88%</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div class="bg-purple-500 h-2 rounded-full" style={{width: "88%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <PerformanceTrends/>


                </div>

                
                <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                    <div class="px-6 py-4 border-b flex items-center justify-between">
                        <h2 class="text-lg font-semibold text-dark">Student Performance</h2>
                        <div class="flex items-center space-x-3">
                            <div class="relative">
                                <input type="text" placeholder="Search students..." class="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-primary"/>
                                <div class="absolute left-3 top-2.5 text-gray-400">
                                    <i class="fas fa-search"></i>
                                </div>
                            </div>
                            <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                <i class="fas fa-filter mr-2"></i> Filter
                            </button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Grade</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exams</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" class="h-10 w-10 rounded-full"/>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">Michael Johnson</div>
                                                <div class="text-sm text-gray-500">ID: 2023001</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-lg font-bold text-dark">A (94%)</div>
                                        <div class="text-xs text-gray-500">+2% from last term</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">96%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "96%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">92%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-blue-500 h-1.5 rounded-full" style={{width: "92%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">98%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-purple-500 h-1.5 rounded-full" style={{width: "98%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Excellent
                                        </span>
                                    </td>
                                </tr>
                                
                    
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" class="h-10 w-10 rounded-full"/>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">Sarah Williams</div>
                                                <div class="text-sm text-gray-500">ID: 2023002</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-lg font-bold text-dark">B+ (87%)</div>
                                        <div class="text-xs text-gray-500">+5% from last term</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">85%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "85%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">88%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-blue-500 h-1.5 rounded-full" style={{width: "88%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">92%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-purple-500 h-1.5 rounded-full" style={{width: "92%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Good
                                        </span>
                                    </td>
                                </tr>
                                

                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" class="h-10 w-10 rounded-full"/>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">David Chen</div>
                                                <div class="text-sm text-gray-500">ID: 2023003</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-lg font-bold text-dark">B- (82%)</div>
                                        <div class="text-xs text-gray-500">-3% from last term</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">78%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "78%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">85%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-blue-500 h-1.5 rounded-full" style={{width: "85%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">88%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-purple-500 h-1.5 rounded-full" style={{width: "88%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Needs Attention
                                        </span>
                                    </td>
                                </tr>
                                
                            
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" class="h-10 w-10 rounded-full"/>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">Emily Rodriguez</div>
                                                <div class="text-sm text-gray-500">ID: 2023004</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-lg font-bold text-dark">C+ (76%)</div>
                                        <div class="text-xs text-gray-500">At Risk</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">72%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "72%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">78%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-blue-500 h-1.5 rounded-full" style={{width: "78%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm">65%</div>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div class="bg-purple-500 h-1.5 rounded-full" style={{width: "65%"}}></div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            Intervention Needed
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="px-6 py-4 border-t">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-700">
                                    Showing <span class="font-medium">1</span> to <span class="font-medium">4</span> of <span class="font-medium">24</span> students
                                </p>
                            </div>
                            <div class="flex space-x-2">
                                <button class="px-3 py-1 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    Previous
                                </button>
                                <button class="px-3 py-1 border rounded-lg text-sm font-medium text-white bg-primary hover:bg-indigo-700">
                                    1
                                </button>
                                <button class="px-3 py-1 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    2
                                </button>
                                <button class="px-3 py-1 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    3
                                </button>
                                <button class="px-3 py-1 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-lg font-semibold text-dark">Attendance Analytics</h2>
                        <div class="flex space-x-3">
                            <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                <i class="fas fa-calendar-alt mr-2"></i> View Calendar
                            </button>
                            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                <i class="fas fa-download mr-2"></i> Export
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <AttendanceTrends/>

                        
                        
                
                        <div>
                            <h3 class="text-md font-medium text-gray-900 mb-3">Attendance Breakdown</h3>
                            <div class="space-y-4">
                                <div>
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-sm font-medium text-gray-700">Present</span>
                                        <span class="text-sm font-medium">92%</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-green-500 h-2.5 rounded-full" style={{width: "92%"}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-sm font-medium text-gray-700">Absent</span>
                                        <span class="text-sm font-medium">5%</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-red-500 h-2.5 rounded-full" style={{width: "5%"}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-sm font-medium text-gray-700">Late</span>
                                        <span class="text-sm font-medium">3%</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-yellow-500 h-2.5 rounded-full" style={{width: "3%"}}></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                <h4 class="text-sm font-medium text-gray-900 mb-2">Top Absent Students</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" class="h-8 w-8 rounded-full mr-2"/>
                                            <span class="text-sm">Emily Rodriguez</span>
                                        </div>
                                        <span class="text-sm font-medium">12 absences</span>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" class="h-8 w-8 rounded-full mr-2"/>
                                            <span class="text-sm">Robert Kim</span>
                                        </div>
                                        <span class="text-sm font-medium">8 absences</span>
                                    </div>
                                    <div class="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="" class="h-8 w-8 rounded-full mr-2"/>
                                            <span class="text-sm">Lisa Thompson</span>
                                        </div>
                                        <span class="text-sm font-medium">6 absences</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-lg font-semibold text-dark mb-4">Generate Custom Reports</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-user-graduate text-indigo-600"></i>
                                </div>
                                <h3 class="font-medium">Student Progress Report</h3>
                            </div>
                            <p class="text-sm text-gray-500 mb-4">Detailed individual student performance across all assignments and assessments.</p>
                            <button class="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                Generate
                            </button>
                        </div>
                        
            
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-chart-line text-green-600"></i>
                                </div>
                                <h3 class="font-medium">Class Performance Report</h3>
                            </div>
                            <p class="text-sm text-gray-500 mb-4">Summary of class performance with averages, trends, and comparisons.</p>
                            <button class="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                Generate
                            </button>
                        </div>
                        
                    
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-calendar-check text-purple-600"></i>
                                </div>
                                <h3 class="font-medium">Attendance Report</h3>
                            </div>
                            <p class="text-sm text-gray-500 mb-4">Comprehensive attendance records with trends and student summaries.</p>
                            <button class="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                Generate
                            </button>
                        </div>
                    </div>
                    
                
                    <div class="mt-6 border-t pt-6">
                        <h3 class="text-md font-medium text-gray-900 mb-4">Create Custom Report</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                                <select class="w-full border rounded-lg p-2 focus:ring-1 focus:ring-primary">
                                    <option>Performance Analysis</option>
                                    <option>Attendance Summary</option>
                                    <option>Assignment Completion</option>
                                    <option>Custom Combination</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                                <select class="w-full border rounded-lg p-2 focus:ring-1 focus:ring-primary">
                                    <option>Current Semester</option>
                                    <option>Last 30 Days</option>
                                    <option>Custom Range</option>
                                    <option>All Time</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Students</label>
                                <select class="w-full border rounded-lg p-2 focus:ring-1 focus:ring-primary">
                                    <option>All Students</option>
                                    <option>Select Individuals</option>
                                    <option>By Performance Tier</option>
                                    <option>By Attendance Level</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Format</label>
                                <select class="w-full border rounded-lg p-2 focus:ring-1 focus:ring-primary">
                                    <option>PDF</option>
                                    <option>Excel</option>
                                    <option>CSV</option>
                                    <option>Google Docs</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-6">
                            <button class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                <i class="fas fa-magic mr-2"></i> Generate Custom Report
                            </button>
                        </div>
                    </div>
                </div>
            </main>
     
            </div>




  );
}

export default Analytics



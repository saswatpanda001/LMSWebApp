import React from 'react'

const TeacherDashboard = () => {
  return (
   


    <div class="bg-gray-50 font-sans">
        <div class="flex h-screen overflow-hidden">

            <div id="sidebar" class="sidebar bg-white shadow-md w-64 flex flex-col">
                <div class="flex items-center justify-between p-4 border-b">
                    <div class="flex items-center">
                        <i class="fas fa-graduation-cap text-primary text-2xl mr-3"></i>
                        <span class="logo-text text-xl font-bold text-dark">EduConnect</span>
                    </div>
                    <button id="toggleSidebar" class="text-gray-500 hover:text-primary">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>

                <nav class="flex-1 overflow-y-auto p-4">
                    <div class="space-y-2">
                        <a href="#" class="flex items-center p-3 rounded-lg bg-primary text-white">
                            <i class="fas fa-tachometer-alt mr-3"></i>
                            <span class="nav-text">Dashboard</span>
                        </a>
                        <a href="#" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-book mr-3"></i>
                            <span class="nav-text">My Courses</span>
                        </a>
                        <a href="#" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-tasks mr-3"></i>
                            <span class="nav-text">Assignments</span>
                        </a>
                        <a href="#" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-user-graduate mr-3"></i>
                            <span class="nav-text">Students</span>
                        </a>
                        <a href="#" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-calendar-alt mr-3"></i>
                            <span class="nav-text">Schedule</span>
                        </a>
                        <a href="#" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-chart-line mr-3"></i>
                            <span class="nav-text">Analytics</span>
                        </a>
                    </div>
                </nav>

                <div class="p-4 border-t">
                    <button id="collapseSidebar" class="w-full flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-chevron-left"></i>
                        <span class="nav-text ml-2">Collapse</span>
                    </button>
                </div>
            </div>

        
            <div class="flex-1 flex flex-col overflow-hidden">
        
                <header class="bg-white shadow-sm z-10">
                    <div class="flex items-center justify-between p-4">
                        <div class="flex items-center">
                            <h1 class="text-xl font-semibold text-dark">Teacher Dashboard</h1>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button class="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
                                <i class="fas fa-bell"></i>
                                <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div class="flex items-center">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="w-8 h-8 rounded-full mr-2"/>
                                <span class="text-sm font-medium">Dr. Sarah Smith</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
            
                    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 class="text-2xl font-bold text-dark mb-2">Welcome back, Dr. Smith!</h2>
                                <p class="text-gray-600">You have <span class="font-medium text-primary">12 assignments</span> to grade and <span class="font-medium text-primary">3 attendance alerts</span> to review.</p>
                            </div>
                            <div class="mt-4 md:mt-0 flex space-x-3">
                                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                    <i class="fas fa-plus mr-2"></i> New Assignment
                                </button>
                                <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                    <i class="fas fa-calendar-alt mr-2"></i> View Calendar
                                </button>
                            </div>
                        </div>
                    </div>

                
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                
                        <div class="bg-white rounded-xl shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-dark">Active Courses</h3>
                                <div class="p-2 bg-indigo-100 rounded-lg">
                                    <i class="fas fa-book text-indigo-600"></i>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-dark mb-2">4</div>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">View all courses</a>
                        </div>

            
                        <div class="bg-white rounded-xl shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-dark">Total Students</h3>
                                <div class="p-2 bg-green-100 rounded-lg">
                                    <i class="fas fa-users text-green-600"></i>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-dark mb-2">87</div>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">View student list</a>
                        </div>

                    
                        <div class="bg-white rounded-xl shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-dark">Pending Grading</h3>
                                <div class="p-2 bg-yellow-100 rounded-lg">
                                    <i class="fas fa-clipboard-check text-yellow-600"></i>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-dark mb-2">12</div>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">Grade assignments</a>
                        </div>

                        <div class="bg-white rounded-xl shadow-sm p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-semibold text-dark">Attendance Alerts</h3>
                                <div class="p-2 bg-red-100 rounded-lg">
                                    <i class="fas fa-exclamation-triangle text-red-600"></i>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-dark mb-2">3</div>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">Review alerts</a>
                        </div>
                    </div>

        
                    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-semibold text-dark">Assignments Needing Grading</h2>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">View all</a>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submissions</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                        
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Trigonometry Problems</div>
                                            <div class="text-sm text-gray-500">Chapter 4 Practice</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Mathematics 101</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Nov 5, 2023</div>
                                            <div class="text-sm text-gray-500">2 days ago</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">22/24</div>
                                            <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                <div class="bg-green-500 h-1.5 rounded-full" style={{width: "92%"}}></div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                Needs Grading
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-primary hover:text-indigo-900">Grade Now</a>
                                        </td>
                                    </tr>

                            
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Chemical Reactions Lab</div>
                                            <div class="text-sm text-gray-500">Experiment #3</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Chemistry 201</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Nov 2, 2023</div>
                                            <div class="text-sm text-gray-500">5 days ago</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">18/20</div>
                                            <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                <div class="bg-green-500 h-1.5 rounded-full" style={{width: "90%"}}></div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                Partially Graded
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-primary hover:text-indigo-900">Continue Grading</a>
                                        </td>
                                    </tr>

                                    
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">Literary Analysis Essay</div>
                                            <div class="text-sm text-gray-500">The Great Gatsby</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Literature 150</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Oct 28, 2023</div>
                                            <div class="text-sm text-gray-500">10 days ago</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">15/18</div>
                                            <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                <div class="bg-green-500 h-1.5 rounded-full" style={{width: "83%"}}></div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                Overdue
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" class="text-primary hover:text-indigo-900">Grade Now</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                
                    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-semibold text-dark">Attendance Alerts</h2>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">View all</a>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                            <div class="border rounded-lg p-4 hover:shadow-md transition">
                                <div class="flex items-start mb-3">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                            <i class="fas fa-user-slash text-red-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h3 class="font-medium">Michael Johnson</h3>
                                        <p class="text-sm text-gray-500">Mathematics 101</p>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 mb-3">
                                    Missed 3 consecutive classes. Last attended Oct 25.
                                </div>
                                <div class="flex space-x-2">
                                    <button class="flex-1 px-3 py-1 bg-white border rounded-lg text-sm hover:bg-gray-50">
                                        Contact
                                    </button>
                                    <button class="flex-1 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-indigo-700">
                                        Review
                                    </button>
                                </div>
                            </div>

                        
                            <div class="border rounded-lg p-4 hover:shadow-md transition">
                                <div class="flex items-start mb-3">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <i class="fas fa-exclamation-triangle text-yellow-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h3 class="font-medium">Sarah Williams</h3>
                                        <p class="text-sm text-gray-500">Chemistry 201</p>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 mb-3">
                                    Attendance rate dropped to 65% (below 70% threshold).
                                </div>
                                <div class="flex space-x-2">
                                    <button class="flex-1 px-3 py-1 bg-white border rounded-lg text-sm hover:bg-gray-50">
                                        Contact
                                    </button>
                                    <button class="flex-1 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-indigo-700">
                                        Review
                                    </button>
                                </div>
                            </div>

                    
                            <div class="border rounded-lg p-4 hover:shadow-md transition">
                                <div class="flex items-start mb-3">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <i class="fas fa-clock text-purple-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h3 class="font-medium">David Chen</h3>
                                        <p class="text-sm text-gray-500">Literature 150</p>
                                    </div>
                                </div>
                                <div class="text-sm text-gray-600 mb-3">
                                    Frequently late (5 times this month). Average 15 minutes late.
                                </div>
                                <div class="flex space-x-2">
                                    <button class="flex-1 px-3 py-1 bg-white border rounded-lg text-sm hover:bg-gray-50">
                                        Contact
                                    </button>
                                    <button class="flex-1 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-indigo-700">
                                        Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-semibold text-dark">Upcoming Classes</h2>
                            <a href="#" class="text-primary text-sm font-medium hover:underline">View full schedule</a>
                        </div>
                        <div class="space-y-4">
            
                            <div class="p-4 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center">
                                            <i class="fas fa-calculator text-indigo-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3 flex-1">
                                        <div class="flex items-center justify-between">
                                            <h3 class="font-medium">Mathematics 101</h3>
                                            <span class="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Today</span>
                                        </div>
                                        <p class="text-sm text-gray-500 mt-1">10:00 AM - 11:30 AM • Room 302</p>
                                        <div class="mt-2 flex items-center text-sm text-gray-500">
                                            <i class="fas fa-book-open mr-2"></i>
                                            <span>Topic: Trigonometric Functions (Chapter 4.1)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                                            <i class="fas fa-flask text-blue-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3 flex-1">
                                        <div class="flex items-center justify-between">
                                            <h3 class="font-medium">Chemistry 201</h3>
                                            <span class="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Tomorrow</span>
                                        </div>
                                        <p class="text-sm text-gray-500 mt-1">1:00 PM - 2:30 PM • Lab 3</p>
                                        <div class="mt-2 flex items-center text-sm text-gray-500">
                                            <i class="fas fa-flask mr-2"></i>
                                            <span>Lab: Chemical Equilibrium Experiment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    </div>


  )
}

export default TeacherDashboard;



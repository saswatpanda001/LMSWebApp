import React from 'react'

const Assignments = () => {
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
                    <a href="#" class="text-primary border-b-2 border-primary px-3 py-2 font-medium">Assignments</a>
                    <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Grades</a>
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
                <h1 class="text-2xl font-bold text-dark">Assignment Hub</h1>
                <p class="text-gray-600 mt-1">Create, manage, and grade assignments for your courses</p>
            </div>
            <div class="mt-4 md:mt-0">
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                    <i class="fas fa-plus mr-2"></i> New Assignment
                </button>
            </div>
        </div>

        <div class="border-b border-gray-200 mb-6">
            <nav class="-mb-px flex space-x-8">
                <a href="#" class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">All Assignments</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Needs Grading</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Graded</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Drafts</a>
            </nav>
        </div>

  
        <div class="flex flex-col lg:flex-row gap-6">
            
            <div class="lg:w-1/3">
                <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                    <div class="bg-gray-50 px-6 py-4 border-b">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-dark">Assignments</h2>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                                    <option>All Courses</option>
                                    <option>Mathematics 101</option>
                                    <option>Chemistry 201</option>
                                    <option>Literature 150</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                 
                        <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-primary">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center">
                                        <i class="fas fa-calculator text-indigo-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium text-gray-900 truncate">Trigonometry Problems</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Grading
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">Mathematics 101 • Due Nov 5</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <span class="mr-3">22/24 submitted</span>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "92%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                
                        <div class="p-4 hover:bg-gray-50 cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                                        <i class="fas fa-flask text-blue-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium text-gray-900 truncate">Chemical Reactions Lab</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Partial
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">Chemistry 201 • Due Nov 2</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <span class="mr-3">18/20 submitted</span>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "90%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                 
                        <div class="p-4 hover:bg-gray-50 cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                                        <i class="fas fa-book text-green-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium text-gray-900 truncate">Literary Analysis Essay</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            Overdue
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">Literature 150 • Due Oct 28</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <span class="mr-3">15/18 submitted</span>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "83%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
     
                        <div class="p-4 hover:bg-gray-50 cursor-pointer">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center">
                                        <i class="fas fa-landmark text-yellow-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1 min-w-0">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium text-gray-900 truncate">History Research Paper</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">History 210 • Due Oct 15</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <span class="mr-3">25/25 submitted</span>
                                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                                            <div class="bg-green-500 h-1.5 rounded-full" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="lg:w-2/3">
                <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                    <div class="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
                        <h2 class="text-lg font-semibold text-dark">Grading: Trigonometry Problems</h2>
                        <div class="flex space-x-3">
                            <button class="px-3 py-1 bg-white border rounded-lg text-sm hover:bg-gray-50">
                                <i class="fas fa-download mr-1"></i> Export
                            </button>
                            <button class="px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-indigo-700">
                                <i class="fas fa-save mr-1"></i> Save Grades
                            </button>
                        </div>
                    </div>
                    <div class="p-6">
                        
                        <div class="mb-6">
                            <h3 class="text-md font-medium text-gray-900 mb-2">Assignment Details</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="text-sm text-gray-500">Course</p>
                                    <p class="text-sm font-medium">Mathematics 101</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500">Due Date</p>
                                    <p class="text-sm font-medium">November 5, 2023 at 11:59 PM</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500">Points Possible</p>
                                    <p class="text-sm font-medium">100</p>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500">Submissions</p>
                                    <p class="text-sm font-medium">22 of 24 (92%)</p>
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500">Instructions</p>
                                <div class="prose prose-sm max-w-none mt-1 text-gray-700">
                                    <p>Complete all 10 trigonometry problems showing all your work. Problems cover:</p>
                                    <ul>
                                        <li>Right triangle trigonometry</li>
                                        <li>Unit circle applications</li>
                                        <li>Graphing sine and cosine functions</li>
                                        <li>Solving trigonometric equations</li>
                                    </ul>
                                    <p>Submit as a single PDF file with your name and student ID in the header.</p>
                                </div>
                            </div>
                        </div>
                        
   
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-md font-medium text-gray-900">Student Submissions</h3>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                                        <option>Sort by: Name (A-Z)</option>
                                        <option>Sort by: Name (Z-A)</option>
                                        <option>Sort by: Submission Date</option>
                                        <option>Sort by: Grade Status</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
    
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
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
                                                <div class="text-sm text-gray-900">Nov 3, 4:32 PM</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Graded
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm font-medium text-gray-900">92/100</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" class="text-primary hover:text-indigo-900">View/Edit</a>
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
                                                <div class="text-sm text-gray-900">Nov 4, 11:45 PM</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    Needs Review
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <input type="text" class="w-16 px-2 py-1 border rounded-lg focus:ring-1 focus:ring-primary" placeholder="Grade"/>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" class="text-primary hover:text-indigo-900">Grade Now</a>
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
                                                <div class="text-sm text-gray-900">Nov 5, 10:15 AM</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    New
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <input type="text" class="w-16 px-2 py-1 border rounded-lg focus:ring-1 focus:ring-primary" placeholder="Grade"/>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" class="text-primary hover:text-indigo-900">Grade Now</a>
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
                                                <div class="text-sm text-gray-500">Not submitted</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    Missing
                                                </span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-500">-</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" class="text-primary hover:text-indigo-900">Remind</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="mt-6 pt-6 border-t flex items-center justify-between">
                                <div class="flex items-center space-x-4">
                                    <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                        <i class="fas fa-envelope mr-2"></i> Message Students
                                    </button>
                                    <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                        <i class="fas fa-download mr-2"></i> Download All
                                    </button>
                                </div>
                                <div>
                                    <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                        <i class="fas fa-check-circle mr-2"></i> Publish Grades
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
         
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-lg font-semibold text-dark mb-4">Grading Rubric & Feedback</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div class="md:col-span-1">
                            <h3 class="text-md font-medium text-gray-900 mb-3">Assignment Rubric</h3>
                            <div class="border rounded-lg overflow-hidden">
                                <div class="bg-gray-50 px-4 py-3 border-b">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm font-medium">Trigonometry Problems (100 pts)</span>
                                        <button class="text-primary text-sm">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="mb-4">
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Accuracy (50 pts)</label>
                                        <input type="range" min="0" max="50" value="45" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>0</span>
                                            <span>25</span>
                                            <span>50</span>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Methodology (30 pts)</label>
                                        <input type="range" min="0" max="30" value="25" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>0</span>
                                            <span>15</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Presentation (20 pts)</label>
                                        <input type="range" min="0" max="20" value="18" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>0</span>
                                            <span>10</span>
                                            <span>20</span>
                                        </div>
                                    </div>
                                    <div class="pt-4 border-t">
                                        <div class="flex justify-between">
                                            <span class="text-sm font-medium">Total Score</span>
                                            <span class="text-sm font-bold">88/100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div class="md:col-span-2">
                            <h3 class="text-md font-medium text-gray-900 mb-3">Feedback for Sarah Williams</h3>
                            <div class="border rounded-lg">
                                <div class="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                                    <h4 class="font-medium">Written Feedback</h4>
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-gray-500 hover:text-primary">
                                            <i class="fas fa-bold"></i>
                                        </button>
                                        <button class="p-2 text-gray-500 hover:text-primary">
                                            <i class="fas fa-italic"></i>
                                        </button>
                                        <button class="p-2 text-gray-500 hover:text-primary">
                                            <i class="fas fa-link"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <textarea class="w-full h-40 p-3 border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Enter your feedback here...">
Good work overall Sarah! Here are some specific comments:

Strengths:
- Excellent work on problems 1-4 and 7-8
- Clear and logical methodology shown
- Well-formatted submission

Areas for Improvement:
- Problem 5: Forgot to convert degrees to radians
- Problem 6: Small calculation error in final step
- Problem 9: Graph needs proper labeling

Overall great effort! Please review the trigonometric identities before the next assignment.
                                    </textarea>
                                </div>
                            </div>
                            
                            <div class="mt-4">
                                <h4 class="text-sm font-medium text-gray-900 mb-2">Annotation Tools</h4>
                                <div class="grid grid-cols-4 gap-2">
                                    <button class="p-2 border rounded-lg hover:bg-gray-50">
                                        <i class="fas fa-highlighter text-yellow-500"></i>
                                        <span class="block text-xs mt-1">Highlight</span>
                                    </button>
                                    <button class="p-2 border rounded-lg hover:bg-gray-50">
                                        <i class="fas fa-pen text-blue-500"></i>
                                        <span class="block text-xs mt-1">Draw</span>
                                    </button>
                                    <button class="p-2 border rounded-lg hover:bg-gray-50">
                                        <i class="fas fa-comment text-green-500"></i>
                                        <span class="block text-xs mt-1">Comment</span>
                                    </button>
                                    <button class="p-2 border rounded-lg hover:bg-gray-50">
                                        <i class="fas fa-stamp text-red-500"></i>
                                        <span class="block text-xs mt-1">Stamp</span>
                                    </button>
                                </div>
                            </div>
                            
                         
                            <div class="mt-4">
                                <h4 class="text-sm font-medium text-gray-900 mb-2">Common Feedback</h4>
                                <div class="flex flex-wrap gap-2">
                                    <button class="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200">
                                        <i class="fas fa-plus mr-1 text-xs"></i> Great work!
                                    </button>
                                    <button class="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200">
                                        <i class="fas fa-plus mr-1 text-xs"></i> Check calculations
                                    </button>
                                    <button class="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200">
                                        <i class="fas fa-plus mr-1 text-xs"></i> Show more steps
                                    </button>
                                    <button class="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200">
                                        <i class="fas fa-plus mr-1 text-xs"></i> Review concept
                                    </button>
                                </div>
                            </div>
                            
                           
                            <div class="mt-6 pt-4 border-t flex justify-end">
                                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                    <i class="fas fa-save mr-2"></i> Save Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</div>


  );
}

export default Assignments
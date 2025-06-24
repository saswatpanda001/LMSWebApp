import React from 'react'
import Navigation from '../navigation/Navigation'

const Courses = () => {
  return (
    <div class="bg-gray-50 font-sans">
        <Navigation/>
        



    <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-dark">Mathematics - Grade 11</h1>
                    <p class="text-gray-600 mt-1">Dr. Sarah Smith | Class 1,  2023</p>
                </div>
                <div class="mt-4 md:mt-0 flex items-center space-x-3">
                    <div class="bg-green-50 px-3 py-1 rounded-full">
                        <span class="text-green-700 text-sm font-medium">In Progress</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <i class="fas fa-users mr-1"></i>
                        <span class="text-sm">24 Students</span>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700">Course Completion</span>
                    <span class="text-sm font-medium text-primary">42%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '42%' }}></div>
                </div>
            </div>
            

            <div class="mt-6 border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <a href="#" class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Overview</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Syllabus</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Materials</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Lectures</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Assignments</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Grades</a>
                </nav>
            </div>
        </div>
    </div>


    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-6">

            <div class="lg:w-2/3">

                <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 class="text-xl font-semibold text-dark mb-4">Course Overview</h2>
                    <p class="text-gray-600 mb-4">
                        This course covers fundamental concepts in algebra, geometry, and introductory calculus. 
                        Students will develop problem-solving skills and mathematical reasoning abilities.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <div class="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-user-tie text-purple-600"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium">Instructor</h3>
                                    <p class="text-sm text-gray-500">Dr. Sarah Smith</p>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <div class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-calendar-alt text-blue-600"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium">Schedule</h3>
                                    <p class="text-sm text-gray-500">Mon & Wed, 10:00-11:30</p>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <div class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-book text-green-600"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium">Textbook</h3>
                                    <p class="text-sm text-gray-500">Advanced Mathematics 11</p>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <div class="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-award text-yellow-600"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium">Credits</h3>
                                    <p class="text-sm text-gray-500">5 Credit Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-semibold text-dark">Recent Announcements</h2>
                        <a href="#" class="text-primary text-sm font-medium hover:underline">View All</a>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="p-4 border rounded-lg hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <i class="fas fa-bullhorn text-blue-500"></i>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h3 class="font-medium">Midterm Exam Schedule</h3>
                                    <p class="text-sm text-gray-500 mt-1">The midterm exam will be held on November 15th in Room 302. Please arrive 15 minutes early.</p>
                                    <div class="flex items-center mt-2 text-xs text-gray-400">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Posted 2 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 border rounded-lg hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <i class="fas fa-book text-green-500"></i>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h3 class="font-medium">Chapter 4 Materials Uploaded</h3>
                                    <p class="text-sm text-gray-500 mt-1">The lecture slides and practice problems for Chapter 4 are now available in the Materials section.</p>
                                    <div class="flex items-center mt-2 text-xs text-gray-400">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Posted 1 week ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6">
                    <h2 class="text-xl font-semibold text-dark mb-4">Upcoming Lectures</h2>
                    
                    <div class="overflow-hidden border rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materials</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Mon, Oct 30</div>
                                        <div class="text-sm text-gray-500">10:00-11:30</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Trigonometric Functions</div>
                                        <div class="text-sm text-gray-500">Chapter 4.1</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Slides
                                        </span>
                                        <span class="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Problems
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Upcoming
                                        </span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Wed, Oct 25</div>
                                        <div class="text-sm text-gray-500">10:00-11:30</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Quadratic Equations</div>
                                        <div class="text-sm text-gray-500">Chapter 3.4</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Slides
                                        </span>
                                        <span class="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                            Video
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Mon, Oct 23</div>
                                        <div class="text-sm text-gray-500">10:00-11:30</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">Polynomial Functions</div>
                                        <div class="text-sm text-gray-500">Chapter 3.3</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Slides
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-4 text-right">
                        <a href="#" class="text-primary text-sm font-medium hover:underline">View all lectures</a>
                    </div>
                </div>
            </div>


            <div class="lg:w-1/3">

                <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 class="text-xl font-semibold text-dark mb-4">Your Progress</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Lectures Completed</span>
                                <span class="text-sm font-medium text-primary">8/20</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary h-2.5 rounded-full"  style={{ width: '42%' }} ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Assignments Submitted</span>
                                <span class="text-sm font-medium text-primary">5/12</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-primary h-2.5 rounded-full" style={{ width: '40%'}} ></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Average Grade</span>
                                <span class="text-sm font-medium text-primary">B+ (85%)</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-yellow-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-6 border-t">
                        <h3 class="text-sm font-medium text-gray-700 mb-3">Current Grade Breakdown</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Assignments</span>
                                <span class="text-sm font-medium">83%</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Quizzes</span>
                                <span class="text-sm font-medium">88%</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Participation</span>
                                <span class="text-sm font-medium">90%</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 class="text-xl font-semibold text-dark mb-4">Quick Resources</h2>
                    
                    <div class="space-y-3">
                        <a href="#" class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                                <i class="fas fa-file-pdf text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="font-medium">Course Syllabus</h3>
                                <p class="text-sm text-gray-500">PDF • 250KB</p>
                            </div>
                        </a>
                        
                        <a href="#" class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div class="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                                <i class="fas fa-book text-purple-600"></i>
                            </div>
                            <div>
                                <h3 class="font-medium">Textbook (Digital)</h3>
                                <p class="text-sm text-gray-500">Online Access</p>
                            </div>
                        </a>
                        
                        <a href="#" class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                                <i class="fas fa-video text-green-600"></i>
                            </div>
                            <div>
                                <h3 class="font-medium">Lecture Recordings</h3>
                                <p class="text-sm text-gray-500">8 Videos</p>
                            </div>
                        </a>
                        
                        <a href="#" class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                            <div class="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center mr-3">
                                <i class="fas fa-question-circle text-yellow-600"></i>
                            </div>
                            <div>
                                <h3 class="font-medium">Practice Problems</h3>
                                <p class="text-sm text-gray-500">12 Sets</p>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6">
                    <h2 class="text-xl font-semibold text-dark mb-4">Instructor</h2>
                    
                    <div class="flex items-start">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Sarah Smith" className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 class="font-medium">Dr. Sarah Smith</h3>
                            <p class="text-sm text-gray-500 mb-2">Mathematics Department</p>
                            <p class="text-sm text-gray-600 mb-3">PhD in Applied Mathematics, 10 years teaching experience</p>
                            
                            <div class="flex space-x-3">
                                <a href="#" class="text-primary text-sm font-medium hover:underline flex items-center">
                                    <i class="far fa-envelope mr-1"></i> Message
                                </a>
                                <a href="#" class="text-primary text-sm font-medium hover:underline flex items-center">
                                    <i class="far fa-calendar-alt mr-1"></i> Office Hours
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default Courses
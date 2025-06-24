import React from 'react'
import Navigation from '../navigation/Navigation';

const Assignment = () => {
  return (
    <div class="bg-gray-50 font-sans">
        <Navigation/>
        

    
    
    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
       
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
                <h1 class="text-2xl font-bold text-dark">Assignments</h1>
                <p class="text-gray-600 mt-1">View, submit, and track your assignments</p>
            </div>
            <div class="mt-4 md:mt-0">
                <div class="relative">
                    <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>All Courses</option>
                        <option>Mathematics</option>
                        <option>Chemistry</option>
                        <option>Literature</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="border-b border-gray-200 mb-6">
            <nav class="-mb-px flex space-x-8">
                <a href="#" class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">All Assignments</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Pending</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Submitted</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Graded</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Late</a>
            </nav>
        </div>

       
        <div class="bg-white shadow-sm rounded-lg overflow-hidden">

            <div class="bg-gray-50 px-6 py-4 border-b">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="mb-4 md:mb-0">
                        <div class="relative">
                            <input type="text" placeholder="Search assignments..." class="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-primary"/>
                            <div class="absolute left-3 top-2.5 text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-3">
                        <button class="flex items-center px-3 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">
                            <i class="fas fa-filter mr-2 text-gray-500"></i>
                            <span>Filter</span>
                        </button>
                        <button class="flex items-center px-3 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">
                            <i class="fas fa-sort mr-2 text-gray-500"></i>
                            <span>Sort</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center mr-4">
                                        <i class="fas fa-calculator text-indigo-600"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">Trigonometry Problems</div>
                                        <div class="text-sm text-gray-500">Chapter 4 Practice</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Mathematics</div>
                                <div class="text-sm text-gray-500">Dr. Smith</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Nov 5, 2023</div>
                                <div class="text-sm text-gray-500">11:59 PM</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Pending
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                -
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-primary hover:text-indigo-900 mr-3">View</a>
                                <a href="#" class="text-primary hover:text-indigo-900">Submit</a>
                            </td>
                        </tr>

                       
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                                        <i class="fas fa-flask text-blue-600"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">Lab Report #3</div>
                                        <div class="text-sm text-gray-500">Chemical Reactions</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Chemistry</div>
                                <div class="text-sm text-gray-500">Prof. Johnson</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Nov 2, 2023</div>
                                <div class="text-sm text-gray-500">11:59 PM</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Submitted
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                -
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-primary hover:text-indigo-900">View</a>
                            </td>
                        </tr>

     
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mr-4">
                                        <i class="fas fa-book text-green-600"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">Literary Analysis</div>
                                        <div class="text-sm text-gray-500">The Great Gatsby</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Literature</div>
                                <div class="text-sm text-gray-500">Dr. Williams</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Oct 28, 2023</div>
                                <div class="text-sm text-gray-500">11:59 PM</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                    Graded
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">A- (90%)</div>
                                <div class="text-xs text-gray-500">Full feedback available</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-primary hover:text-indigo-900">Review</a>
                            </td>
                        </tr>

                       
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 bg-red-100 rounded-md flex items-center justify-center mr-4">
                                        <i class="fas fa-calculator text-red-600"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">Algebra Quiz</div>
                                        <div class="text-sm text-gray-500">Chapter 3 Review</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Mathematics</div>
                                <div class="text-sm text-gray-500">Dr. Smith</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Oct 20, 2023</div>
                                <div class="text-sm text-gray-500">11:59 PM</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                    Late
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">C+ (75%)</div>
                                <div class="text-xs text-gray-500">Late penalty applied</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-primary hover:text-indigo-900">Review</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-white px-6 py-4 border-t">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="mb-4 md:mb-0">
                        <p class="text-sm text-gray-700">
                            Showing <span class="font-medium">1</span> to <span class="font-medium">4</span> of <span class="font-medium">12</span> assignments
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

      
        <div class="hidden bg-white shadow-sm rounded-lg overflow-hidden text-center py-12">
            <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-tasks text-gray-400 text-3xl"></i>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
            <p class="text-gray-500 mb-6">You don't have any assignments matching your current filters.</p>
            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                Reset filters
            </button>
        </div>
    </main>
</div>
  )
}

export default Assignment;



import React from 'react'
import Navigation from '../navigation/Navigation';

const Grades = () => {
  return (
    
    <div class="bg-gray-50 font-sans">
        <Navigation/>
        

        
    
        <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">

            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h1 class="text-2xl font-bold text-dark">Grades & Performance</h1>
                    <p class="text-gray-600 mt-1">Track your academic progress and achievements</p>
                </div>
                <div class="mt-4 md:mt-0 flex space-x-3">
                    <button class="flex items-center px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50">
                        <i class="fas fa-download mr-2 text-gray-500"></i>
                        <span>Export Report</span>
                    </button>
                    <button class="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                        <i class="fas fa-print mr-2"></i>
                        <span>Print Report Card</span>
                    </button>
                </div>
            </div>

        
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

                <div class="bg-white rounded-lg shadow-sm p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-500">CURRENT GPA</h3>
                        <div class="px-2 py-1 bg-green-100 rounded-full">
                            <span class="text-xs font-medium text-green-800">+2.5%</span>
                        </div>
                    </div>
                    <div class="flex items-end">
                        <span class="text-3xl font-bold text-dark mr-2">3.72</span>
                        <span class="text-sm text-gray-500 mb-1">/ 4.0 scale</span>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center justify-between text-sm mb-1">
                            <span class="text-gray-500">Last term</span>
                            <span class="font-medium">3.65</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-500 h-2 rounded-full" sstyle={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-500">AVERAGE GRADE</h3>
                        <div class="px-2 py-1 bg-blue-100 rounded-full">
                            <span class="text-xs font-medium text-blue-800">B+</span>
                        </div>
                    </div>
                    <div class="flex items-end">
                        <span class="text-3xl font-bold text-dark mr-2">87%</span>
                        <span class="text-sm text-gray-500 mb-1">across all courses</span>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center justify-between text-sm mb-1">
                            <span class="text-gray-500">Class average</span>
                            <span class="font-medium">82%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-500 h-2 rounded-full"  style={{ width: '87%' }}></div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-500">COMPLETED COURSES</h3>
                        <i class="fas fa-check-circle text-green-500"></i>
                    </div>
                    <div class="flex items-end">
                        <span class="text-3xl font-bold text-dark mr-2">12</span>
                        <span class="text-sm text-gray-500 mb-1">total courses</span>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center justify-between text-sm mb-1">
                            <span class="text-gray-500">This year</span>
                            <span class="font-medium">5</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-500 h-2 rounded-full"  style={{ width: '42%' }}></div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-500">ATTENDANCE RATE</h3>
                        <div class="px-2 py-1 bg-purple-100 rounded-full">
                            <span class="text-xs font-medium text-purple-800">Good</span>
                        </div>
                    </div>
                    <div class="flex items-end">
                        <span class="text-3xl font-bold text-dark mr-2">94%</span>
                        <span class="text-sm text-gray-500 mb-1">this class</span>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center justify-between text-sm mb-1">
                            <span class="text-gray-500">Last class</span>
                            <span class="font-medium">91%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-500 h-2 rounded-full"  style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div class="px-6 py-4 border-b">
                    <h2 class="text-lg font-semibold text-dark">Grades by Course</h2>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exams</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Grade</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
            
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                                            <i class="fas fa-calculator text-indigo-600"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">Mathematics</div>
                                            <div class="text-sm text-gray-500">Algebra & Trigonometry</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Dr. Sarah Smith</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">88%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-blue-500 h-1.5 rounded-full"  style={{ width: '88%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">92%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-green-500 h-1.5 rounded-full"  style={{ width: '92%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-lg font-bold text-dark">A- (90%)</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        In Progress
                                    </span>
                                </td>
                            </tr>


                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                                            <i class="fas fa-flask text-blue-600"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">Chemistry</div>
                                            <div class="text-sm text-gray-500">Organic Chemistry I</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Prof. Michael Johnson</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">85%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-blue-500 h-1.5 rounded-full"  style={{ width: '85%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">82%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-green-500 h-1.5 rounded-full"   style={{ width: '82%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-lg font-bold text-dark">B+ (83%)</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        In Progress
                                    </span>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                                            <i class="fas fa-book text-green-600"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">Literature</div>
                                            <div class="text-sm text-gray-500">American Classics</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Dr. Emily Williams</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">91%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-blue-500 h-1.5 rounded-full"  style={{ width: '91%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">94%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-green-500 h-1.5 rounded-full"  style={{ width: '94%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-lg font-bold text-dark">A (93%)</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        In Progress
                                    </span>
                                </td>
                            </tr>

                    
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10 bg-yellow-100 rounded-md flex items-center justify-center mr-3">
                                            <i class="fas fa-landmark text-yellow-600"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">History</div>
                                            <div class="text-sm text-gray-500">World History II</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Prof. Robert Chen</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">89%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-blue-500 h-1.5 rounded-full"  style={{ width: '91%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">87%</div>
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                        <div class="bg-green-500 h-1.5 rounded-full"  style={{ width: '87%' }}></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-lg font-bold text-dark">A- (88%)</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <div class="px-6 py-4 border-b">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold text-dark">Report Cards</h2>
                        <button class="text-primary text-sm font-medium hover:underline">View All</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

                    <div class="border rounded-lg overflow-hidden hover:shadow-md transition">
                        <div class="bg-primary p-4 text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="font-medium">class 1, 2023</h3>
                                <span class="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">Current</span>
                            </div>
                            <p class="text-sm opacity-90 mt-1">November 15, 2023</p>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">GPA</span>
                                <span class="text-sm font-medium">3.72</span>
                            </div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">Courses</span>
                                <span class="text-sm font-medium">5</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Status</span>
                                <span class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">In Progress</span>
                            </div>
                            <div class="mt-4 pt-4 border-t flex justify-between">
                                <button class="text-primary text-sm font-medium hover:underline">View Details</button>
                                <button class="text-primary text-sm font-medium hover:underline flex items-center">
                                    <i class="fas fa-download mr-1"></i> PDF
                                </button>
                            </div>
                        </div>
                    </div>

    
                    <div class="border rounded-lg overflow-hidden hover:shadow-md transition">
                        <div class="bg-gray-700 p-4 text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="font-medium">class 2, 2022</h3>
                            </div>
                            <p class="text-sm opacity-90 mt-1">June 10, 2023</p>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">GPA</span>
                                <span class="text-sm font-medium">3.65</span>
                            </div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">Courses</span>
                                <span class="text-sm font-medium">6</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Status</span>
                                <span class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Completed</span>
                            </div>
                            <div class="mt-4 pt-4 border-t flex justify-between">
                                <button class="text-primary text-sm font-medium hover:underline">View Details</button>
                                <button class="text-primary text-sm font-medium hover:underline flex items-center">
                                    <i class="fas fa-download mr-1"></i> PDF
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="border rounded-lg overflow-hidden hover:shadow-md transition">
                        <div class="bg-gray-700 p-4 text-white">
                            <div class="flex items-center justify-between">
                                <h3 class="font-medium">class 1, 2022</h3>
                            </div>
                            <p class="text-sm opacity-90 mt-1">January 15, 2023</p>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">GPA</span>
                                <span class="text-sm font-medium">3.58</span>
                            </div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-gray-500">Courses</span>
                                <span class="text-sm font-medium">5</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Status</span>
                                <span class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Completed</span>
                            </div>
                            <div class="mt-4 pt-4 border-t flex justify-between">
                                <button class="text-primary text-sm font-medium hover:underline">View Details</button>
                                <button class="text-primary text-sm font-medium hover:underline flex items-center">
                                    <i class="fas fa-download mr-1"></i> PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Grades;
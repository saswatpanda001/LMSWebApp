import React from 'react'
import Navigation from '../navigation/Navigation';


const Schedule = () => {
  return (
    
<div class="bg-gray-50 font-sans">

    <Navigation/>
    

    


    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
       
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
                <h1 class="text-2xl font-bold text-dark">My Schedule</h1>
                <p class="text-gray-600 mt-1">View your classes, exams, and deadlines</p>
            </div>
            <div class="mt-4 md:mt-0 flex items-center space-x-3">
                <button class="px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50">
                    <i class="fas fa-calendar-alt mr-2"></i>Add to Calendar
                </button>
                <div class="relative">
                    <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>Week View</option>
                        <option>Day View</option>
                        <option>Month View</option>
                        <option>List View</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>

      
        <div class="border-b border-gray-200 mb-6">
            <nav class="-mb-px flex space-x-8">
                <a href="#" class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Classes</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Exams</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Deadlines</a>
                <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">All Events</a>
            </nav>
        </div>

        
        <div class="flex flex-col lg:flex-row gap-6">
            
            <div class="lg:w-1/3">
                <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-dark">November 2023</h2>
                        <div class="flex space-x-2">
                            <button class="p-2 rounded-lg hover:bg-gray-100">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="p-2 rounded-lg hover:bg-gray-100">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-7 gap-1 mb-2">
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Sun</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Mon</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Tue</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Wed</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Thu</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Fri</div>
                        <div class="text-xs text-gray-500 font-medium text-center py-1">Sat</div>
                    </div>
                    <div class="grid grid-cols-7 gap-1">
                        <div class="text-center py-2 text-gray-400">29</div>
                        <div class="text-center py-2 text-gray-400">30</div>
                        <div class="text-center py-2 text-gray-400">31</div>
                        <div class="text-center py-2 calendar-day">1</div>
                        <div class="text-center py-2 calendar-day">2</div>
                        <div class="text-center py-2 calendar-day">3</div>
                        <div class="text-center py-2 calendar-day">4</div>
                        <div class="text-center py-2 calendar-day">5</div>
                        <div class="text-center py-2 calendar-day">6</div>
                        <div class="text-center py-2 calendar-day has-events">7</div>
                        <div class="text-center py-2 calendar-day has-events">8</div>
                        <div class="text-center py-2 calendar-day has-events">9</div>
                        <div class="text-center py-2 calendar-day">10</div>
                        <div class="text-center py-2 calendar-day">11</div>
                        <div class="text-center py-2 calendar-day today has-events relative">12</div>
                        <div class="text-center py-2 calendar-day has-events">13</div>
                        <div class="text-center py-2 calendar-day has-events">14</div>
                        <div class="text-center py-2 calendar-day has-events">15</div>
                        <div class="text-center py-2 calendar-day has-events">16</div>
                        <div class="text-center py-2 calendar-day">17</div>
                        <div class="text-center py-2 calendar-day">18</div>
                        <div class="text-center py-2 calendar-day has-events">19</div>
                        <div class="text-center py-2 calendar-day has-events">20</div>
                        <div class="text-center py-2 calendar-day has-events">21</div>
                        <div class="text-center py-2 calendar-day has-events">22</div>
                        <div class="text-center py-2 calendar-day">23</div>
                        <div class="text-center py-2 calendar-day">24</div>
                        <div class="text-center py-2 calendar-day has-events">25</div>
                        <div class="text-center py-2 calendar-day has-events">26</div>
                        <div class="text-center py-2 calendar-day has-events">27</div>
                        <div class="text-center py-2 calendar-day">28</div>
                        <div class="text-center py-2 calendar-day">29</div>
                        <div class="text-center py-2 calendar-day">30</div>
                        <div class="text-center py-2 text-gray-400">1</div>
                        <div class="text-center py-2 text-gray-400">2</div>
                    </div>
                </div>

               
                <div class="bg-white rounded-lg shadow-sm p-6">
                    <h2 class="text-lg font-semibold text-dark mb-4">Upcoming Events</h2>
                    <div class="space-y-4">
                        
                        <div class="p-3 border rounded-lg hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <i class="fas fa-chalkboard-teacher text-indigo-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h3 class="font-medium">Mathematics Class</h3>
                                    <p class="text-sm text-gray-500 mt-1">Mon, Nov 13 • 10:00 AM - 11:30 AM</p>
                                    <p class="text-sm text-gray-500">Room 302 • Dr. Smith</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="p-3 border rounded-lg hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                        <i class="fas fa-clipboard-list text-red-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h3 class="font-medium">Chemistry Assignment Due</h3>
                                    <p class="text-sm text-gray-500 mt-1">Tue, Nov 14 • 11:59 PM</p>
                                    <p class="text-sm text-gray-500">Lab Report #3</p>
                                </div>
                            </div>
                        </div>

                        <div class="p-3 border rounded-lg hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <i class="fas fa-book text-yellow-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <h3 class="font-medium">Literature Midterm</h3>
                                    <p class="text-sm text-gray-500 mt-1">Wed, Nov 15 • 9:00 AM - 11:00 AM</p>
                                    <p class="text-sm text-gray-500">Exam Hall A • Dr. Williams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="mt-4 inline-block text-primary text-sm font-medium hover:underline">View all events</a>
                </div>
            </div>

           
            <div class="lg:w-2/3">
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="px-6 py-4 border-b">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-dark">Weekly Schedule</h2>
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-500">Week of Nov 12 - Nov 18</span>
                                <button class="p-2 rounded-lg hover:bg-gray-100">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="p-2 rounded-lg hover:bg-gray-100">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="w-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday<br/><span class="font-normal">Nov 13</span></th>
                                    <th class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday<br/><span class="font-normal">Nov 14</span></th>
                                    <th class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday<br/><span class="font-normal">Nov 15</span></th>
                                    <th class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday<br/><span class="font-normal">Nov 16</span></th>
                                    <th class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday<br/><span class="font-normal">Nov 17</span></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                <tr class="border-b">
                                    <td class="py-4 text-sm text-gray-500 align-top">8:00 AM</td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top">
                                        <div class="bg-red-50 border-l-4 border-red-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Literature Midterm</div>
                                            <div class="text-xs text-gray-500">9:00 AM - 11:00 AM</div>
                                            <div class="text-xs text-gray-500">Exam Hall A</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top"></td>
                                </tr>
                                
                        
                                <tr class="border-b">
                                    <td class="py-4 text-sm text-gray-500 align-top">10:00 AM</td>
                                    <td class="py-4 align-top">
                                        <div class="bg-indigo-50 border-l-4 border-indigo-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Mathematics</div>
                                            <div class="text-xs text-gray-500">10:00 AM - 11:30 AM</div>
                                            <div class="text-xs text-gray-500">Room 302</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top">
                                        <div class="bg-green-50 border-l-4 border-green-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Literature</div>
                                            <div class="text-xs text-gray-500">10:00 AM - 11:30 AM</div>
                                            <div class="text-xs text-gray-500">Room 105</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top">
                                        <div class="bg-green-50 border-l-4 border-green-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Literature</div>
                                            <div class="text-xs text-gray-500">10:00 AM - 11:30 AM</div>
                                            <div class="text-xs text-gray-500">Room 105</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                </tr>
                                
                   
                                <tr class="border-b">
                                    <td class="py-4 text-sm text-gray-500 align-top">1:00 PM</td>
                                    <td class="py-4 align-top">
                                        <div class="bg-blue-50 border-l-4 border-blue-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Chemistry</div>
                                            <div class="text-xs text-gray-500">1:00 PM - 2:30 PM</div>
                                            <div class="text-xs text-gray-500">Lab 3</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top">
                                        <div class="bg-blue-50 border-l-4 border-blue-400 p-2 rounded-r">
                                            <div class="text-sm font-medium">Chemistry</div>
                                            <div class="text-xs text-gray-500">1:00 PM - 2:30 PM</div>
                                            <div class="text-xs text-gray-500">Lab 3</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top"></td>
                                </tr>
                                
              
                                <tr>
                                    <td class="py-4 text-sm text-gray-500 align-top">Deadlines</td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top">
                                        <div class="bg-red-100 border-l-4 border-red-500 p-2 rounded-r">
                                            <div class="text-sm font-medium">Chemistry Lab Report</div>
                                            <div class="text-xs text-gray-700">Due by 11:59 PM</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                    <td class="py-4 align-top">
                                        <div class="bg-purple-100 border-l-4 border-purple-500 p-2 rounded-r">
                                            <div class="text-sm font-medium">Math Problem Set</div>
                                            <div class="text-xs text-gray-700">Due by 11:59 PM</div>
                                        </div>
                                    </td>
                                    <td class="py-4 align-top"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
                    <div class="px-6 py-4 border-b">
                        <h2 class="text-lg font-semibold text-dark">Upcoming Exams</h2>
                    </div>
                    <div class="divide-y divide-gray-200">
           
                        <div class="p-4 hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-red-100 flex items-center justify-center">
                                        <i class="fas fa-clipboard-list text-red-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center justify-between">
                                        <h3 class="font-medium">Literature Midterm Exam</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            High Priority
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">Wednesday, November 15 • 9:00 AM - 11:00 AM</p>
                                    <p class="text-sm text-gray-500">Exam Hall A • Dr. Williams</p>
                                    <div class="mt-2 flex items-center text-sm text-gray-500">
                                        <i class="fas fa-book-open mr-2"></i>
                                        <span>Chapters 1-5, 7 • 50 Multiple Choice Questions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div class="p-4 hover:bg-gray-50">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center">
                                        <i class="fas fa-calculator text-yellow-600"></i>
                                    </div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <div class="flex items-center justify-between">
                                        <h3 class="font-medium">Mathematics Chapter Test</h3>
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Medium Priority
                                        </span>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-1">Monday, November 20 • 10:00 AM - 11:30 AM</p>
                                    <p class="text-sm text-gray-500">Room 302 • Dr. Smith</p>
                                    <div class="mt-2 flex items-center text-sm text-gray-500">
                                        <i class="fas fa-book-open mr-2"></i>
                                        <span>Chapter 4 • 5 Problems + 2 Bonus Questions</span>
                                    </div>
                                </div>
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

export default Schedule;

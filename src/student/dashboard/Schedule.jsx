import React from 'react'

const Schedule = () => {
  return (
    
    <div>
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-semibold text-dark">Weekly Schedule</h3>
                        <div class="flex space-x-2">
                            <button class="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50">Today</button>
                            <button class="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50">Week</button>
                            <button class="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50">Month</button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-left border-b">
                                    <th class="pb-3 text-gray-500 font-medium">Time</th>
                                    <th class="pb-3 text-gray-500 font-medium">Mon</th>
                                    <th class="pb-3 text-gray-500 font-medium">Tue</th>
                                    <th class="pb-3 text-gray-500 font-medium">Wed</th>
                                    <th class="pb-3 text-gray-500 font-medium">Thu</th>
                                    <th class="pb-3 text-gray-500 font-medium">Fri</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b">
                                    <td class="py-4 text-gray-500">08:00 - 09:30</td>
                                    <td class="py-4">
                                        <div class="bg-indigo-50 border border-indigo-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-indigo-700">Mathematics</p>
                                            <p class="text-xs text-indigo-500">Room 302</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                    <td class="py-4">
                                        <div class="bg-indigo-50 border border-indigo-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-indigo-700">Mathematics</p>
                                            <p class="text-xs text-indigo-500">Room 302</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                    <td class="py-4"></td>
                                </tr>
                                <tr class="border-b">
                                    <td class="py-4 text-gray-500">10:00 - 11:30</td>
                                    <td class="py-4"></td>
                                    <td class="py-4">
                                        <div class="bg-green-50 border border-green-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-green-700">Literature</p>
                                            <p class="text-xs text-green-500">Room 105</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                    <td class="py-4">
                                        <div class="bg-green-50 border border-green-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-green-700">Literature</p>
                                            <p class="text-xs text-green-500">Room 105</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                </tr>
                                <tr>
                                    <td class="py-4 text-gray-500">13:00 - 14:30</td>
                                    <td class="py-4">
                                        <div class="bg-blue-50 border border-blue-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-blue-700">Chemistry</p>
                                            <p class="text-xs text-blue-500">Lab 3</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                    <td class="py-4">
                                        <div class="bg-blue-50 border border-blue-100 rounded-lg p-2">
                                            <p class="text-sm font-medium text-blue-700">Chemistry</p>
                                            <p class="text-xs text-blue-500">Lab 3</p>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
                                    <td class="py-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


  )
}

export default Schedule
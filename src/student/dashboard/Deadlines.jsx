import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deadlines = () => {
    const navigate = useNavigate()

  return (
    
    <div class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-dark">Upcoming Deadlines</h3>
                            <span class="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">3 Due Soon</span>
                        </div>
                        <div class="space-y-4">
                            <div class="p-3 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                            <i class="fas fa-exclamation text-red-500 text-xs"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-medium">Math Assignment #4</h4>
                                        <p class="text-sm text-gray-500">Due tomorrow at 11:59 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <i class="fas fa-clock text-yellow-500 text-xs"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-medium">Chemistry Lab Report</h4>
                                        <p class="text-sm text-gray-500">Due in 3 days</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                            <i class="fas fa-book text-blue-500 text-xs"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-medium">Literature Essay</h4>
                                        <p class="text-sm text-gray-500">Due next week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a onClick={() => {navigate("/student/assignment")}} class="mt-4 inline-block text-primary text-sm font-medium hover:underline">View all assignments</a>
                    </div>
                    
  )
}

export default Deadlines
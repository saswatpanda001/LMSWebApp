import React from 'react'

const Announcements = () => {
  return (
    
    <div class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-dark">Recent Announcements</h3>
                            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">2 New</span>
                        </div>
                        <div class="space-y-4">
                            <div class="p-3 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <i class="fas fa-bullhorn text-green-500 text-xs"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-medium">Exam Schedule Update</h4>
                                        <p class="text-sm text-gray-500">From Mathematics Dept. - 2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 border rounded-lg hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <div class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                            <i class="fas fa-info-circle text-purple-500 text-xs"></i>
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="font-medium">Library Closure Notice</h4>
                                        <p class="text-sm text-gray-500">From Administration - 1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="mt-4 inline-block text-primary text-sm font-medium hover:underline">View all announcements</a>
                    </div>
                    
  )
}

export default Announcements
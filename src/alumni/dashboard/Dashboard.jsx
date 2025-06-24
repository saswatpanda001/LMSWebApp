import React from 'react'

const Dashboard = () => {
  return (

<div class="bg-gray-50">

    <div class="flex h-screen">
        <aside class="w-64 bg-blue-800 text-white p-4">
            <div class="flex items-center space-x-2 mb-8 p-2">
                <i class="fas fa-graduation-cap text-2xl"></i>
                <h1 class="text-xl font-bold">EduConnect</h1>
            </div>
            <nav>
                <ul class="space-y-2">
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-book"></i>
                            <span>Courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-clipboard-check"></i>
                            <span>Attendance</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-users"></i>
                            <span>Alumni</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded bg-blue-900">
                            <i class="fas fa-user-graduate"></i>
                            <span>Alumni Profiles</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-chart-bar"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>

    
        <main class="flex-1 p-8 overflow-auto">
            <div class="mb-6 flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-800">Alumni Profiles</h2>
                <div class="flex space-x-4">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <i class="fas fa-search"></i>
                        <span>Search Alumni</span>
                    </button>
                    <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <i class="fas fa-user-plus"></i>
                        <span>Add Profile</span>
                    </button>
                </div>
            </div>


            <div class="bg-white rounded-lg shadow p-6 mb-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-700">Filter Alumni</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Years</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Program</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Programs</option>
                            <option>Computer Science</option>
                            <option>Business Administration</option>
                            <option>Engineering</option>
                            <option>Arts & Humanities</option>
                            <option>Medicine</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Current Industry</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Industries</option>
                            <option>Technology</option>
                            <option>Finance</option>
                            <option>Healthcare</option>
                            <option>Education</option>
                            <option>Government</option>
                        </select>
                    </div>
                    <div class="flex items-end">
                        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-blue-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-blue-800 text-xl font-bold">JD</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">John Doe</h3>
                                <p class="text-blue-100">Class of 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">Senior Software Engineer at TechCorp</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.Sc. Computer Science, EduConnect University (2020)</li>
                                <li class="text-gray-800">M.Sc. Artificial Intelligence, State University (2022)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>Published research on Machine Learning</li>
                                <li>Recipient of Alumni Excellence Award 2023</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-purple-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-purple-800 text-xl font-bold">AS</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Alice Smith</h3>
                                <p class="text-purple-100">Class of 2019</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">Marketing Director at BrandVision</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.A. Business Administration, EduConnect University (2019)</li>
                                <li class="text-gray-800">MBA, Global Business School (2021)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>Forbes 30 Under 30 Marketing Category</li>
                                <li>Founded successful startup acquired in 2022</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

 
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-green-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-green-800 text-xl font-bold">RJ</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Robert Johnson</h3>
                                <p class="text-green-100">Class of 2018</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">Lead Researcher at BioTech Innovations</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.Sc. Biology, EduConnect University (2018)</li>
                                <li class="text-gray-800">Ph.D. Molecular Biology, Tech Institute (2022)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>Published 12 peer-reviewed papers</li>
                                <li>Recipient of National Science Foundation Grant</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-yellow-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-yellow-800 text-xl font-bold">MB</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Maria Brown</h3>
                                <p class="text-yellow-100">Class of 2021</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">High School Teacher at City Academy</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.Ed. Education, EduConnect University (2021)</li>
                                <li class="text-gray-800">M.Ed. Curriculum Development (2023)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>State Teacher of the Year 2023</li>
                                <li>Developed innovative STEM curriculum</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-red-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-red-800 text-xl font-bold">DW</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">David Wilson</h3>
                                <p class="text-red-100">Class of 2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">Financial Analyst at Global Finance</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.Sc. Economics, EduConnect University (2017)</li>
                                <li class="text-gray-800">CFA Certification (2020)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>Managed $50M investment portfolio</li>
                                <li>Regular speaker at finance conferences</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <div class="p-4 bg-indigo-600">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span class="text-indigo-800 text-xl font-bold">SG</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white">Sarah Garcia</h3>
                                <p class="text-indigo-100">Class of 2022</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Current Position</h4>
                            <p class="text-gray-800">UX Designer at Creative Solutions</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Education</h4>
                            <ul class="space-y-1">
                                <li class="text-gray-800">B.A. Graphic Design, EduConnect University (2022)</li>
                                <li class="text-gray-800">UX Certification (2023)</li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="text-sm font-medium text-gray-500 mb-1">Achievements</h4>
                            <ul class="list-disc list-inside space-y-1 text-gray-800">
                                <li>Designed award-winning mobile app</li>
                                <li>Featured in Design Magazine's "New Talent"</li>
                            </ul>
                        </div>
                        <div class="flex space-x-2 pt-2 border-t border-gray-100">
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fab fa-linkedin"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <button class="text-gray-600 hover:text-gray-800">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mt-8 flex justify-center">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a href="#" aria-current="page" class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        1
                    </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        2
                    </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        3
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                    </span>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        8
                    </a>
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </nav>
            </div>


            <div id="addProfileModal" class="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 shadow-lg rounded-md bg-white">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">Add Alumni Profile</h3>
                        <button onclick="document.getElementById('addProfileModal').classList.add('hidden')" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select Year</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Program</label>
                                <select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select Program</option>
                                    <option>Computer Science</option>
                                    <option>Business Administration</option>
                                    <option>Engineering</option>
                                    <option>Arts & Humanities</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                            <input type="text" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job title and company"/>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Education History</label>
                            <textarea class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="List degrees and institutions"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Achievements</label>
                            <textarea class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="List notable achievements"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Contact Links</label>
                            <div class="space-y-2">
                                <div class="flex items-center space-x-2">
                                    <i class="fab fa-linkedin text-blue-600"></i>
                                    <input type="text" class="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="LinkedIn profile URL" />
                                </div>
                                <div class="flex items-center space-x-2">
                                    <i class="fas fa-envelope text-gray-600"></i>
                                    <input type="email" class="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email address" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button onclick="document.getElementById('addProfileModal').classList.add('hidden')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>


    
  )
}

export default Dashboard;
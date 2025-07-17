import React from 'react'

const Course = () => {
  return (
    
<div class="bg-gray-50 font-sans">

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
                    <a href="#" class="text-primary border-b-2 border-primary px-3 py-2 font-medium">Courses</a>
                    <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Assignments</a>
                    <a href="#" class="text-gray-500 hover:text-primary px-3 py-2 font-medium">Grades</a>
                    <div class="flex items-center ml-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="w-8 h-8 rounded-full mr-2" />
                        <span class="text-sm font-medium">Dr. Sarah Smith</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
 
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-dark">Mathematics - Algebra & Trigonometry</h1>
                    <p class="text-gray-600 mt-1">Grade 11 • Semester 1, 2023 • 24 Students</p>
                </div>
                <div class="mt-4 md:mt-0">
                    <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                        <i class="fas fa-plus mr-2"></i> Add Content
                    </button>
                </div>
            </div>
            
       
            <div class="mt-6 border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <a href="#" class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Materials</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Syllabus</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Lectures</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Students</a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Settings</a>
                </nav>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-1/4">
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-lg font-semibold text-dark mb-4">Course Structure</h2>
                    
                    <div class="space-y-3">
                      
                        <div class="border rounded-lg overflow-hidden">
                            <div class="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                                <h3 class="font-medium">Module 1: Algebraic Foundations</h3>
                                <button class="text-gray-500 hover:text-primary">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                            </div>
                            <div class="p-2">
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">1.1 Real Number System</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">1.2 Polynomials</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">1.3 Factoring</a>
                            </div>
                        </div>
          
                        <div class="border rounded-lg overflow-hidden">
                            <div class="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                                <h3 class="font-medium">Module 2: Equations & Inequalities</h3>
                                <button class="text-gray-500 hover:text-primary">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                            </div>
                            <div class="p-2">
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">2.1 Linear Equations</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">2.2 Quadratic Equations</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">2.3 Systems of Equations</a>
                            </div>
                        </div>
              
                        <div class="border rounded-lg overflow-hidden">
                            <div class="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                                <h3 class="font-medium">Module 3: Trigonometric Functions</h3>
                                <button class="text-gray-500 hover:text-primary">
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                            </div>
                            <div class="p-2">
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">3.1 Right Triangle Trig</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">3.2 Unit Circle</a>
                                <a href="#" class="block px-3 py-2 text-sm rounded hover:bg-gray-100">3.3 Graphing Trig Functions</a>
                            </div>
                        </div>
                    </div>
                    
                    <button class="mt-4 w-full px-4 py-2 bg-white border border-dashed rounded-lg text-gray-500 hover:border-primary hover:text-primary transition">
                        <i class="fas fa-plus mr-2"></i> Add Module
                    </button>
                </div>
             
                <div class="bg-white rounded-xl shadow-sm p-6 mt-6">
                    <h2 class="text-lg font-semibold text-dark mb-4">Quick Actions</h2>
                    <div class="space-y-3">
                        <button class="w-full flex items-center px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-copy mr-3 text-gray-500"></i>
                            <span>Copy Course Structure</span>
                        </button>
                        <button class="w-full flex items-center px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-share-alt mr-3 text-gray-500"></i>
                            <span>Share with Colleagues</span>
                        </button>
                        <button class="w-full flex items-center px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-archive mr-3 text-gray-500"></i>
                            <span>Archive Course</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-3/4">
                <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-dark">Course Materials</h2>
                        <div class="flex space-x-3">
                            <div class="relative">
                                <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary">
                                    <option>All Modules</option>
                                    <option>Module 1</option>
                                    <option>Module 2</option>
                                    <option>Module 3</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                <i class="fas fa-upload mr-2"></i> Upload
                            </button>
                        </div>
                    </div>
   
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                       
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mr-3">
                                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-file-pdf text-blue-600 text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-medium text-gray-900 truncate">Algebra Basics.pdf</h3>
                                    <p class="text-xs text-gray-500">2.4 MB • Module 1</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Uploaded Oct 15, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-red-500 hover:text-red-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
                      
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mr-3">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-file-powerpoint text-purple-600 text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-medium text-gray-900 truncate">Quadratic Equations.pptx</h3>
                                    <p class="text-xs text-gray-500">5.1 MB • Module 2</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Uploaded Oct 22, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-red-500 hover:text-red-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mr-3">
                                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-file-video text-green-600 text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-medium text-gray-900 truncate">Trigonometry Intro.mp4</h3>
                                    <p class="text-xs text-gray-500">45.2 MB • Module 3</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Uploaded Nov 1, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-red-500 hover:text-red-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mr-3">
                                    <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-file-alt text-yellow-600 text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-medium text-gray-900 truncate">Practice Problems.docx</h3>
                                    <p class="text-xs text-gray-500">1.2 MB • Module 2</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Uploaded Oct 25, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-red-500 hover:text-red-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
              
                        <div class="border rounded-lg p-4 hover:shadow-md transition">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 mr-3">
                                    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-file-excel text-red-600 text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-medium text-gray-900 truncate">Gradebook.xlsx</h3>
                                    <p class="text-xs text-gray-500">0.8 MB • Administration</p>
                                    <div class="mt-2 flex items-center text-xs text-gray-500">
                                        <i class="far fa-clock mr-1"></i>
                                        <span>Uploaded Nov 5, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-red-500 hover:text-red-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        
          
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary transition flex flex-col items-center justify-center">
                            <i class="fas fa-plus-circle text-3xl text-gray-400 mb-2"></i>
                            <p class="text-sm text-gray-500 text-center">Upload New File</p>
                            <p class="text-xs text-gray-400 mt-1">or drag and drop</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-sm p-6">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-dark">Course Syllabus</h2>
                        <div class="flex space-x-3">
                            <button class="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition">
                                <i class="fas fa-eye mr-2"></i> Preview
                            </button>
                            <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                                <i class="fas fa-save mr-2"></i> Save Changes
                            </button>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg">
                        <div class="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                            <h3 class="font-medium">Syllabus Editor</h3>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-bold"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-italic"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-list-ul"></i>
                                </button>
                                <button class="p-2 text-gray-500 hover:text-primary">
                                    <i class="fas fa-link"></i>
                                </button>
                            </div>
                        </div>
                        <div class="p-4">
                            <textarea class="w-full h-64 p-3 border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Enter your course syllabus here...">
# Mathematics - Algebra & Trigonometry  
**Grade 11** • Semester 1, 2023  
**Instructor:** Dr. Sarah Smith  
**Email:** sarah.smith@school.edu  
**Office Hours:** Mon/Wed 2-3 PM  

## Course Description  
This course covers fundamental concepts in algebra and trigonometry, preparing students for advanced mathematics courses. Topics include polynomial functions, equations and inequalities, and trigonometric functions.  

## Learning Objectives  
- Solve quadratic equations using various methods  
- Understand and apply trigonometric identities  
- Graph polynomial and trigonometric functions  
- Develop mathematical problem-solving skills  

## Course Schedule  
### Module 1: Algebraic Foundations (Weeks 1-4)  
- Real number system  
- Polynomial operations  
- Factoring techniques  

### Module 2: Equations & Inequalities (Weeks 5-8)  
- Linear and quadratic equations  
- Systems of equations  
- Polynomial and rational inequalities  

### Module 3: Trigonometric Functions (Weeks 9-12)  
- Right triangle trigonometry  
- Unit circle approach  
- Graphing trigonometric functions  

## Grading Policy  
- Assignments: 30%  
- Quizzes: 20%  
- Midterm Exam: 20%  
- Final Exam: 30%  

## Required Materials  
- Textbook: *Advanced Algebra & Trigonometry* (2023 Edition)  
- Scientific Calculator  
- Graph Paper Notebook  
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default Course
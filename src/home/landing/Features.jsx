import React from 'react'

const Features = () => {
  return (

    <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need in one platform
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Designed for modern educational institutions
            </p>
        </div>

        <div class="mt-10">
            <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                
                <div class="relative">
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <i class="fas fa-user-graduate text-xl"></i>
                    </div>
                    <div class="ml-16">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Student Dashboard</h3>
                        <p class="mt-2 text-base text-gray-500">
                            Personalized learning experience with course tracking, assignments, and performance analytics.
                        </p>
                    </div>
                </div>

             
                <div class="relative">
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <i class="fas fa-chalkboard-teacher text-xl"></i>
                    </div>
                    <div class="ml-16">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Teacher Portal</h3>
                        <p class="mt-2 text-base text-gray-500">
                            Comprehensive tools for course management, grading, attendance, and student engagement.
                        </p>
                    </div>
                </div>

               
                <div class="relative">
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <i class="fas fa-tasks text-xl"></i>
                    </div>
                    
                    <div class="ml-16">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Assignment Management</h3>
                        <p class="mt-2 text-base text-gray-500">
                            Create, distribute, and grade assignments with automated reminders and plagiarism checks.
                        </p>
                    </div>
                </div>

                
                <div class="relative">
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <i class="fas fa-chart-line text-xl"></i>
                    </div>
                    <div class="ml-16">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Analytics & Reporting</h3>
                        <p class="mt-2 text-base text-gray-500">
                            Powerful insights into student performance with customizable reports and visual dashboards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Features
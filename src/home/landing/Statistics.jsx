import React from 'react'

const Statistics = () => {
  return (
    <div class="bg-primary">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                    Trusted by educational institutions worldwide
                </h2>
                <p class="mt-3 text-xl text-black sm:mt-4">
                    Join thousands of schools already transforming education with our platform.
                </p>
            </div>
            <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100">
                        <i class="fas fa-school text-primary text-2xl"></i>
                    </div>
                    <div class="mt-6">
                        <div class="text-5xl font-extrabold text-black">500+</div>
                        <div class="mt-2 text-base font-medium text-indigo-800">Schools</div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100">
                        <i class="fas fa-user-tie text-primary text-2xl"></i>
                    </div>
                    <div class="mt-6">
                        <div class="text-5xl font-extrabold text-black">10K+</div>
                        <div class="mt-2 text-base font-medium text-indigo-800">Teachers</div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100">
                        <i class="fas fa-users text-primary text-2xl"></i>
                    </div>
                    <div class="mt-6">
                        <div class="text-5xl font-extrabold text-black">250K+</div>
                        <div class="mt-2 text-base font-medium text-indigo-800">Students</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics
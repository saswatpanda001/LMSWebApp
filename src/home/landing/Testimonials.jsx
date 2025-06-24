import React from 'react'

const Testimonials = () => {
  return (
    <div>

    <div class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center mb-12">
                <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    What our customers say
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
               
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Principal"/>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                            <p class="text-gray-600">Principal, Greenfield High</p>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "EduConnect has transformed how our teachers and students interact. The platform is intuitive and has all the features we need."
                    </p>
                    <div class="mt-4 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>

                
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Teacher"/>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900">Michael Chen</h4>
                            <p class="text-gray-600">Math Teacher, Riverside Academy</p>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "Grading assignments has never been easier. The analytics help me identify students who need extra help quickly."
                    </p>
                    <div class="mt-4 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>

                
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="IT Admin"/>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900">Lisa Rodriguez</h4>
                            <p class="text-gray-600">IT Director, Springfield District</p>
                        </div>
                    </div>
                    <p class="text-gray-600">
                        "Implementation was smooth, and the support team was fantastic. Our teachers adopted it faster than any previous system."
                    </p>
                    <div class="mt-4 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block">Ready to transform your institution?</span>
                <span class="block text-primary">Get started today.</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                        Request a Demo
                    </a>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                        Contact Sales
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>



    
  );
}

export default Testimonials
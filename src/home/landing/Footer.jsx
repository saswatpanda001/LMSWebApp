import React from 'react'

const Footer = () => {
  return (
    <div>

        <footer class="bg-dark">
            <div class="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-black font-semibold">Product</h3>
                        <ul class="mt-4 space-y-2">
                            <li><a href="#" class="ttext-black">Features</a></li>
                            <li><a href="#" class="ttext-black">Pricing</a></li>
                            <li><a href="#" class="ttext-black">Integrations</a></li>
                            <li><a href="#" class="ttext-black">Updates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-black font-semibold">Resources</h3>
                        <ul class="mt-4 space-y-2">
                            <li><a href="#" class="ttext-black">Documentation</a></li>
                            <li><a href="#" class="ttext-black">Guides</a></li>
                            <li><a href="#" class="ttext-black">Webinars</a></li>
                            <li><a href="#" class="ttext-black">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-black font-semibold">Company</h3>
                        <ul class="mt-4 space-y-2">
                            <li><a href="#" class="ttext-black">About Us</a></li>
                            <li><a href="#" class="ttext-black">Careers</a></li>
                            <li><a href="#" class="ttext-black">Privacy</a></li>
                            <li><a href="#" class="ttext-black">Terms</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-black font-semibold">Connect</h3>
                        <div class="mt-4 flex space-x-6">
                            <a href="#" class="ttext-black">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" class="ttext-black">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="ttext-black">
                                <i class="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="#" class="ttext-black">
                                <i class="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                        <div class="mt-6">
                            <p class="text-black">Subscribe to our newsletter</p>
                            <div class="mt-2 flex">
                                <input type="email" placeholder="Your email" class="px-3 py-2 rounded-l-md w-full"/>
                                <button class="bg-primary text-black px-4 py-2 rounded-r-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div class="flex space-x-6 md:order-2">
                        <p class="text-black text-sm">© 2023 EduConnect. All rights reserved.</p>
                    </div>
                    <div class="mt-8 md:mt-0 md:order-1">
                        <p class="text-black text-sm">Empowering the future of education</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

  )
}

export default Footer;

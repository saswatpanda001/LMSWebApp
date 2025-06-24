import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../api";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/auth/api/login/', { 
                username, 
                password 
            });
            const { email, user_id, user_name, role } = response.data.user;
            console.log(response.data.user)
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("user_id",user_id);
            sessionStorage.setItem("user_name",user_name);
            sessionStorage.setItem("role",role);

            
            navigate("/student/dashboard");
            
        } catch (error) {
            setError(error.response?.data?.error || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    






    
    return(
       

<div class="bg-gray-50 min-h-screen flex items-center">
    <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
          
                <div class="hidden md:block md:w-1/2 bg-gradient-to-br from-primary to-secondary">
                    <div class="h-full flex flex-col justify-center items-center p-8 text-white">
                        <img src="https://studyportals.com/app/uploads/2024/11/shutterstock_2484576879-640x560.jpg" className="w-64 h-64 mb-6" />
                        <h2 class="text-2xl font-bold mb-2">Welcome Back!</h2>
                        <p class="text-center text-blue-900">Access your personalized learning dashboard and continue your educational journey</p>
                    </div>
                </div>
                
                <div class="w-full md:w-1/2 p-8">
                    <div class="flex justify-center mb-8 md:hidden">
                        <div class="bg-primary rounded-full p-3">
                            <i class="fas fa-graduation-cap text-white text-3xl"></i>
                        </div>
                    </div>
                    
                    <h1 class="text-2xl font-bold text-center text-gray-800 mb-1">EduConnect LMS</h1>
                    <p class="text-center text-gray-600 mb-8">Sign in to your account</p>
                    
                    <form class="space-y-6">
                        <div>
                            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input type="text" id="username" name="username" required 
                                    class="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                                    placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-lock text-gray-400"></i>
                                </div>
                                <input type="password" id="password" name="password" required 
                                    class="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" 
                                    placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type="button" class="text-gray-400 hover:text-gray-500">
                                        <i class="fas fa-eye-slash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" 
                                    class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            
                            <div class="text-sm">
                                <a href="#" class="font-medium text-primary hover:text-secondary">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <div onClick={handleSubmit}
                                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200">
                                Sign in
                            </div>
                        </div>
                    </form>
                    
                    <div class="mt-6 hidden">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-2 gap-3">
                            <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <i class="fab fa-google text-red-500"></i>
                                <span class="ml-2">Google</span>
                            </a>
                            
                            <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <i class="fab fa-microsoft text-blue-500"></i>
                                <span class="ml-2">Microsoft</span>
                            </a>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Don't have an account? 
                            <a href="#" class="font-medium text-primary hover:text-secondary">
                                Contact administrator
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>


    );
}

export default Login;




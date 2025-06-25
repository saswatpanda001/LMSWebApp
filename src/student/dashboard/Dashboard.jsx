import React, { useContext, useState } from 'react'
import Navigation from '../navigation/Navigation';
import { useRef } from 'react';
import EnrolledCourses from './EnrolledCourses';
import Announcements from './Announcements';
import Deadlines from './Deadlines';
import Schedule from './Schedule';
import { AuthContext } from '../../context/AuthContext';


const Dashboard = () => {
    const loggedInData = useContext(AuthContext)
    console.log(loggedInData)
  const [collapse,setCollapse] = useState(false);
  const sideBarRef = useRef(null);



  const handleToggle = () => {
    setCollapse(!collapse);
    console.log("toggle")
    if(sideBarRef.current){
      sideBarRef.current.classList.toggle("hidden")
    }

  }

  const handleCollapse = () => {
    setCollapse(true)
    console.log("collapse")
    if(sideBarRef.current){
      sideBarRef.current.classList.remove("hidden")
    }



  }
  
  return (

    <div class="bg-gray-50 font-sans">
      
    <div class="flex h-screen overflow-hidden">

    <div id="sidebar" class="sidebar bg-white shadow-md w-64 flex flex-col">

            <div class="flex items-center justify-between p-4 border-b">
                <div class="flex items-center">
                    <i class="fas fa-graduation-cap text-primary text-2xl mr-3"></i>
                    <span class="logo-text text-xl font-bold text-dark">EduConnect</span>
                </div>
                <button id="toggleSidebar" class="text-gray-500 hover:text-primary">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <nav class="flex-1 overflow-y-auto p-4">
                <div class="space-y-2">
                    <a href="/student/dashboard" class="flex items-center p-3 rounded-lg bg-primary text-white">
                        <i class="fas fa-tachometer-alt mr-3"></i>
                        <span class="nav-text" >Dashboard</span>
                    </a>
                    <a  href="/student/courses" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-book mr-3"></i>
                        <span class="nav-text">My Courses</span>
                    </a>
                    <a href="/student/assignment" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-tasks mr-3"></i>
                        <span class="nav-text" >Assignments</span>
                    </a>
                    <a href="/student/grades" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-chart-line mr-3"></i>
                        <span class="nav-text"  >Grades</span>
                    </a>
                    <a href="/student/schedule" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-calendar-alt mr-3"></i>
                        <span class="nav-text"  >Schedule</span>
                    </a>
                    <a href="/student/profile" class="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100">
                        <i class="fas fa-user mr-3"></i>
                        <span class="nav-text"  >Profile</span>
                    </a>
                </div>
            </nav>

          
            <div class="p-4 border-t">
                <button id="collapseSidebar" class="w-full flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                    <i class="fas fa-chevron-left"></i>
                    <span class="nav-text ml-2">Collapse</span>
                </button>
            </div>
        </div>

        
        
        <div class="flex-1 flex flex-col overflow-hidden">
          <Navigation/>


            <main class="flex-1 overflow-y-auto p-6 bg-gray-50">

                <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 class="text-2xl font-bold text-dark mb-2">Welcome back, John!</h2>
                            <p class="text-gray-600">You have 3 upcoming deadlines this week</p>
                        </div>
                        <button class="mt-4 md:mt-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition">
                            View Calendar
                        </button>
                    </div>
                </div>

              
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <EnrolledCourses/>
                    <Deadlines/>
                    <Announcements/>
                </div>

                <div class="bg-white rounded-xl shadow-sm p-6">
                    <Schedule/>
                </div>

             
                
            </main>
        </div>
    </div>

   
</div>

    
  )
}

export default Dashboard;






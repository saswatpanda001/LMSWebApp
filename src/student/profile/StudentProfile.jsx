import React from 'react'
import Navigation from '../navigation/Navigation'
import api from '../../api'
import { useEffect,useState } from 'react'

const StudentProfile = () => {

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchStudentProfileData = async(e) =>{
    try{
      const response = await api.get('/students/api/profile/', 
          {withCredentials: true});
      console.log("response: ", response)

      setProfileData(response)
    }
    catch (err){
      setError(err.response?.data || 'Failed to fetch profile');
      console.log("error: ", error);
    }
    finally{
      setLoading(false)
      console.log("loading: ", loading);
    }
    
  


  }
  

  useEffect( () => {
    fetchStudentProfileData()
  },[])


  


  return (
    <div>
        <Navigation/>

     <div class="container mx-auto px-4 py-8">
  <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

    <div class="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <h2 class="text-white text-3xl font-bold">Student Profile</h2>
    </div>


    <div class="relative px-6 py-4">
      <div class="absolute -top-16 left-6 border-4 border-white rounded-full overflow-hidden">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="h-32 w-32 object-cover"/>
      </div>
      <div class="ml-40 pt-2">
        <h1 class="text-2xl font-bold text-gray-800">Alexandra Johnson</h1>
        <p class="text-gray-600 flex items-center">
          <i class="fas fa-map-marker-alt mr-2"></i> San Francisco, CA
        </p>
        <div class="flex mt-2 space-x-2">
          <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Computer Science</span>
          <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Class of 2024</span>
          <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Student Leader</span>
        </div>
      </div>
    </div>

  
    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">Academic Profile</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-gray-600"><strong>Major:</strong> Computer Science</p>
          <p class="text-gray-600"><strong>Minor:</strong> Digital Design</p>
          <p class="text-gray-600"><strong>GPA:</strong> 3.7/4.0</p>
        </div>
        <div>
          <p class="text-gray-600"><strong>Enrollment Status:</strong> Full-time</p>
          <p class="text-gray-600"><strong>Expected Graduation:</strong> May 2024</p>
          <p class="text-gray-600"><strong>Student ID:</strong> S20230044</p>
        </div>
      </div>
    </div>

    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">Skills & Interests</h3>
      <div class="flex flex-wrap gap-2">
        <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">React</span>
        <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
        <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">JavaScript</span>
        <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">UI/UX Design</span>
        <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Data Structures</span>
        <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Machine Learning</span>
      </div>
      <p class="mt-2 text-gray-600">
        Passionate about building accessible web applications and exploring new technologies.
      </p>
    </div>


    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">Extracurricular Activities</h3>
      <ul class="list-disc pl-5 text-gray-600">
        <li>President, Computer Science Club (2022–Present)</li>
        <li>Member, Women in Tech Society</li>
        <li>Volunteer, Local Coding Bootcamp for Teens</li>
        <li>Photography Club</li>
      </ul>
    </div>


    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">Achievements & Awards</h3>
      <ul class="list-disc pl-5 text-gray-600">
        <li>Dean's List, Fall 2022 & Spring 2023</li>
        <li>Best Hackathon Project, TechFest 2023</li>
        <li>Outstanding Student Leader Award, 2023</li>
      </ul>
    </div>


    <div class="px-6 py-4 border-t border-gray-200">
      <div class="flex justify-around text-center">
        <div>
          <p class="text-gray-500 text-sm">Courses Taken</p>
          <p class="text-xl font-bold">24</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Assignments</p>
          <p class="text-xl font-bold">142</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Badges Earned</p>
          <p class="text-xl font-bold">8</p>
        </div>
      </div>
    </div>


    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">About Me</h3>
      <p class="text-gray-600">
        I am a passionate computer science student with a keen interest in web development and user experience design. Currently, I am working on several projects using React and Tailwind CSS, aiming to build beautiful and accessible digital experiences. Outside of academics, I enjoy photography, hiking, and coffee breaks with friends. I am also committed to promoting diversity in tech through my involvement in student organizations.
      </p>
    </div>

  
    <div class="px-6 py-4 border-t border-gray-200">
      <h3 class="font-semibold text-gray-800 mb-2">Connect With Me</h3>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-600 hover:text-purple-600"><i class="fab fa-github fa-lg"></i></a>
        <a href="#" class="text-gray-600 hover:text-purple-600"><i class="fab fa-linkedin fa-lg"></i></a>
        <a href="#" class="text-gray-600 hover:text-purple-600"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="#" class="text-gray-600 hover:text-purple-600"><i class="fas fa-envelope fa-lg"></i></a>
      </div>
      <div class="flex justify-end space-x-3 mt-4">
        <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
          <i class="fas fa-envelope mr-2"></i> Message
        </button>
        <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          <i class="fas fa-user-plus mr-2"></i> Connect
        </button>
      </div>
    </div>

    
    <div class="border-t border-gray-200">
      <div class="flex">
        <button class="flex-1 py-3 font-medium text-center text-purple-600 border-b-2 border-purple-600">
          <i class="fas fa-th-large mr-2"></i> Projects
        </button>
        <button class="flex-1 py-3 font-medium text-center text-gray-500 hover:text-purple-600">
          <i class="fas fa-trophy mr-2"></i> Achievements
        </button>
        <button class="flex-1 py-3 font-medium text-center text-gray-500 hover:text-purple-600">
          <i class="fas fa-bookmark mr-2"></i> Resources
        </button>
      </div>
    </div>

 
    <div class="grid grid-cols-3 gap-1 p-1">
      <div class="aspect-square bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Project 1</span>
      </div>
      <div class="aspect-square bg-gray-300 flex items-center justify-center">
        <span class="text-gray-400">Project 2</span>
      </div>
      <div class="aspect-square bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Project 3</span>
      </div>
      <div class="aspect-square bg-gray-300 flex items-center justify-center">
        <span class="text-gray-400">Project 4</span>
      </div>
      <div class="aspect-square bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Project 5</span>
      </div>
      <div class="aspect-square bg-gray-300 flex items-center justify-center">
        <span class="text-gray-400">Project 6</span>
      </div>
    </div>
  </div>
</div>



    </div>
    
  )
}

export default StudentProfile;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home/Home'
import Login from './authentication/Login'
import Signup from './authentication/Signup'

import Analytics from './teacher/Analytics/Analytics'
import Course from './teacher/Course/Course'
import TeacherDashboard from './teacher/Dashboard/TeacherDashboard'

import Dashboard from './student/dashboard/Dashboard'
import Assignment from './student/assignment/Assignment'
import Courses from './student/courses/Courses'
import Grades from './student/grades/Grades'
import Schedule from './student/schedule/Schedule'
import StudentProfile from './student/profile/StudentProfile'
import StudentAttendance from './student/attendance/StudentAttendance'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Assignments from './teacher/Assignments/Assignments'
import Attendance from './teacher/Attendance/Attendance'


const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/assignment" element={<Assignment />} />
          <Route path="/student/courses" element={<Courses />} />
          <Route path="/student/grades" element={<Grades />} />
          <Route path="/student/schedule" element={<Schedule />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path='/student/attendance' element={<StudentAttendance/>}/>

        </Route>

         <Route path='/teacher/analytics' element={<Analytics/>} />
         <Route path='/teacher/assignments' element={<Assignments/>} />
         <Route path='/teacher/attendance' element={<Attendance/>} />
         <Route path='/teacher/dashboard' element={<TeacherDashboard/>} />
         <Route path='/teacher/courses' element={<Course/>} />


      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './home/Home'
import Login from './authentication/Login'
import Signup from './authentication/Signup'

import Dashboard from './student/dashboard/Dashboard'
import Assignment from './student/assignment/Assignment'
import Courses from './student/courses/Courses'
import Grades from './student/grades/Grades'
import Schedule from './student/schedule/Schedule'
import StudentProfile from './student/profile/StudentProfile'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Student Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/assignment" element={<Assignment />} />
          <Route path="/student/courses" element={<Courses />} />
          <Route path="/student/grades" element={<Grades />} />
          <Route path="/student/schedule" element={<Schedule />} />
          <Route path="/student/profile" element={<StudentProfile />} />
        </Route>

       
      </Routes>
    </Router>
  );
};



export default App




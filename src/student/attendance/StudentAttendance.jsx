import React, { useState } from 'react';
import { FiCalendar, FiBook, FiCheckCircle, FiXCircle, FiPieChart } from 'react-icons/fi';
import Navigation from '../navigation/Navigation';
import api from '../../api';


const StudentAttendance = () => {
  const [enrolledCourses, setEnrolledCourses]  = useState();
  const [loading, setLoading] = useState(true);


  const get_courses = async() => {

    try{
      const response = await api.get("/academics/api/enrolled-courses")
      setEnrolledCourses(response.data);
    }
    catch(error){
      console.log("error fetching the enrolled courses")
    }
    finally{
      setLoading(true);
    }
    


    
  }
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [timeRange, setTimeRange] = useState('year');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - replace with your actual data
  const courses = [
    {
      id: 1,
      name: 'Mathematics',
      code: 'MATH101',
      totalClasses: 120,
      attended: 102,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      name: 'Physics',
      code: 'PHYS201',
      totalClasses: 90,
      attended: 84,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 3,
      name: 'Chemistry',
      code: 'CHEM101',
      totalClasses: 85,
      attended: 79,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 4,
      name: 'Biology',
      code: 'BIO301',
      totalClasses: 75,
      attended: 68,
      color: 'bg-yellow-100 text-yellow-800'
    },
  ];

  const monthlyData = [
    { month: 'Jan', present: 22, absent: 2 },
    { month: 'Feb', present: 20, absent: 3 },
    { month: 'Mar', present: 23, absent: 1 },
    { month: 'Apr', present: 21, absent: 2 },
    { month: 'May', present: 22, absent: 1 },
    { month: 'Jun', present: 20, absent: 3 },
    { month: 'Jul', present: 18, absent: 5 },
    { month: 'Aug', present: 22, absent: 1 },
    { month: 'Sep', present: 21, absent: 2 },
    { month: 'Oct', present: 23, absent: 0 },
    { month: 'Nov', present: 22, absent: 1 },
    { month: 'Dec', present: 20, absent: 3 },
  ];

  const calculatePercentage = (attended, total) => {
    return Math.round((attended / total) * 100);
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Navigation/>

      <div className="max-w-7xl pt-6 mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Attendance Dashboard</h1>
            <p className="text-gray-600">Track your course attendance throughout the year</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={() => setTimeRange('semester')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'semester' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              Semester
            </button>
            <button
              onClick={() => setTimeRange('year')}
              className={`px-4 py-2 rounded-lg ${timeRange === 'year' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border'}`}
            >
              Full Year
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Course List */}
          <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiBook className="mr-2" /> Your Courses
            </h2>
            <div className="space-y-3">
              {courses.map((course) => {
                const percentage = calculatePercentage(course.attended, course.totalClasses);
                return (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${selectedCourse?.id === course.id ? 'ring-2 ring-indigo-500 bg-indigo-50' : 'hover:bg-gray-50 border'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-gray-500">{course.code}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${course.color}`}>
                        {percentage}%
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${percentage >= 90 ? 'bg-green-500' : percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{course.attended} attended</span>
                        <span>{course.totalClasses} total</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <FiPieChart className="mr-2" /> Attendance Overview
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1 text-sm rounded-md ${activeTab === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-3 py-1 text-sm rounded-md ${activeTab === 'details' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
                  >
                    Detailed View
                  </button>
                </div>
              </div>

              {activeTab === 'overview' ? (
                <div>
                  {selectedCourse ? (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold">{selectedCourse.name}</h3>
                          <p className="text-gray-600">{selectedCourse.code}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-3xl font-bold ${getStatusColor(calculatePercentage(selectedCourse.attended, selectedCourse.totalClasses))}`}>
                            {calculatePercentage(selectedCourse.attended, selectedCourse.totalClasses)}%
                          </span>
                          <p className="text-sm text-gray-500">Attendance Rate</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-center">
                            <FiCheckCircle className="text-blue-500 text-xl mr-2" />
                            <span className="text-gray-700">Present</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">{selectedCourse.attended}</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <div className="flex items-center">
                            <FiXCircle className="text-red-500 text-xl mr-2" />
                            <span className="text-gray-700">Absent</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">{selectedCourse.totalClasses - selectedCourse.attended}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center">
                            <FiCalendar className="text-green-500 text-xl mr-2" />
                            <span className="text-gray-700">Total Classes</span>
                          </div>
                          <p className="text-2xl font-bold mt-2">{selectedCourse.totalClasses}</p>
                        </div>
                      </div>

                      <h4 className="font-medium mb-3">Monthly Attendance Trend</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex overflow-x-auto pb-2">
                          {monthlyData.map((month) => (
                            <div key={month.month} className="flex flex-col items-center mx-2">
                              <div className="h-32 w-8 flex flex-col justify-end">
                                <div 
                                  className="bg-green-400 w-full rounded-t"
                                  style={{ height: `${(month.present / 25) * 100}%` }}
                                ></div>
                                <div 
                                  className="bg-red-400 w-full rounded-b"
                                  style={{ height: `${(month.absent / 25) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs mt-1">{month.month}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-4 mt-3">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                            <span className="text-xs">Present</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
                            <span className="text-xs">Absent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      Select a course to view attendance details
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-4">
                  <h3 className="font-medium mb-3">Detailed Attendance Records</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Topic</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[...Array(5)].map((_, i) => (
                          <tr key={i}>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">2023-{i+1}-15</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${i % 5 === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {i % 5 === 0 ? 'Absent' : 'Present'}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                              {i % 5 === 0 ? '-' : `Chapter ${i+1} - Topic ${i+1}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Attendance Tips */}
            <div className="bg-indigo-50 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">Attendance Tips</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Maintaining 90%+ attendance maximizes learning outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Absent more than 3 times? Check with classmates for missed material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Regular attendance correlates with 25% higher exam scores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
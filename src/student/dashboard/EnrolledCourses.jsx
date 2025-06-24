import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";


const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate  = useNavigate()

  const getEnrolledCourses = async () => {
    try {
      const response = await api.get("/api/my-enrolled-courses/"); 
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div class="bg-white rounded-xl shadow-sm p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-dark">Enrolled Courses</h3>
                            <span class="px-3 py-1 bg-indigo-100 text-primary text-sm rounded-full">5 Courses</span>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                                <div class="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-calculator text-purple-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Mathematics</h4>
                                    <p class="text-sm text-gray-500">Dr. Smith</p>
                                </div>
                            </div>
                            <div class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                                <div class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-flask text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Chemistry</h4>
                                    <p class="text-sm text-gray-500">Prof. Johnson</p>
                                </div>
                            </div>
                            <div class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                                <div class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-book text-green-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Literature</h4>
                                    <p class="text-sm text-gray-500">Dr. Williams</p>
                                </div>
                            </div>
                        </div>
                        <a onClick={() => {navigate("/student/courses")}} class="mt-4 inline-block text-primary text-sm font-medium hover:underline">View all courses</a>
                    </div>
  );
};

export default EnrolledCourses;

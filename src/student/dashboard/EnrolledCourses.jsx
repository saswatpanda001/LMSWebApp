import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate  = useNavigate()

  

  const getEnrolledCourses = async () => {
    try {
      const response = await api.get("/academics/api/enrolled-courses"); 
    
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
                            <span class="px-3 py-1 bg-indigo-100 text-primary text-sm rounded-full">{courses.length} Courses</span>
                        </div>
                        <div class="space-y-4">
                            {
                              courses.map( each => (
                                <div key={each.id} class="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                                <div class="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                                    <i class="fas fa-calculator text-purple-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">{each.title}</h4>
                                    <p class="text-sm text-gray-500">{each.code}</p>
                                </div>
                            </div>

                              ))
                            }
                            
                            
                            
                            
                        </div>
                        <a onClick={() => {navigate("/student/courses")}} class="mt-4 inline-block text-primary text-sm font-medium hover:underline">View all courses</a>
                    </div>
  );
};

export default EnrolledCourses;

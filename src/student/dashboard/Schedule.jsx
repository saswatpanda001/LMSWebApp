import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const getScheduleData = async () => {
    try {
      const response = await api.get("/academics/api/class-schedule");
      if (response.data) {
        setSchedule(response.data);
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  const ScheduleTable = ({ scheduleData }) => {
    if (!scheduleData || scheduleData.length === 0) {
      return <div className="text-center py-8 text-gray-500">No schedule data available</div>;
    }

    // Get unique periods while preserving order
    const periods = [];
    const periodIds = new Set();
    
    scheduleData.forEach(item => {
      if (!periodIds.has(item.period.id)) {
        periodIds.add(item.period.id);
        periods.push(item.period);
      }
    });

    // Sort periods by start time
    periods.sort((a, b) => a.start_time.localeCompare(b.start_time));

    return (
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3 px-4 text-gray-500 font-medium">Time</th>
            {days.map(day => (
              <th key={day} className="pb-3 px-4 text-gray-500 font-medium">{day.slice(0, 3)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map(period => (
            <tr key={period.id} className="border-b">
              <td className="py-4 px-4 text-gray-500">
                {formatTime(period.start_time)} - {formatTime(period.end_time)}
              </td>
              
              {days.map(day => {
                const classEntry = scheduleData.find(
                  item => item.period.id === period.id && item.day_of_week === day
                );

                return (
                  <td key={`${period.id}-${day}`} className="py-4 px-4">
                    {classEntry ? (
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-2 hover:bg-indigo-100 transition-colors">
                        <p className="text-sm font-medium text-indigo-700">
                          {classEntry.course_offering.course.title}
                        </p>
                        <p className="text-xs text-indigo-500">Room {classEntry.room}</p>
                        <p className="text-xs text-indigo-400">{classEntry.teacher.username}</p>
                      </div>
                    ) : (
                      <div className="h-16"></div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Helper function to format time (HH:MM:SS -> HH:MM)
  const formatTime = (timeString) => {
    return timeString.slice(0, 5);
  };

  useEffect(() => {
    getScheduleData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Weekly Schedule</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Today
          </button>
          <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Week
          </button>
          <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Month
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <ScheduleTable scheduleData={schedule} />
      </div>
    </div>
  );
};

export default Schedule;
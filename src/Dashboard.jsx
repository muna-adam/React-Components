import { useState } from "react";

function Dashboard () {
  const [active, setActive] = useState("Dashboard");

  const stats = [
    { title: "Courses", value: 8 },
    { title: "Completed", value: 5 },
    { title: "Assignments", value: 12 },
    { title: "Study Hours", value: 120 },
  ];

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      instructor: "Warsame Ali",
      progress: 80,
      nextLesson: "React Hooks",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      instructor: "Ahmed Saeed",
      progress: 55,
      nextLesson: "Responsive Design",
    },
    {
      id: 3,
      name: "JavaScript",
      instructor: "Fatima Hassan",
      progress: 92,
      nextLesson: "ES6 Modules",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Student Dashboard",
      course: "React",
      due: "Tomorrow",
      status: "Pending",
    },
    {
      id: 2,
      title: "Flexbox Practice",
      course: "Tailwind",
      due: "Friday",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Array Methods",
      course: "JavaScript",
      due: "Completed",
      status: "Completed",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "React Live Class tomorrow at 7 PM",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Tailwind Assignment deadline extended",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "New JavaScript quiz available",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
   
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">StudentHub</h1>

        {[
          "Dashboard",
          "Courses",
          "Assignments",
          "Calendar",
          "Settings",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition
            ${
              active === item
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

    
      <main className="flex-1 p-8">
   
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500">
              Keep learning and stay productive.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-2xl">🔔</button>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>

   
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="text-gray-500">
                {stat.title}
              </h3>

              <p className="text-3xl font-bold mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            My Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="font-bold text-xl">
                  {course.name}
                </h3>

                <p className="text-gray-500">
                  {course.instructor}
                </p>

                <div className="mt-5">
                  <div className="flex justify-between mb-2">
                    <span>Progress</span>

                    <span>{course.progress}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <p className="mt-5 text-sm text-gray-600">
                  Next Lesson:
                  <span className="font-semibold">
                    {" "}
                    {course.nextLesson}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">
            Upcoming Assignments
          </h2>

          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">
                    {assignment.title}
                  </h3>

                  <p className="text-gray-500">
                    {assignment.course}
                  </p>
                </div>

                <div>{assignment.due}</div>

                <span
                  className={`px-4 py-1 rounded-full text-sm text-white
                  ${
                    assignment.status === "Completed"
                      ? "bg-green-500"
                      : assignment.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                >
                  {assignment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

  
        <div>
          <h2 className="text-2xl font-bold mb-5">
            Announcements
          </h2>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600 space-y-5">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border-b pb-4 last:border-none"
              >
                <h3 className="font-semibold">
                  {announcement.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {announcement.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
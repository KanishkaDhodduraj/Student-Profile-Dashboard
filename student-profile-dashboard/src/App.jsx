import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import AcademicDetails from "./components/AcademicDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Kanishka Dhodduraj",
    registerNo: "23CSE101",
    email: "kanishka@gmail.com",
    phone: "9876543210",
    department: "Computer Science and Engineering",
    year: "3rd Year",
    semester: "5th Semester",
    cgpa: "8.5",
    course: "Full Stack Development",
    duration: "6 Months",
    instructor: "Dr. Arun Kumar",
    status: "Active"
  });

  const changeStatus = () => {
    setStudent({
      ...student,
      status: student.status === "Active" ? "Inactive" : "Active"
    });
  };

  const changeCourse = () => {
    setStudent({
      ...student,
      course:
        student.course === "Full Stack Development"
          ? "Java Programming"
          : "Full Stack Development"
    });
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Student Profile Dashboard</h1>
        <p>College Student Information System</p>
      </header>

      <div className="container">

        <div className="profile">
          <div className="profile-image">
            K
          </div>

          <div className="profile-info">
            <h2>{student.name}</h2>
            <p>{student.department}</p>

            <span
              className={
                student.status === "Active"
                  ? "status active"
                  : "status inactive"
              }
            >
              {student.status}
            </span>
          </div>
        </div>

        <div className="cards">

          <PersonalDetails
            name={student.name}
            registerNo={student.registerNo}
            email={student.email}
            phone={student.phone}
          />

          <AcademicDetails
            department={student.department}
            year={student.year}
            semester={student.semester}
            cgpa={student.cgpa}
          />

          <CourseDetails
            course={student.course}
            duration={student.duration}
            instructor={student.instructor}
          />

        </div>

        <div className="buttons">

          <button onClick={changeStatus}>
            Change Student Status
          </button>

          <button onClick={changeCourse}>
            Change Course
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
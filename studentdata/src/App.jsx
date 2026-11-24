
import React from "react";
import "./App.css";

// Child Component
function StudentDetails(props) {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p><b>Student Name:</b> {props.studentName}</p>
      <p><b>Course Name:</b> {props.courseName}</p>
      <p><b>Faculty Name:</b> {props.facultyName}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div className="container">
      <h1>Student Course Information</h1>

      <StudentDetails
        studentName="Rahul Kumar"
        courseName="Electrical and Electronics Engineering"
        facultyName="Dr. Suresh"
      />

      <StudentDetails
        studentName="Priya Sharma"
        courseName="Computer Science Engineering"
        facultyName="Mrs. Anitha"
      />
    </div>
  );
}

export default App;
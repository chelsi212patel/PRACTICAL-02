import React from "react";
import Student from "./Components/Student";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <Student
        name="Chelsi Patel"
        rollNo="087"
        course="BCA"
        marks="85%"
      />

      <Student
        name="Dvija Patel"
        rollNo="102"
        course="BCA"
        marks="92%"
      />

      <Student
        name="Krishna Patel"
        rollNo="103"
        course="BCA"
        marks="78%"
      />
    </div>
  );
}

export default App;
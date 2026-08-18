import Student from "./Components/Student";

function App() {
  const student = {
    name: "Chelsi Patel",
    age: 20,
    course: "BCA",
    email: "chelsi@example.com",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Student Information
        </h1>

        <Student
          name={student.name}
          age={student.age}
          course={student.course}
          email={student.email}
        />
      </div>
    </div>
  );
}

export default App;
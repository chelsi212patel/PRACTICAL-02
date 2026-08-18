function Student({ name, age, course, email }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-indigo-600 font-medium">{course} Student</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
          <span className="font-semibold text-gray-600">Age</span>
          <span className="text-gray-800">{age} years</span>
        </div>

        <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
          <span className="font-semibold text-gray-600">Course</span>
          <span className="text-gray-800">{course}</span>
        </div>

        <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
          <span className="font-semibold text-gray-600">Email</span>
          <span className="text-gray-800">{email}</span>
        </div>
      </div>
    </div>
  );
}

export default Student;
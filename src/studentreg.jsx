// import axios from 'axios';
// import React, { useState } from 'react';

// function Studentreg() {
//     const [students, setStudents] = useState([]);
//     const [newStudent, setNewStudent] = useState({ name: '', age: '', grade: '' });
  
//     const handleInputChange = (e) => {
//       setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
//     };
  
//     const handleAddStudent = async (e) => {
//       e.preventDefault();
  
//       try {
//         await axios.post('http://localhost:5000/student', newStudent);
//         setStudents([...students, newStudent]);
//         setNewStudent({ name: '', age: '', grade: '' });
//         window.alert('Student Added Successfully');
//       } catch (error) {
//         console.error('Error Adding:', error);
//         window.alert('Error Adding Student');
//       }
//     };
  
//     return (
//       <div>
//         <h1 className="text-3xl font-bold text-center mb-4">Ayo Academy</h1>
//         <h2 className="text-xl font-semibold text-center mb-4">Student Management System</h2>
//         <div className='bg-black p-4 rounded-lg mb-4'>
//             <form onSubmit={handleAddStudent} className="bg-white">
//               <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleInputChange} className="p-2 rounded border border-gray-400" />
//               <input type="number" name="age" placeholder="Age" value={newStudent.age} onChange={handleInputChange} className="p-2 rounded border border-gray-400" />
//               <input type="text" name="grade" placeholder="Grade" value={newStudent.grade} onChange={handleInputChange} className="p-2 rounded border border-gray-400" />
//               <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Add Student</button> 
//             </form>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Students:</h2>
//         <ul>
//           {students.map((student, index) => (
//             <li key={index} className="mb-2">
//               Name: {student.name}, Age: {student.age}, Grade: {student.grade}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
// }

// export default Studentreg;

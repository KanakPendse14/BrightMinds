import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = ({ teacherEmail }) => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`/students?teacherEmail=${teacherEmail}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    if (teacherEmail) {
      fetchStudents();
    }
  }, [teacherEmail]);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Students</button>

      {showModal && (
        <div className="modal">
          <h2>Students List</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
          <ul>
            {students.map((student) => (
              <li key={student.email}>{student.name} - {student.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentList;

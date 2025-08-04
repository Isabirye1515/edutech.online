import React, { useState, useEffect } from 'react';
import { Modal, TextInput, ComboBox } from '@carbon/react';

const AddAttendanceStudentModal = ({ isOpen, onClose }) => {
  const [studentData, setStudentData] = useState({
    schoolId: '',
    attendanceName: '',
    attendanceStreamId: null,
  });

  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await fetch('http://localhost:8080/edutech/api/attendance-streams');
        const data = await response.json();
        setStreams(data);
      } catch (error) {
        console.error('Failed to fetch streams:', error);
      }
    };

 fetchStreams();
  },[] );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/edutech/api/attendance-students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolId: studentData.schoolId,
          attendanceName: studentData.attendanceName,
          attendanceStream: {
            id: studentData.attendanceStreamId,
          },
        }),
      });

      if (response.ok) {
        alert('Attendance Student Created');
        setStudentData({ schoolId: '', attendanceName: '', attendanceStreamId: null });
        onClose();
      } else {
        const err = await response.json();
        alert(`Error: ${err.message || 'Failed to submit'}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onRequestClose={onClose}
      modalHeading="Add Attendance Student"
      primaryButtonText="Save"
      secondaryButtonText="Cancel"
      onRequestSubmit={handleSubmit}
    >
      <TextInput
        id="school-id"
        name="schoolId"
        labelText="School ID"
        value={studentData.schoolId}
        placeholder="Enter School ID"
        onChange={handleChange}
        style={{ marginBottom: '1rem' }}
      />
      <TextInput
        id="attendance-name"
        name="attendanceName"
        labelText="Student Name"
        value={studentData.attendanceName}
        placeholder="Enter Student Name"
        onChange={handleChange}
        style={{ marginBottom: '1rem' }}
      />
      <ComboBox
        id="attendance-stream-id"
        titleText="Attendance Stream ID"
        placeholder="Select Stream by ID"
        items={streams}
        itemToString={(item) => (item ? `${item.id} - ${item.streamName}` : '')}
        onChange={({ selectedItem }) => {
          setStudentData((prev) => ({
            ...prev,
            attendanceStreamId: selectedItem ? selectedItem.id : null
          }));
        }}
      />
    </Modal>
  );
};

export default AddAttendanceStudentModal;

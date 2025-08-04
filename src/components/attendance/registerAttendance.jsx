import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  Column,
} from '@carbon/react';
import AddStreamModal from './addStreamModal';

const headers = [
  { key: 'id', header: 'ID' },
  { key: 'schoolId', header: 'School ID' },
  { key: 'attendanceName', header: 'Student Name' },
  { key: 'actions', header: 'Mark Present' },
];

const AttendanceStudentList = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [stream, setStream]=useState(false)

  const handleStream = ()=>{
    setStream(!stream)
  }

  useEffect(() => {
    fetch(`http://localhost:8080/edutech/api/attendance-streams/${id}`)
      .then(res => res.json())
      .then(data => setStudents(data.attendanceStudents || []));
  }, [id]);

  const markAttendance = (studentId, isPresent) => {
    const today = new Date().toISOString().split('T')[0];

    fetch('http://localhost:8080/edutech/api/presents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        day: today,
        isPresent,
        attendanceStudent: { id: studentId }
      }),
    })
      .then(res => {
        if (res.ok) alert(`Marked ${isPresent ? 'present' : 'absent'} for ID ${studentId}`);
      })
      .catch(err => console.error(err));
  };

  const rowData = students.map(s => ({
    id: s.id,
    schoolId: s.schoolId || 'N/A',
    attendanceName: s.attendanceName || 'Unnamed',
  }));

  // Pagination logic
  const totalPages = Math.ceil(rowData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRows = rowData.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <>
      <Column lg={16} md={8} sm={4}>
        <h2>Take Attendance</h2>
      </Column>
       <Column lg={16} md={8} sm={4}>
       <Button onClick={handleStream} >Add Stream</Button>
       </Column>
      <Column lg={16} md={8} sm={4}>
        <DataTable rows={paginatedRows} headers={headers}>
          {({ rows, headers, getHeaderProps, getRowProps }) => (
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    {row.cells.map(cell =>
                      cell.info.header === 'actions' ? (
                        <TableCell key={cell.id}>
                          <Button size="sm" onClick={() => markAttendance(row.id, true)}>True</Button>
                          <Button size="sm" kind="danger" onClick={() => markAttendance(row.id, false)}>False</Button>
                        </TableCell>
                      ) : (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DataTable>

        {/* Pagination Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button size="sm" disabled={currentPage === 1} onClick={goToPreviousPage}>
            Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button size="sm" disabled={currentPage === totalPages} onClick={goToNextPage}>
            Next
          </Button>
        </div>
      </Column>
      <AddStreamModal  isOpen={stream} onClose={handleStream} />
    </>
  );
};

export default AttendanceStudentList;

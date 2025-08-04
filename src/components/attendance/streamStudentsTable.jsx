import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
  Column,
  Button,
} from '@carbon/react';
import AddStreamModal from './addStreamModal';
import AddAttendanceStudentModal from './studentAttendanceModal';

const headers = [
  { key: 'id', header: 'ID' },
  { key: 'streamName', header: 'Stream Name' },
  { key: 'classRoom', header: 'Classroom' },
];

const AttendanceStreamTable = () => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();
  const [stream, setStream]=useState(false)
  const [students,setStudents] = useState()

  const handleStream = ()=>{
    setStream(!stream)
  }

    const handleStudent = ()=>{
    setStudents(!students)
  }

  useEffect(() => {
    fetch('http://localhost:8080/edutech/api/attendance-streams')
      .then(res => res.json())
      .then(data => setRows(data));
  }, []);

  const onRowClick = (rowId) => {
    navigate(`/attendance/${rowId}`);
  };

  const pagedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
    <Column lg={16} md={8} sm={4} >
    <h2>Click stream to take attendance</h2>
    </Column>
<Column lg={16} md={8} sm={4}>
       <Button  style={{margin:"5px"}} onClick={handleStream} >Add Stream</Button>
       <Button  style={{margin:"5px"}} onClick={handleStudent} >Add Student</Button>
       </Column>

    <Column lg={16} md={8} sm={4} >
      <DataTable rows={pagedRows} headers={headers}>
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
                <TableRow
                  key={row.id}
                  {...getRowProps({ row })}
                  onClick={() => onRowClick(row.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={rows.length}
        pageSizes={[5, 10, 20]}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
      </Column>
       <AddStreamModal  isOpen={stream} onClose={handleStream} />
       <AddAttendanceStudentModal  isOpen={students} onClose={handleStudent} />
    </>
  );
};

export default AttendanceStreamTable;

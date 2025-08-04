import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterAttendanceTable from './components/attendance/registerAttendance';
import Heading from './components/layout/heading';
import AttendanceStreamTable from './components/attendance/streamStudentsTable';
import { Grid } from '@carbon/react';
import Homeboard from './components/homePage/homeboard';
import Admin from './components/admin/admin';
import LibraryInput from './components/library/addBook';
import EventPage from './components/events/addeventModal';
import LibraryPage from './components/library/LibraryPage';


function App() {
  return (
    <>
    <Heading />
    <Grid  style={{marginTop:"3rem"}} >
      
        <Routes>
          <Route path='/' element={<Homeboard />} />
<Route path='/admin' element={<Admin />} />
<Route path='/library' element={<LibraryPage />} />
<Route path='/manageBooks' element={<LibraryInput />} />
<Route path='/manageEvents' element={<EventPage />} />
       <Route path='/attendance' element={<AttendanceStreamTable />} />
      <Route path='/attendance/:id' element={<RegisterAttendanceTable />} />
    </Routes>

    </Grid>
  

    </>
  
  );
}

export default App;

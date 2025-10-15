
import './App.css';


import Homeboard from './components/homePage/homeboard';


import { useEffect, useState } from 'react';
import BannerPage from './components/homePage/banner';
import HeadBoard from './components/homePage/HeadBoard';
import ChatBoard from './components/chat/chatBoard';
import Persons from './components/persons/persons';
import CreatePersonPage from './components/admin/register';
import EventPage from './components/events/addeventModal';
import Events from './components/events/events';
import Login from './components/admin/login';


import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [header, setHeader] = useState(false);

  useEffect(() => {
    // Show header on all pages except login
    if (location.pathname !== "/") {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/" ? (
        <Login />
      ) : (
        <>
          {header && <HeadBoard />}
          <Routes>
            <Route path="/home" element={<Homeboard />} />
            <Route path="/chat" element={<ChatBoard />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/register" element={<CreatePersonPage />} />
            <Route path="/addEvent" element={<EventPage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

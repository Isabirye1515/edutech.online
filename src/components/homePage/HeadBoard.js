import React, { useState } from 'react';
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavItem,
  SideNavLink,
} from '@carbon/react';
import {
  Close,
  Notification,
  Search,
  User,
} from '@carbon/icons-react';
import { menuItems } from './dashboardobject';
import Admin from '../admin/admin';

const HeadBoard = () => {
  const [notifyButtonActive, setNotifyButtonActive] = useState(false);
  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const [userButtonActive, setUserButtonActive] = useState(false);
  const [sideNavExpanded, setSideNavExpanded] = useState(false);

  const toggleSideNav = () => {
    setSideNavExpanded((prev) => !prev);
  };

  const handleNotification = () => {
    setNotifyButtonActive(!notifyButtonActive);
  };

  const handleSearch = () => {
    setSearchButtonActive(!searchButtonActive);
  };

  const handleUser = () => {
    setUserButtonActive(!userButtonActive);
  };

  return (
    <>
     
      <Header aria-label="EDUTECK ONLINE" className='heading' >
        <HeaderMenuButton
          aria-label="Open menu"
          isCollapsible
          onClick={toggleSideNav}
          isActive={sideNavExpanded}
        />

        <HeaderName href="/home" prefix="EDUTECK">
          ONLINE
        </HeaderName>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={handleSearch}
          >
            {!searchButtonActive ? <Search size={20} /> : <Close size={20} />}
          </HeaderGlobalAction>

          <HeaderGlobalAction

            aria-label="Notifications"
            onClick={handleNotification}
          >
            {!notifyButtonActive ? (
              <Notification size={15}  
               />
            ) : (
              <Close size={20} />
            )}
          </HeaderGlobalAction>

          <HeaderGlobalAction
            
            aria-label="User Profile"
            onClick={handleUser}
          >
            {!userButtonActive ? <User size={20} /> : <Close size={20} />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>

      {/* ---------- Right-side Admin Panel ---------- */}
      {userButtonActive && (
        <div
          style={{
            position: 'fixed',
            right: 0,
            top: '3rem', // sits below header
            height: 'calc(100vh - 3rem)',
            width: '300px',
            backgroundColor: '#f4f4f4',
            boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            overflowY: 'auto',
            transition: 'right 0.3s ease-in-out',
          }}
        >
          <Admin />
        </div>
      )}

      {/* ---------- Side Navigation ---------- */}
      <SideNav
        aria-label="Side navigation"
        expanded={sideNavExpanded}
        isFixedNav={false}
        isPersistent={false}
        onOverlayClick={toggleSideNav}
        className="sideBar"
      >
        <SideNavItems>
          {menuItems.map((item) => (
            <RecursiveSideNavItem key={item.id} item={item} />
          ))}
        </SideNavItems>
      </SideNav>
    </>
  );
};

// ---------- Recursive Menu Renderer ----------
const RecursiveSideNavItem = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="side-item-group">
      <SideNavItem className="sideItem">
        <SideNavLink
          href={item.actionUrl}
          renderIcon={item.icon}
          className="sideLink"
        >
          {item.title}
        </SideNavLink>
      </SideNavItem>

      {hasChildren && (
        <div className="sideSubGroup">
          {item.children.map((child) => (
            <RecursiveSideNavItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadBoard;

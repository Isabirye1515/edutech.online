import React from "react";
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavItem,
} from "@carbon/react";
import { Event, Store, Scale, User, Document, Recycle, PenFountain } from "@carbon/icons-react";

const AdminSideNav = () => {
  const systems = [
    { id: 1, title: "Add An Event", actionUrl: "/addEvent",icon:Event },
    { id: 2, title: "Manage Books", actionUrl: "/manageBooks", icon:Document },
    { id: 3, title: "Manage Marks", actionUrl: "/manageMarks", icon:PenFountain },
    { id: 4, title: "Manage Attendance", actionUrl: "/manageAttendance", icon:Recycle },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        height: "100vh",
        width: "300px",
        backgroundColor: "#f4f4f4",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        overflowY: "auto",
        zIndex: 1000,
        marginTop:"3rem"
      }}
    >
      <SideNavItems>
        {systems.map((system) => (
          <SideNavItem key={system.id}>
            <SideNavLink href={system.actionUrl} renderIcon={system.icon}>
              {system.title}
            </SideNavLink>
          </SideNavItem>
        ))}
      </SideNavItems>
    </div>
  );
};

export default AdminSideNav;

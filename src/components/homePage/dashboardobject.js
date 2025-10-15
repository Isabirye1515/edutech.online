import {  Group, Help, Home, Information, Location, Notification, Settings, UpdateNow, User, UserFeedback, Version } from "@carbon/icons-react"
import  { AttendanceSvg, EventsSvg, ExamSvg, LibraryBookshelfIcon, MessageSvg, PaymentSvg, TimetableSvg } from "./svgUtil"
export const DashBoardObject =[
    {id:1,
        title:"School Events And News" ,
        item:<EventsSvg />,
        actionUrl:"/events"
    },
        {id:2,
        title:"Chat And Messages" ,
        item:<MessageSvg/>,
        actionUrl:"/chat"
    }
    ,
        {id:3,
        title:"Attendance CheckOut" ,
        item:<AttendanceSvg/>
    }
    ,
        {id:4,
        title:"Payment And Fees" ,
        item:<PaymentSvg/>
    }
    ,{
        id:5,
        title:"Books And Library" ,
        item:<LibraryBookshelfIcon />
    },
    {id:6,
        title:"Exams And Results" ,
        item:<ExamSvg />
    },
    {
    id:7,
    title:"Time Table",
    item:<TimetableSvg />
    },
    {
    id:8,
    title:"Staff And Students",
    item:<Group size={130} />,
    actionUrl:"/persons"
    }


    
    
]
export const menuItems = [
  {
    id: 1,
    title: "Home",
    icon: Home,
    actionUrl: "/home"
  },
  {
    id: 2,
    title: "Version",
    icon: Version,
    actionUrl: "/version"
  },
  {
    id: 3,
    title: "Settings",
    icon: Settings,
    actionUrl: "/settings"
  },
  {
    id: 4,
    title: "Account",
    children: [
      {
        id: 1,
        title: "Account",
        icon: User,
        actionUrl: "/editAccount"
      }
    ]
  },
  {
    id: 5,
    title: "General",
    children: [
      {
        id: 1,
        title: "Language",
        icon: Location,
        actionUrl: "/language"
      },
      {
        id: 2,
        title: "Help",
        icon: Help,
        actionUrl: "/help"
      },
      {
        id: 3,
        title: "FeedBack",
        icon: UserFeedback,
        actionUrl: "/feedBack"
      },
      {
        id: 4,
        title: "Enable/Disable Notifications",
        icon: Notification,
        actionUrl: "/enableNotification"
      },
      {
        id: 5,
        title: "Rate Us",
        icon: Home,
        actionUrl: "/rateUs"
      },
      {
        id: 6,
        title: "Update",
        icon: UpdateNow,
        actionUrl: "/update"
      },
      {
        id: 7,
        title: "About",
        icon: Information,
        actionUrl: "/about"
      }
    ]
  }
];
     

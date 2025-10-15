export const EventsSvg =()=>{
    return(
        <>
        <svg hieght="20" width="170"  xmlns="http://www.w3.org/2000/svg"  className='svg-item' >
                        <path d="M 10, 60 Q 1, 5, 80, 80" stroke="#ddd" strokeWidth="1" fill="none" />
                        <path d="M 10, 50 Q 1, 130, 80, 80" stroke="black" strokeWidth="1" fill="none" />
                        <path d="M 80, 80 Q 160, 5, 160, 50" stroke="black" strokeWidth="1" fill="none" />
                        <path d="M 80, 80 Q 160, 130, 160, 50" stroke="#ddd" strokeWidth="1" fill="none" />
                        <circle cx="80" cy="80" r="5" fill="#ddd" /> 
                        </svg>
        </>
    )
}
export const MessageSvg =()=>{
    return(
    <>
    <svg hieght="100" width="100"  xmlns="http://www.w3.org/2000/svg"  className='message-item' >
<path d="M 40 40 40 100" stroke="#fff" />
<path d="M 80 40 80 100" stroke="#fff" />
<path d="M 40 40 80 40" stroke="#fff" />
<path d="M 40 100 80 100" stroke="#fff" />
<path d="M 60 30 60 50" stroke="#fff" />
<path d="M 90 30 90 45" stroke="#fff" />
<path d="M 60 30 90 30" stroke="#fff" />
<path d="M 60 50 Q 65 45 90 45" stroke="#fff" />
<text x="68" y="43" length="10" font-family="Tahoma" fill="white" >Hi!</text>
<circle cx="63" cy="93" r="5" fill="white" />
 </svg>
    </>)
}
export const AttendanceSvg =()=>{
    return(
        <>
        <svg hieght="100" width="100"  xmlns="http://www.w3.org/2000/svg"  className='message-item' >
<path d="M 40 40 40 100" stroke="#fff" />
<path d="M 80 40 80 100" stroke="#fff" />
<path d="M 40 40 80 40" stroke="#fff" />
<path d="M 40 100 80 100" stroke="#fff" />
<circle cx="60" cy="45" r="5" fill="white" />
<path d="M 45 60 55 60" stroke="#fff" />
<path d="M 45 70 55 70" stroke="#fff" />
<path d="M 45 80 55 80" stroke="#fff" />
<path d="M 45 90 55 90" stroke="#fff" />
<path d="M68 58L70 60L75 55 " stroke="white" />
<path d="M68 68L70 70L75 65 " stroke="white" />
<path d="M68 78L70 80L75 75 " stroke="white" />
</svg>
        </>
    )
}
export const PaymentSvg =()=>{
    return(
        <>
        <svg height="100" width="100"  xmlns="http://www.w3.org/2000/svg"  className='money-item' >
<path d="M 40 10  10 80" stroke="#fff" />
<path d="M 40 10  70 10" stroke="#fff" />
<path d="M 70 10 40 78" stroke="#fff" />
<path d="M 10 80 40 78" stroke="#fff" />
<circle cx="40" cy="45" r="10" stroke="white" fill="none" />
<text x="35" y="50" fill="white" fontSize="10">$</text>
<path d="M45 5L85 5L65 35 " stroke="white" fill="none" />
<path d="M80 15L85 15L65 45 " stroke="white" fill="none" />
<path d="M15 83L46 85L65 45 " stroke="white" fill="none" />
</svg>
        </>
    )
    
}
export const LibraryBookshelfIcon = () => (
  <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 160 H180 V170 H20 Z" fill="#8d8d8d" />
    <path d="M25 50 V160 H35 V50 Z" fill="#6f6f6f" />
    <path d="M165 50 V160 H175 V50 Z" fill="#6f6f6f" />
    <path d="M25 100 H175 V110 H25 Z" fill="#8d8d8d" />
    <path d="M40 60 H55 V150 H40 Z" fill="#0f62fe" />
    <path d="M60 50 H75 V150 H60 Z" fill="#0043ce" />
    <path d="M80 70 H95 V150 H80 Z" fill="#4589ff" />
    <path d="M105 65 L120 55 L125 150 L110 150 Z" fill="#1192e8" />
    <path d="M135 60 H150 V150 H135 Z" fill="#005d5d" />
    <path d="M155 60 H165 V150 H155 Z" fill="#009d9a" />
  </svg>
);


export const TimetableSvg = ()=>(
        
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" stroke="white" fill="none" stroke-width="2">
  <path d="M15 20 H65 V70 H15 Z" />
  <path d="M15 35 H65" />
  <path d="M15 50 H65" />
  <path d="M30 20 V70" />
  <path d="M45 20 V70" />

  
  <circle cx="80" cy="40" r="20" />
  <path d="M80 40 L80 30" />
  <path d="M80 40 L90 40" />
</svg>

    
    )



export const ExamSvg =()=>{
    return(
        <>
        <svg hieght="20" width="170"  xmlns="http://www.w3.org/2000/svg" stroke="white" fill="none" stroke-width="2">
  <path d="M20 20 H80 V80 H20 Z" />
  <path d="M30 35 H70" />
  <path d="M30 50 H70" />
  <path d="M30 65 H55" />

  <path d="M65 60 L68 70 L78 70 L70 76 L73 86 L65 80 L57 86 L60 76 L52 70 L62 70 Z" fill="white" />
</svg>

    </>
    )
}
 const users = [
  { id: 1, firstName: "Alice", lastName: "Johnson", isOnline: true },
  { id: 2, firstName: "Bob", lastName: "Smith", isOnline: false },
  { id: 3, firstName: "Charlie", lastName: "Brown", isOnline: true },
  { id: 4, firstName: "Diana", lastName: "Miller", isOnline: false },
  { id: 5, firstName: "Ethan", lastName: "Davis", isOnline: true },
  { id: 6, firstName: "Fiona", lastName: "Garcia", isOnline: false },
  { id: 7, firstName: "George", lastName: "Wilson", isOnline: true },
  { id: 8, firstName: "Hannah", lastName: "Martinez", isOnline: false },
  { id: 9, firstName: "Ian", lastName: "Anderson", isOnline: true },
  { id: 10, firstName: "Julia", lastName: "Thomas", isOnline: false },
];
export default users;



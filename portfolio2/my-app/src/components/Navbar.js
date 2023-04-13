import  "./NavbarStyle.css";

import React,{useState} from "react";
// import { Link } from "react-router-dom";

// import {FaBars,FaTimes} from "react-icons/fa";

// const Navbar=()=>{
//     const [click,setClick] = useState(false);
//     const handleClick=() => setClick(!click);

//     const[color,setColor]=useState(false);
//     const changeColor=()=>{
//         if(window.scrollY >=100){
//             setColor(true);
//         }else{
//             setColor(false);
//         }
//     };
//     window.addEventListener("scroll",changeColor);

//     return(
//         <div className={color?"header header-bg":"header"}>
//             <Link to ="/">
//                 <h1>Portfolio</h1>
//             </Link>
//             <ul className={click ?"nav-menu active":"nav-menu"}>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/project">Project</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//             <div className="hamburger" onClick ={handleClick}>

//                 {click ?(
//                 <FaTimes size={20} style={{color:"#fff"}}  />


//                 ):(<FaBars size={20} style={{color:"#fff"}}  />
                
                
                
//             )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;



const Navbar = () => {
    return (
      <>
      <nav className="main-nav">
          {/* first logo part */}
          <div className='logo'>
          <h2>
              <span>T</span>hapa
              <span>T</span>echnical
          </h2>
          </div>
          {/* 2nd menu part */}
          <div className="menu-link">
              <ul>
                  <li>
                      <a href="/">Home</a>
                  </li>
                  <li>
                      <a href="/project">Project</a>
                  </li>
                  <li>
                      <a href="/about">About</a>
                  </li>
                  <li>
                      <a href="/contact">Contact</a>
                  </li>
              </ul>
          </div>
          {/* 3rd social media link
          <div className="social-media">
              <ul className="social-media-desktop">
                  <li>
                      <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa"><FaFacebookSquare/></a>
  
                  </li>
                  <li>
                      <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa"><FaInstagramSquare/></a>
  
                  </li>
                  <li>
                      <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa"><FaYoutubeSquare/></a>
  
                  </li>
              </ul>
  
          </div>
  
           */}
      </nav>
      </>
    )
  }
  
  export default Navbar
  
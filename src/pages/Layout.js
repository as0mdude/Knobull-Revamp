import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import knobull from "./Knobullbanner-01.png"; 

const Layout = () => {
  return (
    <>
      
      <nav>
      
      <img src = {knobull} alt = "banner" height={70} width={210}></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/pget">Blog</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />

      <footer><p>Copyright © 2023 - Knobull, LLC</p></footer>


      
    </>
  )
};

export default Layout;

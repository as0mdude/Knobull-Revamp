import './Home.css';
import { Outlet, Link } from "react-router-dom";


const Home = () => {
    return(
    <>
    
    
    <div class="maintext"><h1>Your one-stop shop for all your academic needs.</h1>
    <h3>Knobull offers a readily accessible environment for learning guidance. Our mission revolves around propelling academic and career success through bold and productive collaboration.</h3></div>
    <Link to="/contact">
     <button type="button">
          I'm in!
     </button>
    </Link>
    
    
    
    </>
    );
  };
  
  export default Home;
 
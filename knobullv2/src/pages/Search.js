import './Search.css';
import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from "react";

const Search = () => {
    
        useEffect(() => {
          const script = document.createElement("script");
          document.head.append(script);
          script.src = "https://cse.google.com/cse.js?cx=70c6c2b61ecb04bdb";
        }, []);
    
    return(
    <>
    
    
    
    <div class= "searchtext"><h3>Knobull Search</h3></div>
    <div className="App">
        
    <div class="gcse-search"></div>
      

    </div>
    
    
    
    
    
    </>
    );
  };
  
  export default Search;
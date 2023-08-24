import { useState } from "react";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [body, setBody] = useState('');
  
  const HandleSubmit = (e)=>{
    e.preventDefault();
    const post = {name, location, body};

    fetch('http://localhost:8000/requests', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(post)
    }).then(()=>{
      console.log('new post added');
    })

  }

  return (
    <div className="create">
      <h2>Leave us a message.</h2>
      <h3>Get newsletter | Request support | Ask questions </h3>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Location</label>
        <input 
        type="text" 
        required 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />

        <label>Message</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <button>Send Message.</button>
        
      </form>
    </div>
  );
}
  
  export default Contact;
  

/**<p>{name}</p>
<p>{location}</p>
<p>{body}</p>**/
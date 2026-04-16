
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const  Home = () => {

  const [firstName , setFirstName] = useState("");
  const [lastname , setLastName] = useState("");

  return (
  
      <div className="App">

        <Header/>
        <div>Home</div>

      </div>
   
  );
}

export default Home;
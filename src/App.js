import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link,BrowserRouter as Router  } from 'react-router-dom';
import UserContainer from './Components/UserPage/container';

function App() {
  return (
   
  <div>
    <Router>
     <Routes>
        <Route path="/" element={<UserContainer/>} />
       {/*  <Route path="/user" element={<UserPage />} /> */}
      </Routes>
      </Router>
      </div>
  );
}

export default App;


// now last file to be set container.js and componet.jsx
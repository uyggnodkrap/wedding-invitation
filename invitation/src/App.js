import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header.jsx'
import Body from './layout/Body.jsx'
import Footer from './layout/Footer.jsx'
import React from 'react'
// import { Button } from 'react-bootstrap';


function App() {


  return (
    
  <React.StrictMode>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
  </React.StrictMode>
    
  );
}

export default App;
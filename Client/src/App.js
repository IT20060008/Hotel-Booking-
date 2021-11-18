import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './Components/NavBar/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AddRoom from './Components/Room/AddRoom';
import RoomHome from './Components/Room/RoomHome';
import UpdateRoom from './Components/Room/UpdateRoom';
// import EventHome from './Components/Event/EventHome';



export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>

        <NavBar />
        
        <ToastContainer />
        <div className="container">
        

          {/*Room*/}
          <Route path="/Room-Add" exact component={AddRoom}></Route>
         <Route path="/Room_Home" exact component={RoomHome}></Route>
         <Route path="/Room_update/:id" exact component={UpdateRoom}></Route>
 
         </div>
      </BrowserRouter>
      
    )
  }
}

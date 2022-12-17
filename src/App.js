import React from "react";
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App(){
  return(
    <div id="maindiv">
      <div id="maindiv2">
      <Header/>
      <Body/>
      <Footer/>
      <Sidebar/>
      </div>
    </div>
  )
}
export default App;
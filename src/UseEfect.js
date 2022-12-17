// useEffect example inr react .

// import logo from './logo.svg';
// import './App.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { CgProfile } from "react-icons/cg";
// import AddCardIcon from '@mui/icons-material/AddCard';
// import { FaBeer } from 'react-icons/fa';
// function App(){
//   return(
//     <div>
// Hi this is my <AddCardIcon/>
// <h3> Lets go for a <FaBeer />? </h3>
// <CgProfile/>

//     </div>
//   )
// }
// export default App;

import React,{useEffect,useState} from 'react'

export default function App(){
  const [count,setCount] =useState(0)
  const [renderCount,setRenderCount]=useState(0)

  // useEffect(()=>{
  //   alert("this is useEffect on every render")
  // }) //on every render
  // useEffect(()=>{
  //   alert("this is useEffect only on first render")
  // },[]) //only first time
  useEffect(()=>{
    alert("this is useEffect on count change")
  },[count,renderCount]) // only when count value changes

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>click</button>
      <h2>{renderCount}</h2>
      <button onClick={()=>{
        setRenderCount(renderCount+1)
      }}>click</button>
    </div>
  )
}
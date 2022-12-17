import React from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillCloseCircle } from "react-icons/ai";
function Header(){
    return(
        <div id="container1">
            <p id="font1"><VscAccount/> INTERVIEW PROCESS</p>
            <p id="Cicle"><AiFillCloseCircle size={40}/></p>
        </div>
    );
}
export default Header;
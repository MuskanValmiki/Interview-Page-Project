import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
function Body(){
    return(
        <div id="container2">
            <h2 id="font15">Name<span id="star">*</span></h2>
            <h2 id="font16">Bussiness Developement Executive</h2>
            <hr id="track1"></hr>
            <td>
                <h2 id="font17">Interview Process Rounds</h2>
            </td>
            <div id="container2_1">
                <div id="container2_11">1</div>
                <div id="container2_12"><RiDeleteBin6Line size={20}/></div>
                <div id="container2_13">2</div>
                <div id="container2_14"><RiDeleteBinLine size={20}/></div>
            </div>
            <div id="container2_2">
                <div id="container2_21">
                    <h3 id="font18">Level<span id="star1">*</span></h3>
                    <h3 id="font19">1</h3>
                    <hr id="track2"></hr>
                    
                </div>
                <div id="container2_22">
                    <h3 id="font20">Level<span id="star2">*</span></h3>
                    <h3 id="font21">2</h3>
                    <hr id="track3"></hr>
                </div>
                <div id="container2_23">
                    <h3 id="font22">Name<span id="star3">*</span></h3>
                    <h3 id="font23">Telephonic Round</h3>
                    <hr id="track4"></hr>
                </div>
                <div id="container2_24">
                    <h3 id="font24">Name<span id="star4">*</span></h3>
                    <h3 id="font25">Telephonic Round</h3>
                    <hr id="track5"></hr>
                </div>
                <div id="container2_25">
                    <h3 id="font26">Select Interviewer<span id="star5">*</span></h3>
                    <h4 id="font27">GIRISHPRASAD KS</h4>
                    <hr id="track6"></hr>
                </div>
                <div id="container2_26">
                    <h3 id="font28">Select Interviewer<span id="star6">*</span></h3>
                    <h4 id="font29">RAKESH APPAJI</h4>
                    <hr id="track7"></hr>
                </div>  
                
            </div>
            <div id="container21_1">ADD NEW<span>+</span></div>
            <div id="container21_2">UPDATE</div>
            <div id="container21_3">CANCEL</div>

        </div>
    )
}
export default Body;
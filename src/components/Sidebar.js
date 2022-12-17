import React from "react";
import { VscHome } from "react-icons/vsc";
import { SlUser } from "react-icons/sl";
import { SlUserFollow } from "react-icons/sl";
import { BiStreetView } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import { TfiBag } from "react-icons/tfi";
import { BsCalendar2XFill } from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { TbTrendingUp } from "react-icons/tb";
function Sidebar(){
    return(
        <div id="container4">
                <h2 id="font2"><VscHome/> Dashboard{"<"}</h2>
                <h2 id="font3"><SlUser/> Employee{"<"}</h2>
                <h2 id="font4"><SlUserFollow/> Attendance{"<"}</h2>
                <h2 id="font5"><BiStreetView/> Site/Field Track{"<"}</h2>
                <h2 id="font6"><SiAmazonpay/> Payroll{"<"}</h2>
                <h2 id="font7"><TfiBag/> Statustory Compliances{"<"}</h2>
                <h2 id="font8"><BsCalendar2XFill/> Leaves{"<"}</h2>
                <h2 id="font9"><TfiSettings/> Asset Management{"<"}</h2>
                <h2 id="font10"><TbTrendingUp/> Goals & Performance{"<"}</h2>
                <h2 id="font11"><SlUser/> Recruitment</h2>
                <h2 id="font12"> Openings</h2>
                <h2 id="font13"> Candidates</h2>
        </div>
    );
}
export default Sidebar;
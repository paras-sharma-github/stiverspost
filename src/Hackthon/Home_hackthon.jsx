import React from "react";
import List from "../List";
import Hackthon_data from './Home_hackthon_data'

const Hackthon=()=>{
    return(<>
       <div className="data_box">
                    <h2>Hackthon</h2>
                    <div className="data_list">
                    {
                      Hackthon_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="Register" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                    <div className="more">
                      <a href="/hackthon">Read more</a>
                    </div>
                </div>
    </>)
}
export default Hackthon;
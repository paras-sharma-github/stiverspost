import React from "react";
import List from "../List";
import Contest_data from './Home_contest_data'

const Contest=()=>{
    return(<>
       <div className="data_box">
                    <h2>Contest's</h2>
                    <div className="data_list">
                    {
                      Contest_data.map((value,ind)=>{
                        return(
                        <List key={ind} link={value.link} date={value.date} c_name={value.cname} icons={value.icons} feature="compete" tittle={value.tittle}/>
                      );})
                    }
                    </div>
                    <div className="more">
                      <a href="/contest">Read more</a>
                    </div>
                </div>
    </>)
}
export default Contest;
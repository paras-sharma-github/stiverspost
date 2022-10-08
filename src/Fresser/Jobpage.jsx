import React from "react";
import Banner_card from "../Banner_card";
import experience from '../images/experience.jpeg'
import fresser from '../images/fresser.png'
import Fresser from './Fresser'
import Experience from '../Experience/Experience'
import Expreience_data from '../Experience/Experience_data'
import Home_fresser_data from './Fresser_data'



const jobpage = () => {
    return (<>
        <section id="page">
            <div className="page_head">
            <Banner_card image={experience} date={Expreience_data[0].date} cname={Expreience_data[0].cname} tittle={Expreience_data[0].tittle} link={Expreience_data[0].link}/>
            <Banner_card image={fresser} date={Home_fresser_data[0].date} cname={Home_fresser_data[0].cname} tittle={Home_fresser_data[0].tittle} link={Home_fresser_data[0].link} />
            <Banner_card image={experience} date={Expreience_data[1].date} cname={Expreience_data[1].cname} tittle={Expreience_data[1].tittle} link={Expreience_data[1].link}/>
            </div>
            <div className="page_data" style={{"gap":"3vw"}}>
                <Fresser/>
                <Experience/>
            </div>
        </section>
    </>)
}

export default jobpage;
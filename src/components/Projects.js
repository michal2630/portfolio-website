import React from 'react';
import Website from './Website';
import OLB from "../img/olb.png";
import WiP from '../img/WiP.png'


const Projects = () => (
    <React.Fragment>
        <h1>Projects</h1>
        <div className="project-layout">
            <Website
                link={"http://www.oldlondonbus.co.uk/"}
                image={OLB} 
                alt="Old london bus website" 
                description="First commercial project, simple&clean website" 
                technology="HTML, CSS, JavaScript, Bootstrap, PHP"
            />
            <Website 
                image={WiP} 
                alt="Product sales website"
                description="Project involving backend as well as front end. New implementation of safety features as well as practical" 
                technology="React, Redux, Bootstrap"
            />
            <Website 
                image={WiP} 
                alt="Placeholder"
                description="abc" 
                technology="xyz"
            />
        </div>
    </React.Fragment>
)


export default Projects;
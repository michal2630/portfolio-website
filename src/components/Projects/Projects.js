import React from 'react';
import Website from './Website';
import OLB from "../../img/olb.png";
import WiP from '../../img/WiP.png'
import AppWrapper from '../Parts/AppWrapper';
import Background from '../Parts/Background';

const Projects = () => (
    <React.Fragment>
        <Background />
        <AppWrapper>
            <h1>Projects</h1>
            <div className="project-layout">
                <Website
                    link={"http://www.oldlondonbus.co.uk/"}
                    image={OLB} 
                    alt="Old london bus website" 
                    description="First commercial project, simple&clean website" 
                    technology="HTML, CSS, JavaScript, Bootstrap, PHP"
                />
            </div>
        </AppWrapper>
    </React.Fragment>
)


export default Projects;
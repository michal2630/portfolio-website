import React from 'react';
import Wrapper from './Wrapper';
import Website from './Website'
const Projects = () => (
    <Wrapper>
        <h1>Projects</h1>
        <div className="projects-examples">
            <Website />
            <Website />
        </div>
    </Wrapper>
)


export default Projects;
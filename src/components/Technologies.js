import React from "react";
import {
    DiBootstrap,
    DiCss3,
    DiReact,
    DiGithubBadge,
    DiJavascript1,
    DiHtml5,
    DiPhotoshop,
    DiSass,
    DiNpm,
    DiGitBranch,
    DiNodejs
} from "react-icons/di";


const Technologies = () => (
    <React.Fragment>
        <h1>Technologies I use</h1>
            <div className="icons">
                <DiBootstrap />
                <DiGitBranch />
                <DiNpm />
                <DiSass />
                <DiPhotoshop />
                <DiHtml5 />
                <DiJavascript1 />
                <DiGithubBadge />
                <DiReact />
                <DiCss3 />
                <DiNodejs />
            </div>
    </React.Fragment>
)

export default Technologies;
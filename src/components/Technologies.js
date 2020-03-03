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
                <div className="column">
                    <DiJavascript1 />
                    <DiReact />
                    <DiGitBranch />
                    <DiHtml5 />
                </div>
                <div className="column">
                    <DiPhotoshop />
                    <DiBootstrap />
                    <DiCss3 />
                    <DiSass />
                </div>
                <div className="column">
                    <DiGithubBadge />
                    <DiNpm />
                    <DiNodejs />
                </div>
            </div>
    </React.Fragment>
)

export default Technologies;
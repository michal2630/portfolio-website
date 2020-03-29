import React from "react";
import IconsData from '../data/iconsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppWrapper from './Parts/AppWrapper';
import Background from './Parts/Background';

const Technologies = () => (

    <React.Fragment>
        <Background />
        <AppWrapper>

            <h1>Technologies I use</h1>  

            <div className="technologies-container">
                <div className="column column-first">  
                    {IconsData.map((Icon, index)=>{
                        let Icons = Icon.name;
                        let numCol = Icon.column;
                        let title = Icon.title;
                        let description = Icon.description;
                        if(numCol === 0){
                            return (
                                <div className="technlogy-card">
                                    <div className="icon-card">
                                        <FontAwesomeIcon 
                                            icon={['fab', Icons]} 
                                            key={Icon.id} 
                                            size="4x"
                                            />
                                    </div>    
                                    <div className="cardDescription">
                                        <div className="technlogyTitle">{title}</div>
                                        <div className="technlogyDescription">{description}</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div> 
                <div className="column column-second">
                    {IconsData.map((Icon, index)=>{
                        let Icons = Icon.name;
                        let numCol = Icon.column;
                        let title = Icon.title;
                        let description = Icon.description;
                        if(numCol === 1){
                            return (
                                <div className="technlogy-card">
                                    <div className="icon-card">
                                        <FontAwesomeIcon 
                                            icon={['fab', Icons]} 
                                            key={Icon.id} 
                                            size="4x"
                                            />
                                    </div>    
                                    <div className="cardDescription">
                                        <div className="technlogyTitle">{title}</div>
                                        <div className="technlogyDescription">{description}</div>
                                    </div>
                                </div>
                            )          
                        }
                    })}
                </div> 
            </div>
        </AppWrapper>
    </React.Fragment>
);


export default Technologies;
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
            {IconsData.map((Icon, index)=>{
            let Icons = Icon.name;
                return <FontAwesomeIcon 
                    icon={['fab', Icons]} 
                    key={Icon.id} 
                    size="4x"
                    />
            })};
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
            <h1>dha</h1>
        </AppWrapper>
    </React.Fragment>
);


export default Technologies;
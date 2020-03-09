import React from "react";
import IconsData from '../data/iconsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Technologies = () => (

    <React.Fragment>
        <h1>Technologies I use</h1>     
        {IconsData.map((Icon, index)=>{
          let Icons = Icon.name;
            return <FontAwesomeIcon 
                icon={['fab', Icons]} 
                key={Icon.id} 
                size="4x"
                />
        })};

    </React.Fragment>
);


export default Technologies;
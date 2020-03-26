import React, { Component } from 'react';
import Particles from 'react-particles-js';
import BackgroundParams from '../../data/particlesjs-config.json';

class Background extends Component {

    render() {
        return (
            <div className='animated-background'>
            <Particles
                params={BackgroundParams}
            />
            </div>
            )
    }
}

export default Background;
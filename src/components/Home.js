import React, { useState } from 'react';
import AppWrapper from './Parts/AppWrapper';
import Background from './Parts/Background';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Arrow from './Parts/Arrow';

function Home(){

    AOS.init()

    return (
        <React.Fragment>
            <Background />
            <AppWrapper>
                <div className="homeWrap">
                    <h1 data-aos="fade-right">Welcome on my website!</h1>               
                    <div className="firstTextWrap">
                        <div className="firstText" data-aos="fade-right">
                        My name is Michal, I am from Poland
                        <br/>I perceive myself as a kind of enthusiast and beginner of programing but very willing to learn
                        </div>
                    </div>

                    <Arrow />

                    <div className="bg-top">
                        <div className="bg-top-content">
                            <h1 className="bg-top-title" data-aos="fade-right">I was always interested</h1>
                            <h2 data-aos="fade-left">
                                in technology as well as coding,
                                while I was doing my bachelor's
                                <br/>I was coding more on the side which was always fun for me
                            </h2>
                        </div>
                    </div>

                    <div className="bg-middle">
                        <h1 data-aos="fade-right">I have been studying in Poland</h1>             
                        <h2 className="bg-middle-text" data-aos="fade-left">
                            as well as other countries ie. Croatia or Macedonia, traveling meanwhile around other countries 
                            <br/>I have experienced many cultures and experiences which had a big impact on me as a person
                        </h2>
                    </div>
                    
                    <div className="bg-bottom">
                        <div className="bg-bottom-content">
                            <h1 className="bg-bottom-title" data-aos="fade-right">After a while...</h1>
                        <h2 className="bg-bottom-text" data-aos="fade-left">
                            it turned out to be something more after short while I started doing some small projects
                            <br/>And here we are, thanks for visiting me on my portfolio website, please have a look around
                        </h2>
                        </div>
                    </div>
                    
                </div>
                </AppWrapper>
        </React.Fragment>
    );
}

export default Home;
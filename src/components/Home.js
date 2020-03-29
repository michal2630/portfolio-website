import React from 'react';
import AppWrapper from './Parts/AppWrapper';
import Background from './Parts/Background';

const Home = () => (
    <React.Fragment>
        <Background />
        <AppWrapper>
            <div className="homeWrap">
                <h1>Welcome on my website!</h1>
                <div className="firstTextWrap">
                    <div className="firstText">
                    My name is Michal, I am from Poland
                    <br/>I perceive myself as kind of enthusiast and beginner of programing
                    </div>
                </div>

                <div className="bg-top">
                    <div className="bg-top-content">
                        <h1 className="bg-top-title">I was always interested</h1>
                        <h2>
                            in technology as well as coding,
                            while I was doing my bachelor's
                            <br/>I was coding more on the side which was always fun for me
                        </h2>
                    </div>
                </div>

                <div className="bg-middle">
                    <h1>I have been studying in Poland</h1>             
                    <h2 className="bg-middle-text">
                        as well as other countries ie. Croatia or Macedonia, traveling meanwhile around other countries 
                        <br/>I have experienced many cultures and experiences which had a big impact on me as a person
                    </h2>
                </div>
                
                <div className="bg-bottom">
                    <div className="bg-bottom-content">
                        <h1 className="bg-bottom-title">After a while...</h1>
                    <h2 className="bg-bottom-text">
                        it turned out to be something more after short while I started doing some small projects
                        <br/>And here we are, thanks for visiting me on my portfolio website, please have a look around
                     </h2>
                    </div>
                </div>
                
            </div>
            </AppWrapper>
    </React.Fragment>
);

export default Home;
import React from 'react';

import '../styles/about.css'
import aboutgroup from "../images/about.jpg";

export default class About extends React.Component {

    render() {
        return (
            <div >
                <section className="bag-container">
                    <section className="bag-title">
                        <div className="bag-titledisc"> Abouts us!</div>
                        <div className="bag-abouttitle">We do teach things differently, and that's the reason we like it.!</div>
                    </section>
                    <section className="bag-aboutbody">
                        <div className="bag-leftaboutbody">
                            <div className="img">
                                <img src={aboutgroup} alt="group" />
                            </div>
                            <div className="bag-ourteam">
                                <h4>Management</h4>
                                <p>Our ditrubuted  team represents all aspects of teaching services effectively . </p>

                            </div>
                        </div>
                        <div className="bag-rightaboutbody">
                            <div className="bag-ourmission">
                                <h4>Our Services</h4>
                                <p>The Art of Baghant Institute offers a unique and comprehensive training and guide combining  study with mindfulness-awareness techniques. Our programs and individual sessions include state-of-the-art instruction in  all subject along with instruction in innovative techniques for cultivating full-bodied engagement in practicing and for developing confidence and communicative power in performance.</p>
                                <h4>Our Promises</h4>
                                <p>The seminary and institute curricula stress the scriptures and help the student to internalize their vibrancy and meaning.</p>
                                <h4>Bijendra Gupta</h4>
                                <a href='../resume.html'>Resume</a>
                                <h6>CEO</h6>
                                <p>Bijendra gupta is the Chief Executive Officer of Baghant Institute and a member of our Board of Directors</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }

}
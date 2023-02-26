import React from 'react';
import EsanLogo from '../../assets/images/esan.jpg';
import HultLogo from '../../assets/images/hult.jpg';
import IntelSwiftLogo from '../../assets/images/intelswift.jpg';

function About() {
    return (
        <section className='title'>
            <h1 className='name'>Gonzalo Garcia Rivera</h1>
            <hr></hr>
            <div className="row justify-content-center">
                <div className='col-10' id='about-section'>
                    <img></img>
                    <p>Objective-oriented full stack web developer with a passion of learning new disciplines and skills.</p>
                    <p>From an intern to manager, I have a proven record of an excellent work performance at all the places I've worked for.</p>
                    <p>Although my professional experience has driven me to work at different industries from broadcasting, mining, public, trading, etc.</p> 
                    <p>I never stopped in learning new skills that help others at their daily problems.</p>
                </div>

                <div className='card-body'>
                    <h2 className='edu'>Education</h2>
                    <br />
                    <div className='grid-container-profile'>
                        <div className='grid-item'>
                            <div className='title-uni'>IntelSwift</div>
                            <div className='title-concentration'>Web Full Stack</div>
                        </div>

                        <div className='grid-item'>
                            <a href='https://intelswift.com/' target='_blank'><img className='university-logo' src={IntelSwiftLogo} /></a>
                        </div>

                        <div className="grid-item">
                            <div className='title-uni'>Hult International Business School</div>
                            <div className='title-concentration'>Master in Disruptive Innovation</div>
                        </div>

                        <div className="grid-item">
                            <a href='https://www.hult.edu/' target='_blank'><img className='university-logo' src={HultLogo} /></a>
                        </div>

                        <div className="grid-item">
                            <div className='title-uni'>Hult International Business School</div>
                            <div className='title-concentration'>Master in International Business</div>
                        </div>

                        <div className="grid-item">
                            <a href='https://www.hult.edu/' target='_blank'><img className='university-logo' src={HultLogo} /></a>
                        </div>

                        <div className="grid-item">
                            <div className='title-uni'>ESAN University</div>
                            <div className='title-concentration'>Bachelor in Economics</div>
                        </div>

                        <div className="grid-item">
                            <a href='https://www.ue.edu.pe/' target='_blank'><img className='university-logo' src={EsanLogo} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )};

export default About;
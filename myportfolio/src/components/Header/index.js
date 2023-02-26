import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from '../../components/Nav';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row Header" id="header">
                    <Navigation/>
                </div>

                <div className="content">
                    <Routes>
                        <Route path="/portfolio" element={<Portfolio />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/resume" element={<Resume />}/>
                    </Routes>
                </div>
            </BrowserRouter>
            )
        }
    };

export default Header;
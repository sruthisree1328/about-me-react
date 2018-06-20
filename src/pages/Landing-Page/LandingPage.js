import React, { Component } from 'react';
import Content from '../content/Content';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Posts from '../../posts/Posts';
import Skills from '../../skills/Skills';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Posts />
                <Skills />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
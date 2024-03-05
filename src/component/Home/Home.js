import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Topsection from '../Topsection/Topsection';
import SccondSection from '../SecondSection/SecondSection';
import Benefit from '../Benefit/Benefit';
import Reputation from '../reputationadv';
import Featured from '../Featured/Featured';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Topsection />
                <SccondSection />
                <Benefit />
                <Reputation />
                <Featured />
                <Footer />
            </div>
        );
    }
}

export default Home;

import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ToTopButton from './common/toTopButton';
import Header from "./Header/Header";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Footer from "./Footer/Footer";
import './fonts/fonts.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
    //     window.addEventListener("load", function (event) {
    //         alert('Screen Height =>' + window.innerHeight + '\nScreen Width => ' + window.innerWidth);
    //     });
    // }


    render() {
        return (
            <div>
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section6 />
                <Section4 />
                <Section5 />
                <Footer />
                <ToTopButton/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        topClass: state.topClass
    };
};

App.defaultProps = {
    topClass: {
        companyName: 'TopClass'
    }
};

App.propTypes = {
    topClass: PropTypes.string
};


export default connect(mapStateToProps)(App);

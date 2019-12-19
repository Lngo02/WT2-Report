import React from 'react'
import Link from 'gatsby-link'
import './Header.css';
import logo from '../images/logo-linda.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasScrolled: false
        }
    }

    // When component loads.
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true });
        }
        else {
            this.setState({ hasScrolled: false });
        }
    }

    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    <Link to="/"><img src={logo} width="50" /></Link>
                    <Link to="/introduction">Introduction</Link>
                    <Link to="/about-cooperators">About Co-operators</Link>
                    <a href="/goals">Goals</a>
                    <a href="/job-description">Job Description</a>
                    <a href="/conclusion">Conclusion</a>
                </div>
            </div>
        )
    }
}

export default Header

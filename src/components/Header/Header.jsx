import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import '../../components/fonts/fonts.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.state = {
            active: '',
            activeClass: styles.scrollHeader,
            timeOut: null
        };
        this.change = this.change.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    change() {
        this.setState({
            active: !this.state.active
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if (window.pageYOffset > window.innerHeight) {
            this.setState({ active1: this.state.activeClass });
        } else {
            this.setState({ active1: '' });
        }
    }
    render() {
        return (
            <header className={[styles.header, ((this.state.active1) ? styles.scrollHeader : '') ].join(' ')} >
                <div className = {[styles.Qwerty, ((this.state.active) ? styles.show1 : '')].join(' ')}>
                    <ul className={['container', styles.LeftContainer].join(' ')}>
                        <li onClick={this.change}> <AnchorLink  href='#section2'>О Компании</AnchorLink> </li>
                        <li onClick={this.change}> <AnchorLink  href='#section3'>Услуги</AnchorLink></li>
                        <li onClick={this.change}> <AnchorLink  href='#section4'>Портфолио</AnchorLink></li>
                        <li onClick={this.change}> <AnchorLink  href='#section5'>Контакты</AnchorLink> </li>
                    </ul>
                </div>
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.logoContainer].join(' ')}>
                    <div className={styles.Logo}>
                        <a href="/" > <img src="http://localhost:3003/Logo.png"  /> </a>
                    </div>
                    <div className={['col-lg-10 col-md-10 col-sm-12 hidden-md-down', styles.menu].join(' ')}>
                        <ul>
                            <li> <AnchorLink href='#section2'>О Компании</AnchorLink> </li>
                            <li> <AnchorLink href='#section3'>Услуги</AnchorLink></li>
                            <li> <AnchorLink href='#section4'>Портфолио</AnchorLink></li>
                            <li> <AnchorLink href='#section5'>Контакты</AnchorLink> </li>
                        </ul>
                    </div>
                    <button onClick={this.change}>
                        <div className={styles.buttline}>
                            <div className={styles.buttline1}></div>
                            <div className={styles.buttline2}></div>
                            <div className={styles.buttline3}></div>
                        </div>
                    </button>
                </div>
            </header>
        );
    }
}
export default Header;

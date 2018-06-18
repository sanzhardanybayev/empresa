import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Footer extends React.Component{
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
    }
    change() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.FooterContainer].join(' ')}>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.contacts].join(' ')}>
                        <div className={['col-lg-3 col-md-4 hidden-md-down', styles.contacts2].join(' ')}>
                            <img src="http://localhost:3003/Logo.png" />
                            <p> Мы рады предоставить Вам весь спектр услуг в продвижении Вашего бизнеса </p>

                        </div>
                        <div className={['col-lg-3 col-md-4  hidden-md-down', styles.contacts1].join(' ')}>
                            <div className={styles.razdel}>
                                <h2> Разделы </h2>
                                <ul>
                                    <li onClick={this.change}> <AnchorLink  href='#section2'>О Компании</AnchorLink> </li>
                                    <li onClick={this.change}> <AnchorLink  href='#section3'>Услуги</AnchorLink></li>
                                    <li onClick={this.change}> <AnchorLink  href='#section4'>Портфолио</AnchorLink></li>
                                    <li onClick={this.change}> <AnchorLink  href='#section5'>Контакты</AnchorLink> </li>
                                </ul>
                            </div>

                        </div>
                        <div className={['col-lg-3 col-md-4 hidden-md-down', styles.contacts1].join(' ')}>

                            <h2> Контакты </h2>
                            <div className={styles.phone1}>
                                <img src="http://localhost:3003/phone-receiver.png"  />
                                <p><a  className={styles.ndecor} href="tel:+77024547525">+7(702)-454-75-25</a>  </p>
                            </div>
                            <div className={styles.messages}>
                                <img src="http://localhost:3003/mail.png" />
                                <p> info@01reklama.kz</p>
                            </div>

                        </div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Empressa].join(' ')}>
                        <h5>2018.Empresa</h5>
                    </div>
                </div>
            </footer >
        );
    }
}
export default Footer;

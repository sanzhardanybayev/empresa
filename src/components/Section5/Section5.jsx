import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToTopButton from '../common/toTopButton';
import styles from './style.scss';

class Section5 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false
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
            <section className={styles.section5} id="section5">
                <iframe className = {[styles.Black, ((this.state.active) ? styles.show1 : '')].join(' ')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.901159285025!2d76.91261801515097!3d43.25349327913706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883694c645051c1%3A0x33f6c582434f1d37!2z0YPQuy4g0JzRg9C60LDQvdC-0LLQsCAxMzgsINCQ0LvQvNCw0YLRiw!5e0!3m2!1sru!2skz!4v1517201107949"></iframe>
                <div className = {[styles.BlackFilter, ((this.state.active) ? styles.show : '')].join(' ')}></div>
                <div className = {[styles.Maps123,'col-lg-12 col-md-12 col-sm-12 hidden-md-down', 'container', ((this.state.active) ? styles.show : '')].join(' ')}>
                    <div className = {[styles.Maps,'col-lg-12 col-md-12 col-sm-12 hidden-md-down', 'container', ((this.state.active) ? styles.show : '')].join(' ')}>
                        <div className={styles.text1}>
                            <h2> Контакты </h2>
                            <div className={styles.linewhite}> </div>
                        </div>
                        <div className={styles.text2}>
                            <p> Мы делаем рекламу, которая помогает </p>
                            <p> Вашей компании находить клиентов в любое время суток </p>

                        </div>
                        <div className ={styles.animated}>
                            <div className={styles.holder0}>

                                <div className={['col-lg-5 col-md-5 col-sm-5 hidden-md-down', styles.holder1].join(' ')}>
                                    <img src={require('../../../img/holder1.png')}  />
                                </div>
                                <div className={styles.holdertext}>
                                    <p className={styles.red}> Адрес </p>
                                    <p className={styles.linehight}> Казахстан, Алматы </p>
                                    <p> ул.Муканова 138 2-й этаж</p>
                                </div>
                            </div>
                            <div className={styles.holder0}>
                                <div className={['col-lg-5 col-md-5 col-sm-5 hidden-md-down', styles.holder1].join(' ')}>
                                    <img src={require('../../../img/holder2.png')}  />
                                </div>
                                <div className={styles.holdertext}>
                                    <p className={styles.red}> E-mail </p>
                                    <p className={styles.linehight}> info@01reklama.kz</p>
                                </div>
                            </div>
                            <div className={styles.holder0}>
                                <div className={['col-lg-5 col-md-5 col-sm-5 hidden-md-down', styles.holder1].join(' ')}>
                                    <img src={require('../../../img/holder3.png')} />
                                </div>
                                <div className={styles.holdertext}>

                                    <p className={styles.red}> Телефон </p>
                                    <p className={styles.linehight} id={styles.width}><a className={styles.ndecor} href="">+7(702)454 75 25</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={[styles.openMaps,'col-lg-12 col-md-12 col-sm-12 hidden-md-down', 'container', ((this.state.active) ? styles.show : '')].join(' ')}>
                    <div className={styles.lineRed}>
                        <button onClick={this.change} className={styles.ball}></button>
                    </div>
                    <p> Посмотреть на карте </p>
                </div>

            </section >
        );
    }
}
export default Section5;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';

class Section2 extends React.Component {
    render() {
        return (
            <section className={styles.section2} id="section2">
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.center].join(' ')}>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Empressa].join(' ')}>
                        <h2> добро пожаловать в <span> empresa </span> </h2>
                        <p> Мы создаём креативную продающую рекламу и предлагаем лучшие варианты для ее размещения </p>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.services].join(' ')}>
                        <div className={styles.icons}>
                            <img src="http://01reklama.kz/biloard1.png"  />
                            <p> Полный спектр услуг </p>

                        </div>

                        <div className={styles.icons}>
                            <img src="http://01reklama.kz/biloard2.png"  />
                            <p> Собственное производство </p>
                            <div className={styles.LeftBorder}></div>
                        </div>

                        <div className={styles.icons}>
                            <img src="http://01reklama.kz/biloard3.png"  />
                            <p> 5 лет на рынке </p>
                            <div className={styles.RightBorder}></div>
                        </div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Whats].join(' ')}>
                        <h3> почему мы? </h3>
                        <div className={styles.lineblue}> </div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Whats1].join(' ')}>
                        <div className={['col-lg-4 col-md-6 hidden-md-down', styles.text].join(' ')}>
                            <p> Наша рекламное агенство работает на 100% результат.Наша цель - помочь вашему бизнесу привлечь новых клиентов и выгодно заявить о себе миру </p>
                        </div>
                        <div className={['col-lg-4 col-md-6 hidden-md-down', styles.text1].join(' ')}>
                            <p> Для этого мы используем новые методы работы с целевой аудиторией,которые позволяет за короткий срок привлечь максимальное количество потенциальных клиентов. </p>
                        </div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.sale1].join(' ')}>
                        <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.sale].join(' ')}>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Собственное производство </p>

                            </div>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Доставка по городу </p>

                            </div>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Использование современных материалов и технологий </p>
                            </div>
                        </div>
                        <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.sale].join(' ')}>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Система скидок </p>

                            </div>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Реклама по любой бюджет </p>
                            </div>
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.check].join(' ')}>
                                <img src="http://01reklama.kz/check.png"  />
                                <p> Качество и надежность рекламной продукции </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section2;

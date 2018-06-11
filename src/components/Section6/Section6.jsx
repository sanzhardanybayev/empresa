import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import '../../components/fonts/fonts.scss';

class Section6 extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className={styles.section6}>
                <div className={['container', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourServices].join(' ')}>
                    <h3 className={styles.MadinaBek}> Порядок работы  </h3>
                    <div className={styles.Number}>
                        <div className={styles.Numbers}>
                            <h2>1</h2>
                            <p> Оставить заявку </p>
                        </div>
                        <div className={styles.Numbers}>
                            <h2>2</h2>
                            <p> Выезд замерщика-дизайнера  </p>
                        </div>
                        <div className={styles.Numbers}>
                            <h2>3</h2>
                            <p> Консультация и рассчет стоимости </p>
                        </div>
                        <div className={styles.Numbers}>
                            <h2>4</h2>
                            <p> Создание эскиза </p>
                        </div>
                        <div className={styles.Numbers}>
                            <h2>5</h2>
                            <p> Изготовление рекламы </p>
                        </div>
                        <div className={styles.Numbers}>
                            <h2>6</h2>
                            <p> Установка рекламы </p>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default Section6;

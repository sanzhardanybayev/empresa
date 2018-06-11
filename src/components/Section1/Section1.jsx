import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import '../../components/fonts/fonts.scss';
import axios from 'axios'
import swal from 'sweetalert'

class Section1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false,
            name: '',
            phone: '',
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.send = this.send.bind(this)
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }


    handleCloseModal () {
        this.setState({ showModal: false });
    }

    send(){

        const formData = new FormData()
        formData.set('name', this.state.name)
        formData.set('phone', this.state.phone)

        axios({
          method: 'post',
          url: '/sendemail',
          data: {
              name: this.state.name,
              phone: this.state.phone
          }
        }).then( () => {
          swal('Отправлено!', 'Мы скоро свяжемся с Вами!', 'success')
        })
    }


    render() {
        return (
            <section className={styles.section1} id="section1">
                <div>
                    <div className={[styles.Modal123, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                        <div className={[styles.Modal, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                        </div>
                        <div className={[styles.modal1, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                            <div className={styles.close}>
                                <span onClick={this.handleCloseModal}> X </span>
                            </div>
                            <div className={styles.zayavka}>
                                <h1>Оставить заявку</h1>
                                <input type="text" name={'name'} value={this.state.name} onChange={ e => this.setState({name: e.target.value})}  placeholder="Имя" />
                                <input type="text" name={'phone'} value={this.state.phone} onChange={ e => this.setState({phone : e.target.value})} placeholder="Телефон" />
                                <div className={styles.etobutton}>
                                    <button onClick={this.send}>Отправить заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.BlackFilter}></div>
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.centerText].join(' ')}>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.menu].join(' ')}>
                        <h3>Мы знаем как лучше всего рассказать о Вас миру</h3>
                        <h1> ХОТИТЕ, ЧТОБЫ ВАШ  БИЗНЕС ПРИНОСИЛ ПРИБЫЛЬ КРУГЛОСУТОЧНО? </h1>
                        <p> По статистике наружная реклама привлекает больше 60% клиентов
                            Если вы не учитываете этого, то Ваши деньги уходят конкурентам </p>
                        <a onClick={this.handleOpenModal} > Рассчитать стоимость рекламы </a>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.contacts].join(' ')}>
                        <div className={styles.phone}>
                            <img src={require('../../../img/phone-receiver.png')}  />
                            <p><a href="">+7(702)544-55-74</a>  </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={require('../../../img/phone-receiver.png')}  />
                            <p><a href="">+7(702)544-55-74</a>  </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={require('../../../img/phone-receiver.png')}  />
                            <p><a href="">+7(702)544-55-74</a>  </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section1;

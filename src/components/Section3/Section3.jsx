import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'

class Section3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false,
            name: '',
            phone: ''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.send = this.send.bind(this);
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
      },
    }).then( () => {
        swal('Отправлено!', 'Мы скоро свяжемся с Вами!', 'success')
    })
  }

    handleOpenModal () {
        this.setState({ showModal: true });
    }


    handleCloseModal () {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <section className={styles.section3} id="section3">
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
                                <input type="text" onChange={ e => this.setState({name: e.target.value})}  value={this.state.name} placeholder="Имя" />
                                <input type="text" onChange={ e => this.setState({phone: e.target.value})}  value={this.state.phone} placeholder="Телефон" />
                                <div className={styles.etobutton}>
                                    <button onClick={this.send}>Отправить заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourServices].join(' ')}>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Our].join(' ')}>
                        <h3>НАШИ УСЛУГИ</h3>
                        <div className={styles.lineWhite}></div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.paragraf].join(' ')}>
                        <p> Мы делаем рекламу, которая помогает  </p>
                        <p> Вашей компании находить клиентов в любое время суток </p>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Block].join(' ')}>
                        <div className={styles.block}>
                            <div className={styles.images1}>
                                <div className={styles.FilterBlack}> </div>
                                <h4>Наружная реклама</h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li className={styles.food}> <Link to='/home'><span>Штендеры </span></Link></li>
                                    <li><Link to='/Lightbox'> <span>Лайтбоксы </span> </Link></li>
                                    <li> <Link to='/Signboards'> <span>Вывески </span> </Link></li>
                                    <li> <Link to='/Stickers'> <span> Стикеры </span> </Link></li>
                                    <li> <Link to='/Volumetric'> <span> Объемные буквы </span> </Link></li>
                                    <li> <Link to='/Roof'> <span> Крышные установки </span> </Link></li>
                                    <li> <Link to='/Tablets'> <span> Таблички, указатели </span> </Link></li>
                                    <li> <Link to='/Dressing'> <span> Оформление витрин </span> </Link></li>
                                    <li> <Link to='/Facade'> <span> Оформление фасада </span> </Link></li>
                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.images2} >
                                <div className={styles.FilterBlack}>  </div>
                                <h4> Интерьерная реклама </h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li className={styles.food}><Link to='/Signboards1'><span> Вывески </span></Link></li>
                                    <li> <Link to='/Growth'><span> Ростовые фигуры </span></Link></li>
                                    <li> <Link to='/Information'><span> Информационные стенды </span></Link></li>
                                    <li> <Link to='/Indexes'><span> Таблички, указатели </span></Link></li>
                                    <li> <Link to='/Window'><span> Оформление витрин </span></Link></li>
                                    <li> <Link to='/Outlets'><span> Оформление торговых точек </span></Link></li>
                                    <li> <Link to='/Paintings'><span>Картины на холсте (модульные, любого размера) </span></Link></li>
                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.images5}>
                                <div className={styles.FilterBlack}> </div>
                                <h4>Услуги дизайнера</h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li className={styles.food}> <Link to='/Logotype'><span>Разработка логотипа </span></Link></li>
                                    <li><Link to='/Development'> <span>Разработка фирменного стиля </span> </Link></li>
                                    <li> <Link to='/Alxaus'> <span>Дизайн всей печатной продукции </span> </Link></li>
                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Block].join(' ')}>

                        <div className={styles.block}>
                            <div className={styles.images3}>
                                <div className={styles.FilterBlack}>  </div>
                                <h4> Полиграфические услуги </h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li  className={styles.food}> <Link to='/Blanks'><span> Бланки </span></Link></li>
                                    <li>  <Link to='/Brochures'><span> Брошюры </span></Link></li>
                                    <li> <Link to='/Booklets'><span> Буклеты </span></Link></li>
                                    <li> <Link to='/Cards'><span> Визитки </span></Link></li>
                                    <li> <Link to='/Calendars'><span> Календари </span></Link></li>
                                    <li> <Link to='/Catalogs'><span> Каталоги </span></Link></li>
                                    <li> <Link to='/Leaflets'><span> Листовки </span></Link></li>
                                    <li> <Link to='/Stickers1'><span> Наклейки, стикеры </span></Link></li>
                                    <li> <Link to='/Posters1'><span> Плакаты </span></Link></li>
                                    <li> <Link to='/Invitation'><span> Пригласительные билеты </span></Link></li>
                                    <li> <Link to='/Labels'><span> Этикетки </span></Link></li>
                                    <li> <Link to='/Magnets'><span> Магниты </span></Link></li>

                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.images6}>
                                <div className={styles.FilterBlack}>  </div>
                                <h4> Оформление мероприятий </h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li  className={styles.food}> <Link to='/Complimentary'><span> Пригласительные </span></Link></li>
                                    <li>  <Link to='/Bonbonniere'><span> Бонбоньерки </span></Link></li>
                                    <li> <Link to='/Press'><span> Пресс стены </span></Link></li>
                                    <li> <Link to='/Photozones'><span> Фотозоны </span></Link></li>
                                    <li> <Link to='/Seating'><span> Рассадка для гостей </span></Link></li>
                                    <li> <Link to='/Presidium'><span> Оформление стола жениха и невесты (президиум) </span></Link></li>
                                    <li> <Link to='/Candy'><span> Кэнди бар </span></Link></li>
                                    <li> <Link to='/Figures1'><span> Ростовые фигуры </span></Link></li>
                                    <li> <Link to='/Photomosaic'><span> Фотомозаика </span></Link></li>

                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.images4}>
                                <div className={styles.FilterBlack}>  </div>
                                <h4> Широкоформатная печать </h4>
                            </div>
                            <div className={styles.menu}>
                                <ul>
                                    <li className={styles.food}>  <Link to='/Banner1'><span> Баннер </span></Link></li>
                                    <li> <Link to='/Oracle'><span> Оракл </span></Link></li>
                                    <li> <Link to='/Perforated'><span> Перфорированный оракл </span></Link></li>
                                    <li> <Link to='/Canvas'><span> Холст </span></Link></li>
                                    <li> <Link to='/Paper'><span> Фотобумага </span></Link></li>

                                </ul>
                                <div className={styles.butt}>
                                    <a onClick={this.handleOpenModal} > Запросить цены </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
export default Section3;

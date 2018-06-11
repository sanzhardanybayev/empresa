import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.scss';
import styles from './style.scss'

const data = require("../../../data.json");

class Modul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }


    handleCloseModal () {
        this.setState({ showModal: false });
    }


    render() {
        // const object = Object.keys(data);
        // let a = [];
        // for (var i = 0; i < object.length; i++) {
        //     if(data[object[i]].title != this.props.currentPage)
        //         a.push(<option> {data[object[i]].title} </option>);
        // }
        return (
            <div>
                <a className={styles.butt} onClick={this.handleOpenModal}> Рассчитать стоимость рекламы </a>
                <div className={[styles.Modal123, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                    <div className={[styles.Modal, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                    </div>
                    <div className={[styles.modal1, ((this.state.showModal) ? styles.showModal1 : '') ].join(' ')} >
                       <div className={styles.close}>
                           <span onClick={this.handleCloseModal}> X </span>
                       </div>
                       <div className={styles.zayavka}>
                            <h1>Оставить заявку</h1>
                            <input type="text" placeholder="Имя" />
                            <input type="text" placeholder="Телефон" />
                            <input type="text" placeholder="Вопрос" />
                            {/*<select>*/}
                                {/*<option>{this.props.currentPage}</option>*/}
                                {/*{ a }*/}
                            {/*</select>*/}
                            <div className={styles.etobutton}>
                                <button>Отправить заявку</button>
                            </div>
                       </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Modul;

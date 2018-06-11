import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import '../../fonts/fonts.scss';
import Header from "../../Header/Header";
import Modul from "../Modul/Modul";

const data = require("../../../data.json");


class Page extends React.Component {

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
        const id = this.props.match.params.id.toLowerCase();
        const image = require(`../../../../img/${data[id].image}`);

        return (
            <section className={styles.section110} style={{backgroundImage: `url(${image})`}}>
                <div className={styles.BlackFilter}></div>
                <Header />
                <div className={['container', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.container].join(' ')}>
                    <div className={styles.text}>
                        <h1> {data[`${id}`].title} </h1>
                        <div></div>
                        <p> {data[`${id}`].text} </p>
                        <Modul currentPage = {data[`${id}`].title}/>

                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.phone}>
                            <img src={require('../../../../img/phone-receiver.png')}/>
                            <p> +7(702)454 75 25 </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={require('../../../../img/phone-receiver.png')}/>
                            <p> +7(702)454 75 25 </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={require('../../../../img/phone-receiver.png')}/>
                            <p> +7(702)454 75 25 </p>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Page;

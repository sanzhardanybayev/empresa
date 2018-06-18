import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.scss';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/1.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/2.jpg"
  },
  {
    sizes: ["width: 100%",],
    src: "http://localhost:3003/3.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/4.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/5.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/6.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/7.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/8.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/9.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/10.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/11.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/12.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/13.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/14.jpg"
  },
  {
    sizes: ["width: 100%"],
    src: "http://localhost:3003/15.jpg"
  }
];

class Section4 extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            lightBoxIsOpen: false
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    componentDidMount() {
        const gallery = document.querySelector('.react-photo-gallery--gallery div');
        gallery.style.display = "flex";
        gallery.style.justifyContent = "center";
        gallery.style.flexWrap = "wrap";
        const images = gallery.querySelectorAll('img');
        for(var i = 0; i < images.length; i++) {
            images[i].style.width = '398px';
            images[i].style.hight = '100px';
            images[i].style.maxWidth = "100%";
            images[i].style.zIndex = "555";
        }
        // const figure = document.querySelectorAll('figure');
        // figure.style.display = "flex";
        const images2 = document.querySelectorAll('.image_1swebtw-o_O-imageLoaded_zgbg08');
        console.log(images2);
    }
    // componentDidMount() {
    //     const LightBox = document.getElementById('LightboxBackdrop');
    //     console.log('LightBox');
    //
    //     const images = LightBox.querySelectorAll('img');
    //     for(var i = 0; i < images.length; i++) {
    //         images[i].style.height = '390px';
    //         images[i].style.maxHeight = '100%';
    //         images[i].style.zIndex = "555";
    //     }
    // }



    openLightbox = (event, obj) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    };

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    render() {
        return (
            <section className={styles.section4} id="section4">
                <div className={['container row', 'col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourServices].join(' ')}>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Our].join(' ')}>
                        <h3>ПОРТФОЛИО</h3>
                        <div className={styles.lineBlue}></div>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Our1].join(' ')}>
                        <p>За годы работы мы реализовали сотни проектов для физических и

                            юридических лиц, среди которых широко известные личности

                            и компании.Вот некоторые из наших работ:</p>
                    </div>
                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.HamBurger1].join(' ')}>
                        <Gallery width={"100%"}  photos={photos} onClick={this.openLightbox} columns='3'  />
                        <Lightbox images={photos}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.state.currentImage}
                                  isOpen={this.state.lightboxIsOpen}
                        />


                        {/*<div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.HamBurger].join(' ')}>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.BlackFilter}></div>*/}
                                {/*<div className={styles.burger1}></div>*/}

                            {/*</div>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.burger1}>*/}
                                {/*</div>*/}
                                {/*<div className={styles.FilterFilter}></div>*/}


                            {/*</div>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.BlackFilter}></div>*/}
                                {/*<div className={styles.burger1}></div>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.HamBurger].join(' ')}>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.BlackFilter}></div>*/}
                                {/*<div className={styles.burger1}></div>*/}

                            {/*</div>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.BlackFilter}></div>*/}
                                {/*<div className={styles.burger1}></div>*/}

                            {/*</div>*/}
                            {/*<div className={['col-lg-3 col-md-3 col-sm-12 hidden-md-down', styles.burger].join(' ')}>*/}
                                {/*<div className={styles.BlackFilter}></div>*/}
                                {/*<div className={styles.burger1}></div>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        );
    }
}
export default Section4;

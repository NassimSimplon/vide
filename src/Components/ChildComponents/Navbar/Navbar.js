import React from 'react'
import "./Navbar.css"
const Navbar = () => {

    function openNav() {
        document.querySelector('#myNav').style.height = "100%";
        document.getElementById('menu_checkbox').checked = true;
        document.getElementById('burger-btn').style.display = 'none';

        document.getElementsByClassName('nav-link')[0].classList.add('anim')
        document.getElementsByClassName('nav-link')[1].classList.add('anim2')
        document.getElementsByClassName('nav-link')[2].classList.add('anim3')
        document.getElementsByClassName('nav-link')[3].classList.add('anim4')
        document.getElementsByClassName('line-1')[0].style.display = "block"
        document.getElementsByClassName('line-2')[0].style.display = "block"
        document.getElementsByClassName('line-1')[0].classList.add('first')
        document.getElementsByClassName('line-2')[0].classList.add('para')
    }

    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
        document.getElementById('menu_checkbox').checked = false
        document.getElementById('burger-btn').style.display = 'block'
        document.getElementsByClassName('line-1')[0].classList.remove('first')
        document.getElementsByClassName('line-2')[0].classList.remove('para')
        document.getElementsByClassName('nav-link')[0].classList.remove('anim')
        document.getElementsByClassName('nav-link')[1].classList.remove('anim2')
        document.getElementsByClassName('nav-link')[2].classList.remove('anim3')
        document.getElementsByClassName('nav-link')[3].classList.remove('anim4')

    }

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-xs-6 col-lg-6 col-md-6 col-xl-6 col-xxl-6 text-center col-sm-6 col-6">
                    <div  >
                        <img className='logo ' id="first-logo" src='/origin.png' /></div> </div>
                <div className="col-xs-6  col-lg-6  col-md-6   col-sm-6  col-xl-6 col-xxl-6 col-6">
                    <div className="top-section "> <span className='firstspan mt-4'>Let's start a conversation</span>
                        <div className="btn-open">
                            <svg id='burger-btn' onClick={openNav} width="100" height="100" viewBox="0 0 100 100">
                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className="line line2" d="M 20,50 H 80" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div id="myNav" className="overlay" >
                <div className="row mt-5">
                    <div className=" col-xs-6  col-sm-6  col-lg-6  col-md-6  col-xl-6 col-xxl-6 text-center  col-6  ">
                        <div className="text-center">
                            <svg className='logo ' id="second-logo" viewBox="0 0 129.446 31.085"><path d="M126.212.87h-.532V.554h1.449V.87h-.532v1.362h-.385zm2.913-.316l-.613 1.042-.622-1.042h-.318v1.678h.361v-.986l.487.808h.174l.49-.829v1.007h.361l-.004-1.678zM46.585.59L33.324 30.532h5.316l3.934-9.568h9.806l-1.745-4.146h-6.161l4.244-10.071 4.326 10.507 1.394 3.515 4.07 9.763h4.862L50.765.59zm40.456 29.965h-9.445a7.6 7.6 0 01-7.555-7.621V.59h4.407v22.344a3.166 3.166 0 003.148 3.176h9.445zm36.765-.001l-7.99-14.862 8.01-15.138h-5.3l-5.422 10.092v-.008l-2.678 4.974 7.906 14.942zm-29.701 0h5.475l7.906-14.942-2.673-4.973v.008L99.386.554h-5.3l8.008 15.138z" fill="currentColor"></path><path d="M0 0h29.291v31.085H0z" fill="none"></path><g clipPath="url(#a)" transform="translate(0 -.287)"><path d="M25.243 20.713a10.948 10.948 0 01-20.8-4.883 10.948 10.948 0 0120.816-4.855l4.033-1.883A15.385 15.385 0 000 15.83a15.386 15.386 0 0029.278 6.767z" fill="currentColor"></path></g></svg>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6  col-xs-6  col-sm-6  col-xl-6 col-xxl-6  col-6">
                        <div className="top-section">
                            <h1 className="for-right">vide</h1>
                            <div onClick={closeNav} id="menu_button"  >
                                <input type="checkbox" id="menu_checkbox" />
                                <label htmlFor="menu_checkbox" id="menu_label">
                                    <div id="menu_text_bar"></div>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-11    text-center">
                        <div className="list-section  ">
                            <div className="overlay-content mt-5 " id="content-overlay"  >
                                <a href="#" className='nav-link' id="first-link">About</a>
                                <a href="#" className='nav-link'   >Services</a>
                                <a href="#" className='nav-link' id="third-link" >Clients</a>
                                <a href="#" className='nav-link' id="fourth-link">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-1 col-xs-6   col-sm-6  "></div>
                </div>
                <div className="row mt-5">
                    <div className=" col-sm-6  col-lg-6 col-md-6 col-xs-6   col-xl-6 col-xxl-6 col-section-lines">
                        <div className="section-lines">
                            <p className='line-1 first nav-lines'>Thank you for your interest in Origine.  </p>
                            <p className='line-2 para nav-lines'  >How can we help?</p>
                        </div>
                    </div>
                    <div className=" col-xs-12  col-sm-12 col-lg-6 col-md-6   col-xl-6 col-xxl-6 social-media-col">
                        <div className="social1" id="first-social">
                            <p className='follow' id="followUs" >Follow us</p>
                            <p className='linked'  >LinkedIn</p>
                        </div>
                        <div className="social1"  id="second-social">
                        <p className='follow'  >Get in touch</p>
            <p className='linked'  >contact@Origine.co</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar

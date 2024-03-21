import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from '../../inc/Slider';
import { Link } from 'react-router-dom';
import axios from "axios";
import NavbarCom from "../../inc/NavbarCom";
import Footer from "../../inc/Footer";

const MainHome = () => {

    const [News, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, []);
    const getNews = async () => {
        axios.get('https://cxtrv.my.id/berita', {
            withCredentials: true
        })
            .then(function (response) {
                setNews(response.data.data);
            });
    }

    return (
        <div>
            <NavbarCom />
            <Slider />

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center mb-4'>
                            <h3 className='main-heading'> TES TES </h3>
                            <div className='underline mx-auto'></div>
                            <h6 className='mt-4 mb-4'>
                                testes
                            </h6>
                            <Link to='/about' className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'> NEWS / BERITA </h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        {/* TESTES */}
                        {News.map((news, index) => (
                            <div className='col-md-4 '>
                                <div className='card shadow'>
                                    <div className='card-body'>
                                        <img src={`http://localhost:5000/images/imgNews/${news.image}`} className='imgBer border-bottom' alt='...' />
                                        <h6 className='title text-center mt-4'> {`${news.name}`} </h6>
                                        <p>
                                            <details>{`${news.ket}`}</details>
                                        </p>
                                        <Link to={`/news/${news.id}`} className='btn btn-link'> Read More </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Our Service */}
            <section className='section border-top'>
                <div className='container'>

                </div>
            </section>
            <Footer />
        </div>

    )
}

export default MainHome;
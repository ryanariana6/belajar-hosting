import React from 'react';
import './App.css';
import NavbarCom from "../../inc/NavbarCom";
import Footer from "../../inc/Footer";

const MainContact = () => {
    return (
        <div>
        <NavbarCom/>
            <section className='py-3 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4> Contact </h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'> Home /  Contact </h6>
                        </div>
                    </div>
                </div>
            </section> 


            

        <Footer/>
        </div>
    )
}

export default MainContact;
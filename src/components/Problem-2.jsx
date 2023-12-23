import React from 'react';
import { Link, Route } from 'react-router-dom';

const Problem2 = () => {

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                {/* <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div> */}
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/modalA" className="btn btn-lg btn-outline-primary" >All Contacts</Link>
                    <Link to="/modalB" className="btn btn-lg btn-outline-warning" >US Contacts</Link>
                    <Link to="/problem-2" className="btn btn-lg btn-outline-primary" >Close</Link>
                </div>
                
                <div style={{ backgroundColor: 'pink' }} className="mt-5">
                    <div className="container mx-auto flex justify-between items-center ">
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div>
                                <p className="text-lg font-bold">Your Company</p>
                                <p>123 Main Street</p>
                                <p>City, Country</p>
                            </div>

                            <div>
                                <p className="text-lg font-bold mb-2">Quick Links</p>
                                <ul>
                                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                                    <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                                    <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-bold mb-2 text-center">Connect With Us</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center'}}>
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;
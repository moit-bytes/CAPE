import React from 'react';
import { Link } from "react-router-dom";

export const Services = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 className="mt-2"> ~ We offer the following ~</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Get your Coding Analysis</h5>
                            <p>Go ahead and generate your coding reports by using our alluring dashboard.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="/dashboard">Open Your Dashboard</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Look For Contests</h5>
                            <p>View a vast range of coding contests occuring across various platforms and set a reminder for yourself.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="/contest">Look For Contests</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">View News Feed</h5>
                            <p>With the changing world make yourself updated with the emerging technologies.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="/news">Catch Up News</Link>
                        </div>
                    </div>
                </div>

                <div className="container my-3">
                    <div className='text-center'>
                        Are you new to our page? &nbsp;
                        <Link to="/register">Click to Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

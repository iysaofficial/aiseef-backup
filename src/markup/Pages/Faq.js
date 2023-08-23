import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import AccordionBlog from './../Element/AccordionBlog';
import VideoPopup from './../Element/VideoPopup';

import bnr1 from './../../images/banner/bnr4.jpg';
import pattern from './../../images/pattern/pic1.jpg';
import about from './../../images/about/pict100.png';
import AccordionBlog2 from '../Element/AccodcionBlog2';
import AccordionBlog3 from '../Element/AccordionBlog3';


class Faqs extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu="Faq's" activeMenu="Faq's" />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Your Faq --> */}
                        <div className="section-full overlay-white-middle content-inner" style={{ backgroundImage: "url(" + pattern + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h3>FAQ</h3>
                                    <div className="dlab-separator bg-primary"></div>
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has beenthe industry's standard dummytext ever since the been when an unknown printer.</p> */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30" >
                                        <div className="faq-video" >
                                            <VideoPopup />
                                            <img src={about} alt="" className="img-cover radius-sm" />
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <h3 className='text-center'>After Register</h3>
                                        <AccordionBlog />
                                        <h3 className='text-center'>During The Event</h3>
                                        <AccordionBlog2 />
                                        <h3 className='text-center'>After The Event</h3>
                                        <AccordionBlog3 />
                                        

                                    </div>
                                </div>
                                {/* <!-- Faq Info --> */}
                                {/* <div className="row">
									{iconBlog.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30">
											<div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
												<div className="icon-md text-primary m-b20">
													<Link to={"#"} className="icon-cell">{item.icon}</Link>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
													<p>Web design aorem apsum dolor  dolore magna aliquam erat volutpat.Claritas est etiam processus.</p>
												</div>
											</div>
										</div>
									))}	
                                </div> */}
                                {/* <!-- Faq Info END --> */}
                            </div>
                        </div>
                        {/* <!-- Your Faq End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Faqs;
import React from 'react'
import footerLogo from '../../assets/img/footer-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='footer-info '>
                        <div>
                            <img src={footerLogo} alt="" cllassName='img-fluid'/>
                            <p className='my-4'>Manta Ray Lost River sucker<br/> smalleye gourami peamouth? <br/>M-war fish; </p>
                            
                            <div className='d-flex'>
                                <div>
                                   <Link><span><i class="fa-brands fa-youtube"></i></span></Link> 
                                </div>
                                <div>
                                    <Link><span><i class="fa-brands fa-pinterest-p"></i></span></Link>
                                </div>
                                <div>
                                    <Link><span><i class="fa-brands fa-facebook-f"></i></span></Link>
                                </div>
                                <div>
                                    <Link><span><i class="fa-brands fa-instagram"></i></span></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='contact-us'>
                        <h5>Contact us</h5>
                        <div className='contact'>
                            <h6><i class="fa-solid fa-location-dot me-2 mb-3"></i><Link>Greenville, Sc</Link></h6>
                            <h6><i class="fa-solid fa-phone me-2 mb-3"></i><Link>+1-833-722-6338</Link></h6>
                            <h6><i class="fa-solid fa-envelope me-2 mb-3"></i><Link>Contact@101sbc.com</Link></h6>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='privacy-policy'>
                        <h5>Pages</h5>
                        <div className='policy'>
                            <div className='mb-3'>
                                <Link to="/products">Product</Link>
                            </div>
                            <div className='mb-3'>
                                <Link to="/albums">Album</Link>
                            </div>
                            <div className='mb-3'>
                                <Link to="/aboutus">About Us</Link>
                            </div>
                            <div className='mb-3'>
                                <Link to="/blogs">Blogs</Link>
                            </div>
                            <div className='mb-3'>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                            <div className='mb-3'>
                                <Link>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='our-instargram'>
                        <h5>Our Instagram</h5>
                        <div className='instargram'>
                            <Link>Mustache triggerfish stonecat </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyrights © 2024 All Rights Reserved | Powered by <Link to={"https://creativecartel.me/" } target="_blank">Creative Cartel</Link></p>
        </div>
    </div>
  )
}

export default Footer

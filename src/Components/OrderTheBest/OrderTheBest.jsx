import React from 'react';
import orderImage from '../../assets/img/Banner/image2.png';
import { Link } from 'react-router-dom';

const OrderTheBest = () => {
  return (
    <section>
        <div className="order-the-best-section" >
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className='order-the-best-info'>    
                            <div className="clean-fresh-text " >
                                <h1 className="display-6">Order The Best<br/>LEBANESE<br/>Food Anytime</h1>
                                <p className='mt-2'>Our delicious homemade food is waiting for you,<br/>We are always near you with fresh items of food.</p>
                                <div className='pt-2'>
                                    <Link>Explore Food</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 p-0'>
                        <div className='order-the-best-img  text-center d-flex justify-content-center align-items-center'>
                            <img src={orderImage} alt="" className='img-fluid'/>
                        </div>
                    </div>

                </div>
            </div>  
        </div>
      </section>
  );
};

export default OrderTheBest;
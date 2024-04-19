import React from 'react';
import Heading from "../../Components/Heading/Heading";
import foodImg1 from '../../assets/img/Gallery/food-img1.png';
import foodImg2 from '../../assets/img/Gallery/food-img2.png';
import foodImg3 from '../../assets/img/Gallery/food-img3.png';
import foodImg4 from '../../assets/img/Gallery/food-img4.png';
import foodImg5 from '../../assets/img/Gallery/food-img5.png';


const Gallery = () => {
  return (
    <div className='gallery-section'>
      <Heading title="Gallery" subtitle="Home" subtitle2="gallery" />

      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6 py-3'>
            <div>
              <img src={foodImg1} alt="" className='img-fluid'/>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 py-3'>
            <div className="row">
              <div className="col-6">
                <img src={foodImg2} alt="" className='img-fluid'/>
              </div>
              <div className="col-6">
                <img src={foodImg3} alt="" className='img-fluid'/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <img src={foodImg1} alt="" className='img-fluid'/>
              </div>
              <div className="col-6">
                <img src={foodImg4} alt="" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
        <div className='col-sm-12 col-md-6 col-lg-6 py-3'>
            <div className="row">
              <div className="col-6">
                <img src={foodImg2} alt="" className='img-fluid'/>
              </div>
              <div className="col-6">
                <img src={foodImg3} alt="" className='img-fluid'/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <img src={foodImg1} alt="" className='img-fluid'/>
              </div>
              <div className="col-6">
                <img src={foodImg4} alt="" className='img-fluid'/>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 py-3'>
            <div>
              <img src={foodImg5} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

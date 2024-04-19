import React from 'react'
import Heading from "../../Components/Heading/Heading";
import { albumsData } from '../../Utils/Api'
import { Link } from 'react-router-dom';

const Albums = () => {
  return (
    <div className='album-section'>
        <Heading title="Albums" subtitle="Home" subtitle2="Albums" />
    
        <div className='container'>
            <div className='album-cards'>
                <div className='row'>
                {
                    albumsData.map((album) => {
                        return (
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className='album-card'>
                                    <div className='album-card-img'>
                                       <Link to="/gallery"><img src={album.image} alt=""/></Link>
                                    </div>  
                                    <div className='album-card-title'>
                                        <h2 className='display-7 my-2'>{album.title} </h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Albums

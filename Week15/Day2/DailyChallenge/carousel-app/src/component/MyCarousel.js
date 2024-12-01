import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hkImg from '../assets/hong-kong.jpg';
import jpnImg from '../assets/japan.webp';
import lvImg from '../assets/las-vegas.webp';
import macao from '../assets/macao.webp';


class MyCarousel extends Component {
    render() {
        return (
            <Carousel width='600px' centerMod>
                <div>
                    <img src={hkImg} alt='No Photo'/>
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={jpnImg} alt='No Photo'/>
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={lvImg} alt='No Photo'/>
                    <p className="legend">Las Vegas</p>
						</div>
								<div>
                    <img src={macao} alt='No Photo' />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;
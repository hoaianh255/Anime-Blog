import React, { useState, useEffect } from 'react';
import {dataSlide} from './dataSlide';
// import ItemSlide from "./ItemSlide";
import  './banner.css';
const ItemSlide = React.lazy(() => import('./ItemSlide'));
function Banner() {
    const [indexSlide,setIndexSlide] = useState(0);
    const slideIndex = dataSlide[indexSlide];
    const checkIndex = (index) => {
        if(index > dataSlide.length - 1){
            return 0;
        }
        if(index < 0){
            return dataSlide.length -1;
        }
        return index;
    }
    const nextSlide = () => {
        setIndexSlide((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });

    }
    const prevSlide = () => {
        setIndexSlide((index) => {
            let newIndex = index - 1;

            return checkIndex(newIndex);
        });
    }
    useEffect(()=>{
        let slide = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(slide);
    },[indexSlide])
    return (
        <div id='banner'>
        {/*    slide*/}
        <div className="banner__slide">
            <ItemSlide key={slideIndex.id} value={slideIndex}/>
            <button onClick={(e) => prevSlide()}  className="act-slide"><i className="fas fa-chevron-left"/></button>
            <button onClick={(e) => nextSlide()} className="act-slide right"><i className="fas fa-chevron-right"/></button>
        </div>

        </div>
    );
}

export default Banner;
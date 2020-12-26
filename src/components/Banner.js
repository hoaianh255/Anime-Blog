import React, { useState,lazy,Suspense, useEffect } from 'react';
import bannerUrl from '../img/2dc3c38d36a11eb2c601362dece32fd9.jpg';
function Banner(props) {
    const ItemSlide =  React.lazy(() => import('./ItemSlide'));
    const dataSlide = [
        {
            id:1,
            imgUrl: 'https://images.hdqwalls.com/wallpapers/bthumb/warship-girl-4k-jr.jpg',
            title: 'Neptunia Virtual Stars Also Heads West on PC via Steam',
            description: "Film news website IndieWire revealed on Tuesday that GKIDS' theatrical release of Studio Ghibli's first CG feature Earwig and the Witch will be an Oscar-qualifying theatrical run"
        },
        {
            id:2,
            imgUrl: 'https://images.hdqwalls.com/wallpapers/bthumb/anime-girl-sitting-on-couch-looking-above-4w.jpg',
            title: "Takeshi Obata, Tsugumi Ohba's Platinum End Manga Listed as Reaching Climax",
            description: "Manga inspires TV anime adaptation that premieres in fall 2021 ― Amazon's listing for the February issue of Shueisha's Jump SQ"
        },
        {
            id:3,
            imgUrl: 'https://images.hdqwalls.com/download/saiyan-girl-on-dark-city-4k-zc-1920x1080.jpg',
            title: "The Magnificent Grand Scene GN 1 & 2",
            description: "If you love Princess Tutu and miss CMX's release of Swan, you owe it to yourself to pick up MediaDo's digital-only release of Cuvie's The Magnificent Grand Scene."
        },
    ];
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
        setInterval(() => {
            nextSlide();
        }, 5000);
    },[])
    return (
        <div id='banner'>
        {/*    slide*/}
        <div className="banner__slide">
            <Suspense fallback={<div>Loading...</div>}>
                <ItemSlide key={slideIndex.id} value={slideIndex}/>
            </Suspense>
            <button onClick={(e) => prevSlide()}  className="act-slide"><i className="fas fa-chevron-left"></i></button>
            <button onClick={(e) => nextSlide()} className="act-slide right"><i className="fas fa-chevron-right"></i></button>
        </div>

        </div>
    );
}

export default Banner;
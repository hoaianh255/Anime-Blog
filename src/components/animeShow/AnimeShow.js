import React from 'react';
import './animeShow.css';
import {animeBlog} from '../../data/data';
function AnimeShow(props) {
  return (
    <div id="animeShow">
        <div className="wrap-anime row">
          <h2 className="time-title col-lg-12">Thursday, December 31</h2>
          {animeBlog.map(({id,name,imgUrl,time,category,details})=>{
           return (
             <div key={id} className="block-anime col-lg-4">
               <div className="img-anime">
                 <a href="#">
                   <img src={imgUrl} alt={name}/>
                 </a>
               </div>
               {/*  description*/}
               <div className="description-anime">
                 <h2><a href="">{name}</a></h2>
                 <span className="time">{time} <span className="category">{category}</span></span>
                 <div className="details">
                   {details}
                 </div>
               </div>
             </div>
           )
          })}
        </div>
    </div>
  );
}

export default AnimeShow;
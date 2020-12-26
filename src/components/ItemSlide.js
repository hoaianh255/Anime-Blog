import React from 'react';
import PropTypes from 'prop-types';

const ItemSlide = props => {
  const {id,imgUrl,title,description} = props.value;
  return (
    <>
      <a href="#"  key={id}>
      <div className="item__slide">
                    {/*box image*/}
                    <div className="banner__image" >
                        <img src={imgUrl} alt=""/>
                        <div className="banner__fadeBottom">
                        </div>
                    </div>
                    {/*box description*/}
                    <div className="banner__description">
                        <h3 className="title">{title}</h3>
                        <div>
                        {description}
                        </div>
                    </div>
                </div>
      </a>
    </>
  );
};

ItemSlide.propTypes = {
  
};

export default ItemSlide;
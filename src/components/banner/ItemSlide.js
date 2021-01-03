import React, {useEffect, useState} from "react";
const ItemSlide = (props) => {
  const { id, imgUrl,position, title, description } = props.value;
  const [styles,setStyles] = useState({backgroundImage: `url(${imgUrl}`});
  const [loading,setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const styleEffect = {
    backgroundRepeat: "no-repeat",
    backgroundPosition:`${position}`,
  }

  useEffect(()=>{
    const idInterval = setTimeout(()=>{
      setStyles((styles)=>{
        return {...styles, ...styleEffect};
      })
    },100)
    setLoading(false);
    return ()=> clearTimeout(idInterval);
  },[id,position]);

  if(loading){
    return <h1>Loading....</h1>
  }
  return (
    <>
      <a href="#" key={id}>
        <div className="item__slide">
          {/*box image*/}
          <div className="banner__image" style={styles} >
            <div className="banner__fadeBottom">

            </div>
          </div>
          {/*box description*/}
          <div className="banner__description">
            <h3 className="title">{title}</h3>
            <div>{description}</div>
          </div>
        </div>
      </a>
    </>
  );
};

ItemSlide.propTypes = {
};

export default ItemSlide;

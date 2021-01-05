import React, {useEffect, useState} from "react";
const ItemSlide = (props) => {
  const { id, imgUrl,position, title, description } = props.value;
  let indexSlide = props.indexSlide;
  const [styles,setStyles] = useState({backgroundImage: `url(${imgUrl}`,backgroundPosition: "0% 0%"});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const styleEffect = {
    backgroundRepeat: "no-repeat",
    backgroundPosition:`${position}`,
  }

  useEffect(()=>{
      const timeOut = setTimeout(()=>{
        setStyles((styles)=>{
          return {...styles, ...styleEffect};
        })
      },10)
    return () => {
      clearTimeout(timeOut)
      setStyles((styles)=>{
        return {...styles,backgroundPosition: "0% 0%"}
      });
    }
  },[props]);

  return (
    <>
    <a href="#" key={id}>
      <div style={{ display: indexSlide === id-1 ? "block" : "none" }}>
          <div className="item__slide" >
            {/*box image*/}
            <div className="banner__image" style={styles} >
            </div>
            {/*box description*/}
            <div className="banner__description">
              <h3 className="title">{title}</h3>
              <div className="description">{description}</div>
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

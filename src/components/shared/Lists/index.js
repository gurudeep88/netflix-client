import React, { useRef, useState } from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './index.scss'; 
import ListItem from '../ListItem';

const Lists = ({list}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x-50;
    console.log(distance);
    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "right" && slideNumber < 4){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230+distance}px)`;
    }
  }
  
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon className="sliderArrow left" 
        style={{display: slideNumber <= 0 && 'none'}}
        onClick={()=>handleClick("left")} />
        <div className="container" ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem index={index} key={index} item={item}/>
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon className="sliderArrow right" 
        style={{display: slideNumber >= 4 && 'none'}}
        onClick={()=>handleClick("right")} />
      </div>
    </div>
      
  )
}

export default Lists
import React from 'react';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to='/'>
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>
      </Link>
        <video
            src={movie ? movie.video : 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761'}
            className='video' 
            autoPlay 
            progress 
            controls 
        />
    </div>
  )
}

export default Watch
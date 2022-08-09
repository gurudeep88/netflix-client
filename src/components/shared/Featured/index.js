import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './index.scss';
import { Genre } from './GenreList';
import axios from 'axios';

const Featured = ({type}) => {
    const [content, setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async()=>{
            try {
                const res = await axios.get(`/movie/random?type=${type}`, {
                    headers: {
                        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGMzYTlhZjc5ODYxMzRiYWVlYjNkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc3NjUyMCwiZXhwIjoxNjU5MjA4NTIwfQ.mbrA6CUcDCwFnR7z5b2P8Ab1j5PVF_WN1mz_wOJzy40`,
                      },
                });
                setContent(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    },[type]);
  return (
    <div className='featured'>
        {
            type && (
                <div className='category'>
                    <span>
                        {type === "movies" ? "Movies" : "Series"}
                    </span>
                    <select name="genre" id="genre">
                        {Genre.map((genre, index) => (
                            <option value={genre.value} key={index}>{genre.title}</option>
                        ))}
                    </select>
                </div>
            )
        }
        <img src={content.img} alt="hero" width="100%" />
        <div className="info">
            <img src={content.imgTitle} alt="info" />
            <span className='desc'>{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
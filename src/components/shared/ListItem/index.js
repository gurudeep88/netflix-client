import React, { useEffect, useState } from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movie/find/${item}`, {
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGMzYTlhZjc5ODYxMzRiYWVlYjNkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc3NjUyMCwiZXhwIjoxNjU5MjA4NTIwfQ.mbrA6CUcDCwFnR7z5b2P8Ab1j5PVF_WN1mz_wOJzy40`,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={movie.img} alt="list item" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;

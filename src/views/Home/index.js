import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import Navbar from '../../components/shared/Navbar';
import Featured from '../../components/shared/Featured';
import Lists from '../../components/shared/Lists';

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`/list${type ? '?type='+type : ""}${genre ? '&genre='+genre : ""}`, {
          headers: {
            token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGMzYTlhZjc5ODYxMzRiYWVlYjNkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc3NjUyMCwiZXhwIjoxNjU5MjA4NTIwfQ.mbrA6CUcDCwFnR7z5b2P8Ab1j5PVF_WN1mz_wOJzy40`
          }
        });
        setLists(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  },[type, genre]);
  
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type}/>
        {lists.map((list, index)=>(
          <Lists key={index} list={list} />
        ))}
    </div>
  )
}

export default Home
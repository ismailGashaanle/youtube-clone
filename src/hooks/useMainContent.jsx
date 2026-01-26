

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShimmerUI from '../components/ShimmerUI';
import { YOUTUBE_VIDEO_API } from '../utils/Constatnt';
import { addVideos } from '../utils/VideoSlice';

const useMainContent = () => {

      const [data, setData] = useState([]);
  const  videoData=useSelector(store=>store?.videos.videos)
  const dispatch=useDispatch();

      useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const api = await fetch(YOUTUBE_VIDEO_API);
      const res = await api.json();
      setData(res.items);
       dispatch(addVideos(res.items))
    } catch (err) {
      console.error(err);
    }
  };


  if(videoData.length<=0) return <ShimmerUI/>
  
}

export default useMainContent

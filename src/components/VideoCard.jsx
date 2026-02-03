import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/Constatnt'
import { timeAgo } from './../utils/TimgeAgo';
import { ViewsCalculate } from '../utils/ViewsHelper';

const VideoCard = ({video}) => {

//     const [data,setData]=useState([])
//    console.log(data)

//     useEffect(()=>{
// GetVideos();
//     },[])


//     const GetVideos= async()=>{
//         try{
//             const api=await fetch(YOUTUBE_VIDEO_API);
//             const res=await api.json();
//             setData(res.items);
         

//         }catch{

//         }
//     }

   const {categoryId,channelId,channelTitle,description,title,thumbnails,publishedAt }= video.snippet
    // const {likeCount,viewCount}=video.statistics;
    const { likeCount, viewCount } = video.statistics;

    // const {default.url}=thumbnails
    // const {default.url}=thumbnails
 console.log("",video)

  return (
    <div className='flex flex-wrap gap-2 items-center justify-center' >
       

       {/* {data.map((video,index)=>{
        const {snippet,id,statistics}=video;
        const {channelTitle,channelId,publishedAt,title,thumbnails }=snippet;
        // const {default} =thumbnails;

        return(
            <div key={video.id} className='w-[300px] h-[300px] shadow-2xl rounded-2xl bg-black opacity-95 texx-white border-gray-100 p-3  cursor-pointer items-center gap-2'>
              <div>  <img src={thumbnails.medium.url}/></div>
              <h1 className='text-white'>{title}</h1>
              <p className='text-sm text-white '>{channelTitle}</p>
 
            </div>
        )
       })} */}

       <div  className='w-[300px] h-[360px]  shadow-2xl rounded-2xl texx-black border-gray-100 py-3 px-1  cursor-pointer items-center gap-2'>
        <img className='w-full rounded-lg' src={thumbnails.medium.url} />
            <h1 className='text-black text-lg'>{title}</h1>
            <p className='text-sm'>{channelTitle}</p>
            <div className='flex gap-2 items-center '>
              <p className=' color-gray-400 capitalize my-2'>views {ViewsCalculate(viewCount)}</p>
              <p className='color-gray-400 capitalize my-2'>{timeAgo(publishedAt)}</p>
            {/* <p>Liked{likeCount}</p> */}
            </div>
       </div>
      
    </div>
  )
}

export default VideoCard

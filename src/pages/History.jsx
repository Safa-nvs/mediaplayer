import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI } from '../Services/allApi'
import { useState } from 'react'
import { deleteHistoryAPI } from '../Services/allApi'

function History() {
  const[history,setHistory]=useState([])
  
  console.log(history);

  useEffect(()=>{

    getAllHistory()

  },[])
  

  const getAllHistory=async()=>{
    try{
     const result=await getHistoryAPI()
     setHistory(result.data)     
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  const deleteHistory=async(videoId)=>{
    try{
        await deleteHistoryAPI(videoId)
        getAllHistory()
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  return (
    <>
    <div className='container'>
    <div className='d-flex align items-center justify-content-between mt-5'>
      <h2 className='text-warning ms-5'>Watch History</h2>
      <Link style={{textDecoration:"none"}} to={'/home'} className='text-info me-5 '>Back to Home <i class="fa-solid fa-house text-info"></i></Link>
    </div>
    {
      history?.length>0?
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>

          <th>Date</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
       {
        history?.map(video=>(
          <tr key={video.id}>
          <td>{video.id}</td>
          <td>{video.caption}</td>
          <td><a href={video.youtubeUrl}>{video.youtubeUrl}</a></td>
          <td>{video.formatDate}</td>
          <td><button  onClick={()=>deleteHistory(video.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        ))
       }
        
      </tbody>
    </table>
    :
    <div className='text-danger'>no Watch history</div>
}

    </div>
    
    </>
  )
}

export default History
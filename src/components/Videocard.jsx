import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI } from '../Services/allApi';
import { saveWatchHistory } from '../Services/allApi';

function Videocard({videoDetails,setDeleteVideoResponse,insideCategory}) {
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {

    const {caption,youtubeUrl}=videoDetails
    const localTime=new Date()
   const formatDate=localTime.toLocaleString()
   console.log(formatDate);

   const historyData={caption,youtubeUrl,formatDate}
   try{
    await saveWatchHistory(historyData)
   }
   catch(err){
      console.log(err);
      
   }
   
    
       console.log(localTime);


    setShow(true);
  }

  const deleteVideo=async(videoId)=>{

    try{
      const result=await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
      
      console.log(result);
      
    }
    catch(err)
    {
      console.log(err);
      
    }

  }
  const dragVideoStarted=(e,videoId)=>{
    
    console.log(`onDrag started with video id:${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
  }
  return (
    <>
    <div className=''>
     <Card  draggable={true} style={{height:"280px"}} className='mt-3'  onDragStart={(e)=>dragVideoStarted(e,videoDetails?.id)}>
      <Card.Img style={{height:"170px"}} variant="top" onClick={handleShow} src={videoDetails?.imageUrl}/>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'>
        <p  className='text-white'>{videoDetails?.caption}</p>
 {       !insideCategory &&
        <button onClick={()=>deleteVideo(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash text-white" style={{ fontSize:"20px"}}></i></button>
 }
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="770" height="377" src={`${videoDetails?.youtubeUrl}?autoplay=1&mute=1`} 
        title="Avatar: The Way of Water | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Modal.Body>
      </Modal>

      
      </div>
    </>
  )
}

export default Videocard
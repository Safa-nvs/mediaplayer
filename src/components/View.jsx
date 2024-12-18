import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { useEffect } from 'react'
import { useState } from 'react'
import { getVideoAPI } from '../Services/allApi'
import { getSinglecategoryAPI } from '../Services/allApi'
import { updateCategoryAPI } from '../Services/allApi'
import { addVideo } from '../Services/allApi'


function View({addVideoResponse,deleteVideoResponseFromCateg,setUpdateCatFromView}) {
  const[deleteVideoResponse,setDeleteVideoResponse]=useState("")
 const[allVideos,setAllvideos]=useState([])


 useEffect(()=>{
  getAllVideos()
 }, [addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCateg])


  const getAllVideos=async()=>{
    try{
    const result=await getVideoAPI()
    if(result.status>=200&&result.status<300)
    {
      setAllvideos(result.data)
      console.log(allVideos);
      
    }
    console.log(result);
    
    }
  
  catch(err)
  {
    console.log(err);
    
  }
}

const dragOverCategory=(e)=>{
  e.preventDefault()
}


const dropCategoryVideo=async(e)=>{
 const{videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareCatData"))
 console.log(`video :${videoDetails},cat id:${categoryId}`);
 console.log(videoDetails);

 try{
  const {data}=await getSinglecategoryAPI(categoryId)
    console.log("data",data);
    const updatedCategoryallVideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
    console.log(updatedCategoryallVideos);
    const{id,categoryName}=data
    const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryallVideos})
    console.log(response);
    setUpdateCatFromView(response)
    const result=await addVideo(videoDetails)
    console.log(result);
    getAllVideos()
    
    

    
    
  
 }

 catch(err){
  console.log(err);
  
 }
 }
 
 

 
 

  return (
    <>
      <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryVideo(e)}>
{
      allVideos?.length>0?
      allVideos?.map(video=>(
      <Col key={video.id} lg={4} sm={6} xs={12}>
      <Videocard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
   
      </Col>
      ))
   :
   <div className='text-danger'>Nothing to display</div>
}
      </Row>
    </>
  )
}


export default View
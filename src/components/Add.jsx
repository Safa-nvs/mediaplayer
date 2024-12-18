import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {  toast } from 'react-toastify';
import { addVideo } from '../Services/allApi';


function Add({setAddVideoResponse}) {

  const[videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  const[isinvalidUrl,setInvalidurl]=useState(false)
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 //function for changing a normal url to embed url
  const getEmbedUrl=(url)=>{
    if(url.includes("v="))     //embed url contains v=  .so it checks (url:normal url given by user)       
    {
    const videoId=url.split("v=")[1].slice(0,11)  //if we split,we can get two index array.then after v= slice method applied to get 11 elements
                                              
    console.log(videoId);
    setVideoDetails({...videoDetails,youtubeUrl:`http://www.youtube.com/embed/${videoId}`})
    setInvalidurl(false)
    
    }
    else{
      setInvalidurl(true)

      setVideoDetails({...videoDetails,youtubeUrl:""})
      console.log("invalid");
      
    }

  }
  const uploadData=async()=>{
    const{caption,imageUrl,youtubeUrl} = videoDetails
    
    if(caption && imageUrl && youtubeUrl)
    {
      try{
      const result= await addVideo(videoDetails)
      console.log(result);
      
      if(result.status>=200 &&result.status<300)
        
        {
          setAddVideoResponse(result.data)
          toast.success(`${result.data.caption} succesfully added to your collection`)
        }
        
      console.log(result);
     
      }
      catch(err)
      {
        console.log(err);
        
      }
    }
    else{
     toast.warning("please enter the fields completely")
    }
  }


  return (
    <>
         <div className='d-flex align-items-center  ms-5'>
      <h5 className='text-warning'>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle text-white fs-5 fw-bold'>+</button>
   </div>
   
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>enter following fields</p>
       
         <div className='border border-3 bordr-info p-3 rounded'>
         <FloatingLabel controlId="floatingInput" label="Caption" className="mb-3">
        <Form.Control type="text"  onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} placeholder="Caption" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Image url" className="mb-3">
        <Form.Control type="text"  onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} placeholder="Image url" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Youtube url" className="mb-3">
        <Form.Control type="text" onChange={(e)=>getEmbedUrl(e.target.value)} placeholder="Youtube url" />
  
</FloatingLabel>
{
  isinvalidUrl &&
  <div className='text-danger'>Invalid Url</div>

}
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={uploadData}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
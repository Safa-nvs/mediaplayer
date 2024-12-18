import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI } from '../Services/allApi';
import {getAllCategoryAPI} from '../Services/allApi';
import { deleteCategoryAPI } from '../Services/allApi';
import { getSingleVideoAPI } from '../Services/allApi';
import { updateCategoryAPI } from '../Services/allApi';
import { deleteVideoAPI } from '../Services/allApi';
import Videocard from './Videocard'





function Category({setDeleteVideoResponseFromCateg,updateCatFromView}) {
  const[categoryName,setCategoryName]=useState("")
  console.log(categoryName);
  const[allCategory,setAllCategory]=useState([])
  console.log(allCategory);
  
  useEffect(()=>{

    getAllCategory()

  },[updateCatFromView])
  

  const addCategory = async () => {

    try {

      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      console.log(result.data);
      getAllCategory()
      handleClose()


    } catch (err) {
      console.log(err);


    }
  }
  const getAllCategory=async()=>{
    try{
      const result=await getAllCategoryAPI()
    if(result.status>=200 &&result.status<300)
    {
      setAllCategory(result.data)
    }
    }
    catch(err)
    {
      console.log(err);
      
    }
  }

  //function for delete category
  const deleteCategory=async(categoryId)=>{
    try{
         await deleteCategoryAPI(categoryId)
         getAllCategory()
    }
    catch(err)
    {
      console.log(err);
      
    }
  }

  //dropped the dragged video
const dropVideo=async(e,categoryId)=>{
const videoId=  e.dataTransfer.getData("videoId")
console.log(`video draged with the id ${videoId} and dropped in the category with the id${categoryId}`);

try{
   const result=await getSingleVideoAPI(videoId)
   const {data}=result//destructure data
   console.log(data);
   const selectedCategory=allCategory?.find(categ=>categ.id==categoryId)
   selectedCategory.allVideos.push(data)
   console.log(selectedCategory);
   

   await updateCategoryAPI(categoryId,selectedCategory)
   getAllCategory()
  const response= await deleteVideoAPI(videoId)
  setDeleteVideoResponseFromCateg(response) 
  getAllCategory()
   
   
}
catch(err){
  console.log(err);
  
}
}

//to prevent onDragOver 

const dragOverCateg=(e)=>
{
  e.preventDefault();
}

const videoDragStarted=(e,videoDetails,categoryId)=>{
  console.log(videoDetails,categoryId);
  const shareCatData={videoDetails,categoryId}//passed two values in variable sharecatdata at the same time
  e.dataTransfer.setData("shareCatData",JSON.stringify(shareCatData))

  
}

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex justify-content-center'>
    <h3 className='text-info'>All Category</h3>
    <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle text-white fs-5 fw-bold'>+</button>
    </div>
{ allCategory?.length>0?

   allCategory?.map(category=>( <div key={category.id} droppable={true} onDrop={(e)=>dropVideo(e,category?.id)} onDragOver={(e)=>dragOverCateg(e)} className='d-flex flex-column border border-3 border-white mt-5' >
  <div className='d-flex justify-content-between'>
  <h5 className='text-warning'>{category.categoryName}</h5>
  <button onClick={()=>deleteCategory(category.id)} className='btn'><i class="fa-solid fa-trash text-white" style={{ fontSize:"20px"}}></i></button>
  </div>
  <div className='row'>
    {
      category.allVideos?.length>0 &&

     category.allVideos.map(video=>(
      <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,category.id)}  key={video?.id} className='col-lg-6'>
      <Videocard videoDetails={video} insideCategory={true}/>
     </div>
     ))
    }
  
  </div>
  </div>
    
  ))

 
  :
  <div className='text-danger fw-bold mt-3'>no videos added yet</div>
}



<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='border border-3 border-info p-3 rounded'>
        <FloatingLabel controlId="floatingInput" label="Caption" className="mb-3">
        <Form.Control  onChange={(e)=>setCategoryName(e.target.value)} type="text"  placeholder="Caption" />
      </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button onClick={addCategory} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category
import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from  '../components/View'
import Category from  '../components/Category'


function Home() {
  const[addVideoResponse,setAddVideoResponse]=useState("")
  const[deleteVideoResponseFromCateg,setDeleteVideoResponseFromCateg]=useState("")
  const[updateCatFromView,setUpdateCatFromView]=useState("")

  return (
    <>
   <div className='conatiner  d-flex justify-content-between me-5 my-5'>
    <Add setAddVideoResponse={setAddVideoResponse}/>
    <Link className='text-warning text-decoration-none fw-bold fs-5' to={'/history'}>Watch History</Link>
   </div>
   <div className='container my-5 row'>
    <div className='col-lg-6'>
      <h5 className='text-info fw-bold mb-5'>All Videos</h5>
      <View addVideoResponse={addVideoResponse} deleteVideoResponseFromCateg={deleteVideoResponseFromCateg}
      setUpdateCatFromView={setUpdateCatFromView}/>
    </div>
    
    <div className='col-lg-6'>
    <h5 className='text-info fw-bold'></h5>

    <Category setDeleteVideoResponseFromCateg={setDeleteVideoResponseFromCateg}
     updateCatFromView={updateCatFromView}/>
 </div>

   </div>
    </>
   
  )
}

export default Home
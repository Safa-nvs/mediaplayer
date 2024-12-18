import React from 'react'
import { Link, Links } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: "250px" }} className=' container w-100 mt-5'>
      <div className='d-flex justify-content-between'>
        <div style={{ width: "400px" }}>
          <h5> <i class="fa-solid fa-music me-2"></i>Media Player</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit 
            perferendis ratione animi, placeat voluptatum non reiciendis dolor similique magni beatae!
             Explicabo facere neque ex eius ab, veritatis illo nostrum.</p>
             <p>Code licensed by Luminar</p>
             <p>Currently v5.3.2</p>
        </div>
        <div className='d-flex flex-column'>
         
          <h5>Links</h5>
           <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Landing</Link>
           <Link to={'/Home'} style={{textDecoration:"none",color:"white"}}>Home</Link>
           <Link to={'/History'} style={{textDecoration:"none",color:"white"}}>History</Link>
            
        </div>
        <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React</Link>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
          <Link to={""} style={{textDecoration:"none",color:"white"}}>React Router</Link>

        </div>
        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex mt-3'>
            <input type='text' className='form-control' placeholder='Enter the email'></input>
            <button className='btn btn-info ms-2'><i style={{color:"white"}} class="fa-solid fa-arrow-right fa-xl"></i></button>

          </div>
          <div className='d-flex justify-content-between mt-5'>
        <a href='' className='text-white fs-5'> <i class="fa-brands fa-facebook"></i></a>
        <a href='' className='text-white fs-5'> <i class="fa-brands fa-twitter"></i></a>
        <a href='' className='text-white fs-5'> <i class="fa-brands fa-instagram"></i></a>
        <a href='' className='text-white fs-5'> <i class="fa-brands fa-linkedin"></i></a>
        <a href='' className='text-white fs-5'> <i class="fa-brands fa-github"></i></a>
        <a href='' className='text-white text- fs-5'> <i class="fa-solid fa-phone"></i></a>
        
          </div>
        </div>
      </div>
      <p className='text-center fw-bold'>Copyright &copy; Aug batch 2024,Media Player.Built with react</p>
    </div>
  )
}

export default Footer
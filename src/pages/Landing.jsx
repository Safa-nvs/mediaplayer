import React from 'react'
import LandingImage from '../assets/tenor.gif'
import Card from 'react-bootstrap/Card';
import settingImg from '../assets/settings.jpg'
import categImg from '../assets/category.png'
import histImg from '../assets/history.png'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div style={{ height: "500px" }} className='w-100 container mt-5'>
        <div className='row align-items-center '>
          <div className='col-lg-5 mt-5'>
            <h4 style={{ fontFamily: "Cookie" }}>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae repudiandae consequatur, dolores eius, itaque
              aperiam mollitia facere non fuga reiciendis labore maiores quasi minus officia illum enim. Fugit, cupiditate.</p>
    
           <Link to={'/home'}><button className='btn btn-info mt-3'>Get Started</button></Link> 
          </div>
          <div className='col-lg-1'></div>

          <div className='col-lg-6'>
            <img style={{ width: "400px", height: "400px" }} src={LandingImage}></img>

          </div>
        </div>


      </div>
      <div className='container mt-5'>
        <h3 style={{ fontFamily: "Cookie" }} className='text-warning text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem', height: "400px" }} className='p-3'>
              <Card.Img variant="top" src={settingImg} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can Upload,view and remove the videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem', height: "400px" }} className='p-3'>
              <Card.Img variant="top" src={categImg} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text>
                  Users can  categorize  the video bt drag and drop features
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem', height: "400px" }} className='p-3'>
              <Card.Img variant="top" src={histImg} style={{ height: "250px", }} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

        </div>
      </div>
      <div className=' container border border-3 border-white rounded mt-5 p-3'>
        <div className='row'>

          <div className='col-lg-6 mt-4 text-white'>
          <h3 className='text-warning fw-bold'>Simple Fast and powerfull</h3>

            <div className=''>
           <p><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam 
           tempora id animi? corporis veniam!</p>
           </div>
             <div className=''>
            <p><span className='fs-5'>Categorize Video:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam 
            tempora id animi? corporis veniam!</p>
            </div>
            <div className=''>
            <p><span className='fs-5'>Manage History:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam 
            tempora id animi? corporis veniam!</p>
            </div>
          </div>
          <div className='col-lg-6 mt-3'>
            <iframe width="540" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=vM09Jb9PQiP1EqfU"
             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
             encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </div>


        </div>
      </div>
    </>
  )
}

export default Landing
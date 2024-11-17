import React from 'react'
import './App.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
const Header = () => {
  return (
    <>
   <div id='gad'>
   <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div id='cdn' class="carousel-item active">
     <img src={img1} width={'100%'} height={'100%'} class="d-block w-100" alt="" />
    </div>
    <div id='cdn' class="carousel-item">
     <img src={img2} class="d-block w-100" width={'100%'} height={'100%'} alt="" />
    </div>
    <div id='cdn' class="carousel-item">
    <img src={img3} class="d-block w-100" width={'100%'} height={'100%'} alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   </div>
   <div id='venus'>
    <h1 id='vit'>
PLUNGE INTO THE WONDERFUL <br />
WORLD OF READING</h1>
   </div>
   <div id='fd'>
    <h1 id='fd1'>Most Popular</h1>
   </div>
    </>
  )
}

export default Header

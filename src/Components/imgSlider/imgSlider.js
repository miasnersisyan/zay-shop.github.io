import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import './style.css'


function SimpleSlider(){
    const settings = {
      dots : true,
      infinite : true,
      speed : 500,
      slidesToShow : 1,
      slidesToScroll : 1
    }
  
    return(
      <div className='G-center'>
      <Slider className='z3-1' {...settings}>
        <div>
        <div className='z3d1'>
          <img src='/images/z3d1img1.jpg' className='z3d1img1' />
          <img src='/images/z3d1img2.jpg' className='z3d1img1' />
          <img src='/images/z3d1img3.jpg' className='z3d1img1' />
          <img src='/images/z3d1img4.jpg' className='z3d1img1' />
        </div>
        </div>
        <div>
        <div className='z3d1'>
          <img src='/images/z3d1img1.jpg' className='z3d1img1' />
          <img src='/images/z3d1img2.jpg' className='z3d1img1' />
          <img src='/images/z3d1img3.jpg' className='z3d1img1' />
          <img src='/images/z3d1img4.jpg' className='z3d1img1' />
        </div>
        </div>
       
         
      </Slider>
      </div>
    
    )
  }

  function ImgSlider(){
   return(
   <div className='z3'>
    <h1 className='z2ver1'>Our Brands</h1>
      <div className='G-center'>
          <p className='z2p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
      </div>
      <SimpleSlider />
    </div>
   )
  }

  export default ImgSlider
  
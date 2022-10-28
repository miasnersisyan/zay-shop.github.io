
import './style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import HomeComp1 from '../../Components/homeComp1/homeComp1'
import HomeComp2 from '../../Components/homeComp2/homeComp2'

function SimpleSlider(){
  const settings = {
    dots : true,
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidesToScroll : 1
  }

  return(
  
    <Slider {...settings}>
      <div className='sliderD1'>
        <div className='sliderdiv-1'>
         <div className='sliderd1-1'>
            <div className='sliderdiv1'>
                <h1 className='sliderh1'>Proident occaecat</h1>
                <p className='sliderp1'>Aliquip ex ea commodo consequat</p>
                <p className='sliderp2'>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</p>
            </div>
            <div className='sliderdiv2'>
                <img src='/images/sliderimg1.jpg' className='sliderimg1' />
            </div>
         </div>
         </div>
      </div>
      <div className='sliderD1'>
      <div className='sliderdiv-1'>
         <div className='sliderd1-1'>
            <div className='sliderdiv1'>
            <h1 className='sliderh1'>Repr in voluptate</h1>
                <p className='sliderp1'>Ullamco laboris nisi ut</p>
                <p className='sliderp2'>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
            </div>
            <div className='sliderdiv2'>
                <img src='/images/sliderimg2.jpg' className='sliderimg1' />
            </div>
         </div>
         </div>
      </div>
      <div className='sliderD1'>
      <div className='sliderdiv-1'>
         <div className='sliderd1-1'>
            <div className='sliderdiv1'>
            <h1 className='sliderh2'>Zay eCommerce</h1>
                <p className='sliderp1'>Tiny and Perfect eCommerce Template</p>
                <p className='sliderp2'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
            </div>
            <div className='sliderdiv2'>
                <img src='/images/sliderimg3.jpg' className='sliderimg1' />
            </div>
         </div>
         </div>
      </div>
       
    </Slider>
  
  )
}



function Home(){


  const h1Arr = [
    {id : 1,src : '/images/homeImg1.jpg',text : 'Watches'},
    {id : 2,src : '/images/homeImg2.jpg',text : 'Shoes'},
    {id : 3,src : '/images/homeImg3.jpg',text : 'Accessories'}
  ]

  const icons1Arr = ['icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn','icon-star-full starIcn','icon-star-full starIcn']

  const icons2Arr = ['icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn','icon-star-full yellowIcn starIcn']

  

  const h2Arr = [
    {id : 1,src : '/images/homeh2Img1.jpg',iconArr : icons1Arr,price : '$240.00',text1 : 'Gym Weight',text2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.',text3 : 'Reviews (24)'},
    {id : 2,src : '/images/homeh2Img2.jpg',iconArr : icons1Arr,price : '$480.00',text1 : 'Cloud Nike Shoes',text2 : 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',text3 : 'Reviews (48)'},
    {id : 3,src : '/images/homeh2Img3.jpg',iconArr : icons2Arr,price : '$360.00',text1 : 'Summer Addides Shoes',text2 : 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',text3 : 'Reviews (74)'},

  ]




    return(<>
        <SimpleSlider />
        <div className='h1'>
        <h1 className='homever1'>Categories of The Month</h1>
        <p className='homep1'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
         <div className='G-center'>
          <div className='h1-1 G-maindiv'>
             {
              h1Arr.map((elm) => {
                return <HomeComp1 key={elm.id} props = {elm} />
              })
             }
          </div>
         </div>
        </div>

        <div className='h2'>
        <h1 className='homever1'>Featured Product</h1>
        <p className='homep1'>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <div className='G-center'>
          <div className='G-maindiv h2-1'>
            {
              h2Arr.map((elm) => {
                return <HomeComp2 key={elm.id} props = {elm} />
              })
            }
          </div>
          </div>
        </div>
        </>
    )
}

export default Home
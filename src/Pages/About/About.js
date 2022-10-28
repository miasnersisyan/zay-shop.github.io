
import AboutComp1 from '../../Components/aboutComp1/aboutComp1'
import './style.css'

import ImgSlider from '../../Components/imgSlider/imgSlider'








function About(){


    const z2Arr = [
        {id : 1,icon : 'icon-truck z2d1icn1',text : 'Delivery Services'},
        {id : 2,icon : 'icon-tab z2d1icn1',text : 'Shipping & Return'},
        {id : 3,icon : 'icon-link z2d1icn1',text : 'Promotion'},
        {id : 4,icon : 'icon-user-plus z2d1icn1',text : '24 Hours Service'},
    ]




    return(
      <>
      <div className='z1'>
        <div className='z1-1 G-maindiv'>
            <div className='z1d1'>
                <h1 className='z1d1ver1'>About Us</h1>
                <p className='z1d1p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='z1d2'>
                <img src='/images/aboutimg1.jpg' className='z1d2img1' alt='peopleImg' />
            </div>
        </div>
      </div>

      <div className='z2'>
        <h1 className='z2ver1'>Our Services</h1>
        <div className='G-center'>
            <p className='z2p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='G-center'>
         <div className='G-maindiv z2-1'>
            {
              z2Arr.map((elm) => {
                return <AboutComp1 key={elm.id} props = {elm} />
              })
            }
         </div>
        </div>

      </div>

      <ImgSlider />

      </>
    )
}

export default About
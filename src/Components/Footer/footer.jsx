import './style.css'

function Footer(){
  return(
    <div className='footerDiv'>
        <div className='w3'>
             <div className='G-maindiv'>
                <div className='w3-1'>
                    <div className='w3-1d1'>
                        <h1 className='footerHeader1'>Zay Shop</h1>
                        <p className='footerp1'><span className='icon-location2 footersp1'></span> 123 Consectetur at ligula 10660</p>
                        <p className='footerp1'><span className='icon-phone-hang-up footersp1'></span> <a href='' className='footerlink1'>010-020-0340</a> </p>
                        <p className='footerp1'><span className='icon-envelop footersp1'></span> <a href='' className='footerlink1'>info@company.com</a></p>
                    </div>
                    <div className='w3-1d1'>
                        <h1 className='footerHeader2'>Products</h1>

                        <ul className='footerUl1'>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Luxury</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Sport Wear</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Men's Shoes</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Women's Shoes</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Popular Dress</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Gym Accessories</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Sport Shoes</a></li>
                        </ul>
                    </div>
                    <div className='w3-1d1'>
                    <h1 className='footerHeader2'>Further Info</h1>
                    <ul className='footerUl1'>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Home</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>About Us</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Shop Locations</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>FAQs</a></li>
                            <li className='footerUlLi1'><a className='footerLiLink1' href=''>Contact</a></li>
                            
                        </ul>
                    </div>
                </div>

                <div className='w3-2'>
                    <div className='w3-2d1'>
                        <button className='footerbtn1 icon-google-plus'></button>
                        <button className='footerbtn1 icon-facebook2'></button>
                        <button className='footerbtn1 icon-github'></button>
                        <button className='footerbtn1 icon-linkedin'></button>
                    </div>
                    <div className='w3-2d1'>
                        <div className='footerInpDiv'>
                            <input type='text' placeholder='Emmail Address' className='footerinp1' />
                            <button className='footerbtn2'>Subscribe</button>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <div className='w4'>
            <div className='G-maindiv'>
                 <p className='w4p1'>Copyright © 2021 Company Name | Designed by <a className='w4link1' href=''>TemplateMo</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer
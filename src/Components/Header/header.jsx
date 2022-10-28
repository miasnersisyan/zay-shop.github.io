import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { findLikes } from '../../redux/likes/likesSlicer'
import { selectShopBalance } from '../../redux/shopBalance/shopBalanceSlicer'
import './style.css'

function Header(){

    let balance = useSelector(selectShopBalance)
    let likes = useSelector(findLikes)


    return(
        <>
            <div className='w1'>
                <div className='w1-1 G-maindiv'>
                    <div className='w1-1d1'>
                        <p>
                            <a className='link1' href=''><span className='icon-envelop iconsp1'></span> info@company.com </a>
                            <a className='link1' href=''><span className='icon-phone-hang-up iconsp1'></span>  010-020-0340 </a>
                        </p>
                    </div>
                    <div className='w1-1d1'>
                        <span className='icon2sp1 icon-google-plus'></span>
                        <span className='icon2sp1 icon-facebook2'></span>
                        <span className='icon2sp1 icon-github'></span>
                        <span className='icon2sp1 icon-linkedin'></span>
                    </div>
                </div>
            </div>

            <div className='w2'>
               <div className='w2-1 G-maindiv'>
                 <div className='w2-1d1'>
                    <a className='header1logo' href=''>Zay</a>
                </div>
                 <div className='w2-1d1'>
                    <Link to='/' className='span3'>Home</Link>
                    <Link to='/About' className='span3'>About</Link>
                    <Link to='/Shop' className='span3'>Shop</Link>
                    <Link to='/Contact' className='span3'>Contact</Link>
                 </div>
                 <div className='w2-1d1'>
                    <span className='spn4'>Likes - {likes}</span>
                    <span className='spn4'>{balance}$</span>
                 </div>
               </div>
            </div>
        </>
    )
}

export default Header
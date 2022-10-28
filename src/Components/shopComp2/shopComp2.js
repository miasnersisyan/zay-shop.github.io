
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLikes, findLikes } from '../../redux/likes/likesSlicer'
import { changeShopBalance, selectShopBalance } from '../../redux/shopBalance/shopBalanceSlicer'
import './style.css'

function ShopComp2({props}){

    let balance = useSelector(selectShopBalance)
    let dispatch = useDispatch()

    let [letPay,setLetPay] = useState(true)
    let [payBtnColor,setPayBtnColor] = useState('#59ab6e')

    let [letLike,setLetLike] = useState(true)
    let [likeBtnColor,setLikeBtnColor] = useState('#59ab6e')

    let likes = useSelector(findLikes)



  return(
    <div className='f3d1'>
        <div className='f3d1img1div'>
            <img src={props.src} className='f3d1img1' />
            <div className='f3d1imgdiv-1'>
                 <div className='f3d1btndiv'>
                     <div className='f3d1btn1 icon-point-left'  style={{backgroundColor : `${likeBtnColor}`}} onClick={() => {
                        if(letLike){
                            dispatch(changeLikes(likes + 1))
                            setLikeBtnColor('red')
                            setLetLike(false)
                            
                        }else{
                            dispatch(changeLikes(likes - 1))
                            setLikeBtnColor('#59ab6e')
                            setLetLike(true)
                            
                        }
                     }}></div>
                     <div className='f3d1btn1 icon-cart' style={{backgroundColor : `${payBtnColor}`}} onClick={() => {
                        if(letPay){
                            dispatch(changeShopBalance(balance - props.price1))
                            setLetPay(false)
                            setPayBtnColor('red')
                        }else{
                            dispatch(changeShopBalance(balance + props.price1))
                            setLetPay(true)
                            setPayBtnColor('#59ab6e')
                        }
                     }}></div>
                 </div>
            </div>
        </div>
        <div className='f3d1textdiv'>
            <p className='f3d1p1'>Oupidatat non</p>
            <p className='f3d1p1'>M/L/X/XL</p>
            <p className='f3d1iconsp'>
                <span className='icon-star-full f3d1icn1'></span>
                <span className='icon-star-full f3d1icn1'></span>
                <span className='icon-star-full f3d1icn1'></span>
                <span className='icon-star-full f3d1icn2'></span>
                <span className='icon-star-full f3d1icn2'></span>
            </p>
            <p className='f3d1p2'>
             {props.price1}$
            </p>
        </div>
    </div>
  )
}

export default ShopComp2
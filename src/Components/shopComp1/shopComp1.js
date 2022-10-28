import { useState } from 'react'
import './style.css'

function ShopComp1({props}){

    let [menuHeight,setMenuHeight] = useState(0)
    let [menuVal,setMenuVal] = useState(false)
    let [menuScale,setMenuScale] = useState(0)



   return(
   <div className='shopcomp1parent'>
     <div className='shopcomp1d1' onClick={() => {
        if(!menuVal){
            setMenuHeight(70)
            setMenuVal(true)
            setMenuScale(1)
        }else{
            setMenuHeight(0)
            setMenuVal(false)
            setMenuScale(0)
        }
     }}>
        <span className='shopcomp1sp1'>{props.text1}</span>
        <span className={props.icon} id='shopcomp1icn1'></span>
     </div>
       <div className='shopcomp1menu' style={{height : `${menuHeight}px`,transform : `scale(1,${menuScale})`}}>
        <a className='shopcomp1link1' href=''>{props.text2}</a><br />
        <a className='shopcomp1link1' href=''>{props.text3}</a>
       </div>
     
     </div>
   )
}

export default ShopComp1
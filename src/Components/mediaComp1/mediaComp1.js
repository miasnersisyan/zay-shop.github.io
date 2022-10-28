import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function MediaComp1(){

    let [divHeight,setDivHeight] = useState(0)
    let [divScale,setDivScale] = useState(0)
    let [divVal,setDivVal] = useState(false)
   
    return(
        <div className='mediaMenudiv'>
            <div className='mediabox1'>
                <h1 className='mediaver1'>Zay</h1>
                <button className='mediabtn1 icon-list' onClick={() => {
                    if(!divVal){
                        setDivVal(true)
                        setDivHeight(160)
                        setDivScale(1)
                    }else{
                        setDivVal(false)
                        setDivHeight(0)
                        setDivScale(0)
                    }
                }}></button>
            </div>
            <div className='mediamenuToggle' style={{
                height : `${divHeight}px`,
                transform : `scale(1,${divScale})`
            }}>
                    <div className='mediaspn1div'><Link to='/' className='mediaspan1'>Home</Link></div>
                    <div className='mediaspn1div'><Link to='/About' className='mediaspan1'>About</Link></div>
                    <div  className='mediaspn1div'><Link to='/Shop' className='mediaspan1'>Shop</Link></div>
                    <div  className='mediaspn1div'><Link to='/Contact' className='mediaspan1'>Contact</Link></div>
            </div>
        </div>
    )
}

export default MediaComp1
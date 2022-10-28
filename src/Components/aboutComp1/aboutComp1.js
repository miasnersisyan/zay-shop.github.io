import './style.css'

function AboutComp1({props}){
    return(
        <div className='z2d1'>
         <div className='G-center'>
            <span className={props.icon}></span>
         </div>
         <p className='z2d1p1'>{props.text}</p>
        </div>
    )
}

export default AboutComp1
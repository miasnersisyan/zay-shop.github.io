import './style.css'

function HomeComp1({props}){
  return(
    <div className='h1d1'>
        <img src={props.src} className='h1d1img1' />
        <p className='h1d1p1'>{props.text}</p>
        <div className='G-center'><button className='h1d1btn1'>Go Shop</button></div>
    </div>
  )
}

export default HomeComp1
import './style.css'

function HomeComp2({props}){
   return(
     <div className='h2d1'>
        <img src={props.src} className='h2d1img1'  />
        <div className='h2d1textdiv'>
            <div className='h2d1box1'>
                <p>
                    {
                        props.iconArr.map((icon) => {
                            return <span className={icon}></span>
                        })
                    }
                </p>
                <span className='h2d1sp1'>{props.price}</span>
            </div>
            <h1 className='h2d1ver1'>{props.text1}</h1>
            <p className='h2d1p1'>{props.text2} </p>
            <p className='h2d1p2'>{props.text3}</p>
        </div>
     </div>
   )
}

export default HomeComp2
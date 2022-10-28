import './style.css'

function Contact(){

  



    return(
       <>
         <div className='g1'>
             <h1 className='g1ver1'>Contact Us</h1>
             <p className='g1p1'>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
         </div>
         <div className='g2'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563246.0242156954!2d45.040741000000004!3d40.070618499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sArmenia!5e0!3m2!1sen!2s!4v1666704581532!5m2!1sen!2s" className='map1'></iframe>
         </div>

         <div className='g3'>
            <div className='g3-1'>
                <div className='g3-1d1'>
                    <div className='g3-1d1d1'>
                        <label className='label1'>Name</label>
                        <input type='text' className='g3inp1' placeholder='Name' />
                    </div>
                    <div className='g3-1d1d1'>
                    <label className='label1'>Email</label>
                        <input type='text' className='g3inp1' placeholder='Email' />
                    </div>
                </div>
                <label className='label1'>Subject</label>
                <input type='text' className='g3inp1' placeholder='Subject' />
                <label className='label1'>Message</label>
                <textarea className='textarea'> </textarea>

               
            </div>
         </div>
       </>
    )
}

export default Contact

import { useState } from 'react'
import ImgSlider from '../../Components/imgSlider/imgSlider'
import ShopComp1 from '../../Components/shopComp1/shopComp1'
import ShopComp2 from '../../Components/shopComp2/shopComp2'
import './style.css'

function Shop(){


    const shopMenuArr = [
        {id : 1,text1 : 'Gender',text2 : 'Men',text3 : 'Women',icon : 'icon-circle-down'},
        {id : 2,text1 : 'Sale',text2 : 'Sport',text3 : 'Luxury',icon : 'icon-circle-down'},
        {id : 3,text1 : 'Product',text2 : 'Bag',text3 : 'Sweather',icon : 'icon-circle-down'}
    ]

    let [selectText,setSelectText] = useState('Featured')
    let [selectedColor1back,setSelectedColor1back] = useState('#0d6efd')
    let [selectedColor2back,setSelectedColor2back] = useState('white')
    let [selectedColor3back,setSelectedColor3back] = useState('white')

    let [selectedColor1,setSelectedColor1] = useState('white')
    let [selectedColor2,setSelectedColor2] = useState('#212529')
    let [selectedColor3,setSelectedColor3] = useState('#212529')

    let [selectorVal,setSelectorVal] = useState('none')
    let [selectorValid,setSelectorValid] = useState(false)


    const f3Arr = [
        {id : 1,src : '/images/f3d1img1.jpg',price1 : 150},
        {id : 2,src : '/images/f3d1img2.jpg',price1 : 123},
        {id : 3,src : '/images/f3d1img3.jpg',price1 : 92},
        {id : 4,src : '/images/f3d1img4.jpg',price1 : 80},
        {id : 5,src : '/images/f3d1img5.jpg',price1 : 200},
        {id : 6,src : '/images/f3d1img6.jpg',price1 : 100},
        {id : 7,src : '/images/f3d1img7.jpg',price1 : 97},
        {id : 8,src : '/images/f3d1img8.jpg',price1 : 150},
        {id : 9,src : '/images/f3d1img9.jpg',price1 : 136},
    ]



    return(
        <>
        <div className='f1'>
             <div className='G-maindiv f1-1'>
                 <div className='f1-1d1'>
                    <h1 className='f1ver1'>Categories</h1>
                    <div className='shopcomp1div'>
                    {
                       shopMenuArr.map((elm) => {
                        return <ShopComp1 key={elm.id} props = {elm} />
                       }) 
                    }
                    </div>
                 </div>
                 <div className='f1-1d2'>
                    <div className='f2'>
                        <div className='f2d1'>
                            <span className='f2d1sp1'>All</span>
                            <span className='f2d1sp1'> Men's</span>
                            <span className='f2d1sp1'>Women's</span>
                        </div>
                        <div className='f2d1select' onClick={() => {
                           if(!selectorValid){
                            setSelectorVal('block')
                            setSelectorValid(true)
                           }else{
                            setSelectorVal('none')
                            setSelectorValid(false)
                           }
                        }}>
                          {selectText}
                            <div className='f2d1selectdiv' style={{display : `${selectorVal}`}}>
                                <div className='selectd1' style={{
                                    backgroundColor : `${selectedColor1back}`,
                                    color : `${selectedColor1}`
                                }}><p className='select1sp1' onClick={() => {
                                    setSelectText('Featured')
                                    setSelectedColor1('white')
                                    setSelectedColor1back('#0d6efd')
                                    setSelectedColor2('#212529')
                                    setSelectedColor2back('white')
                                    setSelectedColor3('#212529')
                                    setSelectedColor3back('white')
                                }}>Featured</p></div>
                                <div className='selectd1'  style={{
                                    backgroundColor : `${selectedColor2back}`,
                                    color : `${selectedColor2}`
                                }}><p className='select1sp1'  onClick={() => {
                                    setSelectText('A to Z')
                                    setSelectedColor2('white')
                                    setSelectedColor2back('#0d6efd')
                                    setSelectedColor1('#212529')
                                    setSelectedColor1back('white')
                                    setSelectedColor3('#212529')
                                    setSelectedColor3back('white')
                                }}>A to Z</p></div>
                                <div className='selectd1'  style={{
                                    backgroundColor : `${selectedColor3back}`,
                                    color : `${selectedColor3}`
                                }}><p className='select1sp1'  onClick={() => {
                                    setSelectText('Item')
                                    setSelectedColor3('white')
                                    setSelectedColor3back('#0d6efd')
                                    setSelectedColor2('#212529')
                                    setSelectedColor2back('white')
                                    setSelectedColor1('#212529')
                                    setSelectedColor1back('white')
                                }}>Item</p></div>
                               
                            </div>
                        </div>
                    </div>

                    <div className='f3'>
                        {
                           f3Arr.map((elm) => {
                              return <ShopComp2 key={elm.id} props = {elm} />
                           })
                        }
                    </div>
                    <div className='f3btnsdiv'>
                        <button className='f3btn1'>1</button>
                        <button className='f3btn1'>2</button>
                        <button className='f3btn1'>3</button>
                    </div>
                 </div>
             </div>
        </div>
        <ImgSlider />

        </>
    )
}

export default Shop
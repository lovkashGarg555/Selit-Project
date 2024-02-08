import React from 'react'
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
const Carousel = (props) => {
    const leftbutton=()=>{
    
    }
    const rightbutton=()=>{

    }
    const noofbooks=[1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className='caraousel w-[100vw] flex rounded-[10px]  items-center h-[300px] overflow-x-scroll scrollbar-hide  mt-[30px] mx-[20px] px-[15px] shadow-2 shadow-black'>
        <button className='absolute  left-[10px]' onClick={leftbutton}><FaCaretLeft className='h-[50px]' /></button>
        {noofbooks.map((index)=>(
        <div className='main-carousel  w-[300px] h-[250px] mx-[20px] flex'>
        <div className=' items flex flex-col font-semibold w-[250px] rounded-[40px] border-[2px] border-black items-center p-[20px]' >
            <img src={props.CarouselImage} className='w-[200px] rounded-[10px] h-[130px]' alt="Carouselbookimage" />
           <div className='text-blue-400 text-[20px] '>{props.CarouselBooktitle}</div>
           <div className='text-black text-[20px] '>{props.CarouselBookAuthor}</div>
           <div className='text-red-400 text-[25px] '>₹599</div>
        </div>
        </div>
            ))}
        <button className='absolute right-[15px]' onClick={rightbutton}><FaCaretRight className='h-[50px]' /></button>

    </div>
  )
}

export default Carousel
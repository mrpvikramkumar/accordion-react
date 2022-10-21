import React,{useState} from 'react'
import './App.css'
import { FcExpand,FcCollapse } from "react-icons/fc";

const Data = ({title,body})=> {

    const[show,setShow] =useState(false);
  const handleClick = ()=>{
    setShow(!show)
  }
//    onMouseEnter = {()=>setShow(true)} onMouseLeave = {()=>setShow(false)}
    return (
    <div className={show ? 'accordion-open accordion-item':'accordion-item'} onClick={handleClick} >
        <div className='accordion-title'>
        <h5>{title}</h5>
        <p>{show ? <FcCollapse size={25}/>: <FcExpand size={25}/>}</p>
        </div>  
        {show && <p>{body}</p>}    
    
    </div>
  )
}

export default Data
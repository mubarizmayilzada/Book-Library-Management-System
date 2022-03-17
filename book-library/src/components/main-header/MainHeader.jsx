import React from 'react'
import { BsBell } from "react-icons/bs";
import marz from '../../assets/images/marz.jpg';
import './mainHeader.scss'
import {useState} from 'react' 

const MainHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <header>
        <div className='left-aside-header'>
            <h2>
                Books
            </h2>
        </div>
        <div className='right-aside-header'> 
            <input onChange={(event) => {setSearchTerm(event.target.value)}} type="text" placeholder='search for book name'/>
            <BsBell/>
            <span></span>
            <h3>Mubariz Mayilzada</h3>
            <img src={marz} alt="marzPhoto" />
        </div>
    </header>
  )
}

export default MainHeader
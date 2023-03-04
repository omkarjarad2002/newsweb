import React, { useState } from 'react'  
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

export function Navbar() {
    const [showMediaIcons, setShowMediaIcons]=useState(false);
  return (
    <nav className='nav'>
        <div className='nav_head_div'><h2>Today'SFresh</h2></div>
        <div className={showMediaIcons?"mobile-menu-link" : "nav_items_div"}> 
               <ul> 
                    <li>
                        <Link className="navLink" to="/">
                            General
                        </Link> 
                    </li>
                    <li>
                        <Link className="navLink" to="/business">
                            Business
                        </Link> 
                    </li>
                    <li>
                        <Link className="navLink" to="/sports">
                            Sports
                        </Link> 
                    </li>
                    <li>
                        <Link className="navLink" to="/entertainment">
                            Entertainment
                        </Link> 
                    </li>
                    <li>
                        <Link className="navLink" to="/health">
                            Health
                        </Link> 
                    </li>
                    <li>
                        <Link className="navLink" to="/science">
                            Science
                        </Link> 
                    </li> 
                    <li>
                        <Link className="navLink" to="/technology">
                            Technology
                        </Link> 
                    </li>
               </ul>
               {/* hamburget menu  */}
 
        </div>
        
        <div className='hamburger-menu'>
                    <a href='#' onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu/>
                    </a>
               </div>
    </nav>
  )
}

export default Navbar;
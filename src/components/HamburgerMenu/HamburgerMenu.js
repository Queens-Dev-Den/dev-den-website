import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './HamburgerMenu.css';
import { IconContext } from 'react-icons';

function HamburgerMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: 'rgb(236, 236, 236)'}}>
      <div className="hamburger-menu">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'ham-menu active' : 'ham-menu'}>
        <ul className='hamburger-menu-items' onClick={showSidebar}>
          <li className='hamburger-toggle'>
            <Link to="#" className='menu-bars menu-bars-x'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default HamburgerMenu
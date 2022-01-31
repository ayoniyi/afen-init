import { useState, useContext } from 'react'
// import { motion } from 'framer-motion'
import { ModeContext } from '../../context/ModeContext'

import Logo from '../../images/utils/logo.svg'
import Moon from '../../images/icons/moon.svg'
import Sun from '../../images/icons/sun.svg'
import Search from '../../images/icons/search.svg'
import './NavMobile.scss'
//import anim from './NavAnim.module.scss'

const NavMobile = () => {
  //const [dark, setDark] = useState(false)
  const [menuItems, setMenuItems] = useState({
    menu: false,
    menuState: false,
  })
  const [modeState, setModeState] = useContext(ModeContext)
  const dark = modeState.dark
  const handleMode = () => {
    if (modeState.dark === 'false') {
      setModeState({
        dark: 'true',
      })
    } else {
      setModeState({
        dark: 'false',
      })
    }
  }

  // const handleMenu = async () => {
  //   if (menuItems.menuState === false) {
  //     await setMenuItems({
  //       menu: true,
  //       menuState: true,
  //     })
  //     console.log(menuItems.menu)
  //   }
  //   if (menuItems.menuState === true) {
  //     setTimeout(() => {
  //       setMenuItems({
  //         ...menuItems,
  //         menu: false,
  //       })
  //     }, 0)
  //     await setMenuItems({
  //       ...menuItems,
  //       menuState: false,
  //       //menu: false,
  //     })
  //     console.log(menuItems.menu)
  //   }
  // }
  const handleMenu = () => {
    setMenuItems({
      ...menuItems,
      menu: !menuItems.menu,
      menuState: !menuItems.menu,
    })
  }
  return (
    <div
      className={`${dark === 'true' ? 'navContainerM-dark' : 'navContainerM'}`}
    >
      <div className="navContentM">
        <div className="navM-left">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navM-right">
          <div className="nav-wrap">
            <input type="checkbox" className="toggler" onChange={handleMenu} />
            <div className="hamburger">
              <div id="ham-lines"></div>
            </div>
          </div>
        </div>
      </div>
      {menuItems.menu && (
        <div
          className={` ${
            menuItems.menuState
              ? 'nav-menu animate__animated animate__slideInLeft animate__faster'
              : 'nav-menu  animate__animated animate__slideOutLeft animate__faster'
          }`}
        >
          <div className="menuContent">
            <div className="menuTop">
              <img
                className="animate__animated animate__zoomIn animate__delay-.95s "
                src={dark === 'true' ? Sun : Moon}
                alt="switch"
                onClick={handleMode}
              />
            </div>
            <div className="menuBody animate__animated animate__fadeIn animate__delay-1s ">
              <ul className="menu-links">
                <li>Marketplace</li>
                <li>Resources</li>
                <li>Profile</li>
              </ul>
              <div className="menu-search">
                <img src={Search} alt="search" />
                <input type="text" placeholder="Search Afen" />
              </div>
            </div>
            <div className="menuBtm animate__animated  animate__fadeInUp animate__delay-2s animate__faster">
              <button>Get Started</button>
              <button>Connect Wallet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavMobile

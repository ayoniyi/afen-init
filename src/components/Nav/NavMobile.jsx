import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'
import { useRef, useEffect } from 'react'
import { gsap, Power3, Expo } from 'gsap'

import Logo from '../../images/utils/logo.svg'
import Moon from '../../images/icons/moon.svg'
import Sun from '../../images/icons/sun.svg'
import Search from '../../images/icons/search.svg'
import Ham from '../../images/icons/ham.svg'
import Ham2 from '../../images/icons/ham2.svg'
import Close from '../../images/icons/menu-close.svg'
import Close2 from '../../images/icons/cl-white.svg'
import './NavMobile.scss'

const NavMobile = () => {
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
  let { navContainer } = useRef()
  useEffect(() => {
    const t1 = gsap.timeline({ paused: true })
    t1.to(navContainer, 1, {
      left: 0,
      ease: Power3.easeInOut,
    })
    let modeA = document.getElementById('modeA')
    t1.staggerFrom(
      modeA,
      0.8,
      { scale: 0, opacity: 0, ease: Expo.easeOut },
      '0.1',
      '-=0.2',
    )
    let menuItems = document.querySelectorAll('.menu-links > li')
    t1.staggerFrom(
      menuItems,
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      '0.1',
      '-=0.2',
    )
    let searchBox = document.querySelectorAll('.menu-search')
    t1.staggerFrom(
      searchBox,
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      '0.1',
      '-=0.6',
    )
    let mBtns = document.getElementById('btns')
    t1.staggerFrom(
      mBtns,
      0.1,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      '0.8',
      '-=0.4',
    )
    t1.reverse()
    let mo = document.querySelector('.navM-right')
    mo.onclick = function () {
      t1.reversed(!t1.reversed())
    }
    let mc = document.querySelector('.menu-close')
    mc.onclick = function () {
      t1.reversed(!t1.reversed())
    }
  }, [navContainer])

  return (
    <div
      className={`${dark === 'true' ? 'navContainerM-dark' : 'navContainerM'}`}
    >
      <div className="navContentM">
        <div className="navM-left">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navM-right">
          <img src={dark === 'true' ? Ham2 : Ham} alt="menu" />
        </div>
      </div>
      <div
        className="nav-menu"
        ref={(el) => {
          navContainer = el
        }}
      >
        <div className="menuContent">
          <div className="menuTop">
            <img
              id="modeA"
              src={dark === 'true' ? Sun : Moon}
              alt="switch"
              onClick={handleMode}
            />
            <div className="menu-close">
              <img src={dark === 'true' ? Close2 : Close} alt="close" />
            </div>
          </div>
          <div className="menuBody ">
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
          <div className="menuBtm" id="btns">
            <button>Get Started</button>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMobile

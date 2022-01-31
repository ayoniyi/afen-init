import { useRef, useEffect } from 'react'
import { gsap, Power3, Expo } from 'gsap'

import './NavMobile.scss'

const NavMX = () => {
  let { navContainer } = useRef()
  useEffect(() => {
    const t1 = gsap.timeline({ paused: true })
    t1.to(navContainer, 1, {
      left: 0,
      ease: Power3.easeInOut,
    })
    let menuItems = document.querySelectorAll('.menu > div')
    t1.staggerFrom(
      menuItems,
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      '0.1',
      '-=0.2',
    )
    t1.reverse()
    let mo = document.querySelector('.menu-open')
    mo.onclick = function () {
      t1.reversed(!t1.reversed())
    }
    let mc = document.querySelector('.menu-close')
    mc.onclick = function () {
      t1.reversed(!t1.reversed())
    }
  }, [navContainer])
  return (
    <div>
      <div className="menu-open">menu</div>
      <div
        className="nav-container"
        ref={(el) => {
          navContainer = el
        }}
      >
        <div className="menu-close">close</div>
        <nav className="menu">
          <div className="menu__item">
            <p className="menu__item-link">Home</p>
          </div>
          <div className="menu__item">
            <p className="menu__item-link">Showcase</p>
          </div>
          <div className="menu__item">
            <p className="menu__item-link">About</p>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavMX

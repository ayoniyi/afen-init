import { useContext, useState } from 'react'
import { ModeContext } from '../../context/ModeContext'
import Logo from '../../images/utils/logo.svg'
import Search from '../../images/icons/search.svg'
import Line from '../../images/icons/line1.svg'
import Moon from '../../images/icons/moon.svg'
import Sun from '../../images/icons/sun.svg'
import SearchBox from '../Search/Search'
import './Nav.scss'

const NavWeb = () => {
  //const [dark, setDark] = useState(false)
  const [sBox, setSBox] = useState(false)
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
  const handleClose = () => {
    setSBox(false)
  }
  return (
    <div
      className={`${
        dark === 'true' ? 'navContainer-dark' : 'navContainer-light'
      }`}
    >
      {sBox && <SearchBox handleClose={handleClose} />}
      <div className="navContent">
        <div className="navLeft">
          <div className="logoBox">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <nav className="navCenter">
          <ul className="nav-links">
            <li className="hvr-u-left">Marketplace</li>
            <li className="hvr-u-left">Resources</li>
            <li className="hvr-u-left">Profile</li>
          </ul>
        </nav>
        <nav className="navRight">
          <div className="navIcons">
            <img
              className="icon-act"
              src={Search}
              alt="search"
              onClick={() => setSBox(!sBox)}
            />
            <img src={Line} alt="line" />
            <img
              className="icon-act"
              src={dark === 'true' ? Sun : Moon}
              alt="moon"
              onClick={handleMode}
            />
          </div>
          <div className="navBtns">
            <button>Get Started</button>
            <button>Connect Wallet</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavWeb

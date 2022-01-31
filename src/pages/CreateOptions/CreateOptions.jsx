import { useState, useEffect, useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import AImg from '../../images/utils/back.png'
//import arrow from '../../images/utils/arrow.svg'
import Single from '../../images/others/single.svg'
import Select from '../../images/icons/select.svg'

import './CreateOptions.scss'
import '../../components/Select/Select.scss'

//import Select from '../../components/Select/Select'

const CreateOptions = () => {
  const [option, setOption] = useState('')
  useEffect(() => {
    const show = () => {
      let cs = document.querySelector('.cs-container')
      cs.onclick = function () {
        cs.classList.toggle('active')
      }
    }
    show()
  }, [option])
  const [modeState] = useContext(ModeContext)
  const dark = modeState.dark
  return (
    <div>
      <Nav />
      <section
        className={`${
          dark === 'true' ? 'optionsSec-dark' : 'optionsSec-light'
        }`}
      >
        <div className="optionsContent">
          <div className="optionsImg">
            <img src={AImg} alt="afen" />
          </div>
          <div className="optionsBody">
            <div className="optBody">
              <h1>Create Collectible</h1>
              <p>
                Select "Single" to create one unique collectible or "Multiple"
                to create more than one of the same item
              </p>
            </div>
            <div className="optInput">
              <div className="cs-container">
                <input
                  type="text"
                  value={option}
                  className="textBox"
                  placeholder="Select"
                  readOnly
                />
                <img className="circle-s" src={Select} alt="select" />
                <div className="cs-option animate__animated animate__fadeInUp animate__faster">
                  <div onClick={() => setOption('Single')}>Single</div>
                  <div onClick={() => setOption('Multiple')}>Multiple</div>
                </div>
              </div>
            </div>
            {option === 'Single' && (
              <motion.div
                className="optSingle"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5,
                    y: -30,
                  },
                  visible: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0,
                      duration: 0.2,
                    },
                  },
                }}
              >
                <p>
                  A “Single” collectible gives you the opportunity to have a one
                  of a kind collectible.
                </p>
                <img src={Single} alt="single" />
                <Link className="cr-btn" to="/single">
                  <button>Create</button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateOptions

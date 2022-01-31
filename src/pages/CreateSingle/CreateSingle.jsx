import { useContext, useState, useEffect, useRef } from 'react'
import { ModeContext } from '../../context/ModeContext'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import TextInput from '../../components/TextInput/TextInput'

import arrow from '../../images/icons/arrow.svg'
import arrow2 from '../../images/icons/arr-white.svg'
//import nft from '../../images/others/nft.png'

import './CreateSingle.scss'
import Footer from '../../components/Footer/Footer'

const CreateSingle = () => {
  const [modeState] = useContext(ModeContext)
  const dark = modeState.dark
  const [userInput, setUserInput] = useState({
    market: '',
    price: '',
    royalties: '',
    title: '',
    description: '',
  })
  const [file, setFile] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const inputHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    })
  }
  const fileBox = useRef()
  // const handleFile = (e) => {
  //   setFile(e.target.files[0])
  //   // fileBox.classList.add('b-outline')
  //   const fB = document.getElementById('fB')
  //   fB.classList.toggle('b-outline')
  //   fB.onclick = function () {
  //     fB.classList.toggle('b-outline')
  //   }
  // }
  return (
    <div>
      <Nav />
      <section
        className={`${dark === 'true' ? 'singleSec-dark' : 'singleSec-light'}`}
      >
        <div className="singleContent">
          <div className="sg-top">
            <Link to="/">
              <div className="backBox">
                <img src={dark === 'true' ? arrow2 : arrow} alt="back" />
                <p>Go back</p>
              </div>
            </Link>

            <h1>Create Single Collection</h1>
          </div>
          <div className="sg-body">
            <div className="sg-form">
              <div className="fileBox">
                <p>UPLOAD FILE</p>
                <div className="fileBoxContent" id="fB">
                  <p>JPG, GIF, WEBP, MAX 64MB</p>
                  <div className="fileBtnS" ref={fileBox}>
                    <p>CHOOSE FILE</p>
                  </div>
                  <input
                    type="file"
                    accept=".png, .jpeg, .jpg, .gif, .webp"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="inputBox">
                <p>VIEW OWN MARKETPLACE</p>
                <TextInput
                  inputName="market"
                  value={userInput.market}
                  inputHandler={inputHandler}
                />
              </div>
              <div className="inputBox">
                <p>PRICE</p>
                <TextInput
                  inputName="price"
                  value={userInput.price}
                  inputHandler={inputHandler}
                  holder="Enter price for one piece"
                />
              </div>

              <div className="inputBox">
                <p>ROYALTIES</p>
                <TextInput
                  inputName="royalties"
                  value={userInput.royalties}
                  inputHandler={inputHandler}
                  holder="Suggested: 0%, 10%, 20%. Maximum is 20%"
                />
              </div>
              <div className="inputBox">
                <p>TITLE</p>
                <TextInput
                  inputName="title"
                  value={userInput.title}
                  inputHandler={inputHandler}
                  holder="e.g “The Masterpiece”"
                />
              </div>
              <div className="inputBox">
                <p>DESCRIPTION</p>
                <TextInput
                  inputName="description"
                  value={userInput.description}
                  inputHandler={inputHandler}
                  holder="e.g “It is more than what the eye meet”"
                />
              </div>
              <div className="sg-btn">
                <button>Create NFT</button>
              </div>
            </div>

            <div className="sg-imgBox">
              <p>PREVIEW</p>
              {/* <img src={nft} alt="nft" /> */}
              <div className="fileContainer">
                {file && <img src={URL.createObjectURL(file)} alt="file" />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default CreateSingle

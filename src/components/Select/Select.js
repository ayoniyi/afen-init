import { useState, useEffect } from 'react'
import './Select.scss'

const Select = (props) => {
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

  return (
    <div className="cs-container">
      <input
        type="text"
        value={option}
        className="textBox"
        placeholder="Select"
        readOnly
      />
      <div className="cs-option">
        <div onClick={() => setOption('Single')}>Single</div>
        <div onClick={() => setOption('Multiple')}>Multiple</div>
      </div>
    </div>
  )
}

export default Select

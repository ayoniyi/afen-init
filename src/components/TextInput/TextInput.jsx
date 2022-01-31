import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'
import './TextInput.scss'

const TextInput = (props) => {
  const [modeState] = useContext(ModeContext)
  const dark = modeState.dark
  return (
    <div className="textInput">
      <input
        className={`${dark === 'true' ? 'inp-dark' : ''}`}
        type="text"
        name={props.inputName}
        placeholder={props.holder}
        value={props.value}
        onChange={props.inputHandler}
        autoComplete="off"
        //minLength="3"
      />
    </div>
  )
}

export default TextInput

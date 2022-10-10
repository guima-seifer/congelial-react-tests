import { useState } from 'react'
import { ToggleButton } from './components/ToggleButton'

export const BinaryCalculator = ({ numberOfButtons }) => {
  const [buttonStates, setButtonStates] = useState(
    Array(numberOfButtons).fill(false)
  )

  const getBinarySum = (binaryStates) => {
    return binaryStates
      .map((isOn, i) => (isOn ? 1 : 0) * Math.pow(2, i))
      .reduce((sum, x) => sum + x)
  }

  const toggleButtonState = buttonIndex => {
    const statesCopy = [...buttonStates]
    statesCopy[buttonIndex] = !statesCopy[buttonIndex]

    setButtonStates(statesCopy)
  }

  return (
    <>
      <h3>Total is: {getBinarySum(buttonStates)}</h3>

      {buttonStates.map((buttonState, i) => (
        <ToggleButton
          onText='1'
          offText='0'
          key={i}
          isOn={buttonState}
          onToggle={() => toggleButtonState(i)}
        />
      ))}
    </>
  )
}

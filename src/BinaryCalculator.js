import { useState } from 'react'
import { ToggleButton } from './components/ToggleButton'

export const BinaryCalculator = ({ numberOfButtons }) => {
  const [buttonStates, setButtonStates] = useState(
    Array(numberOfButtons).fill(false)
  )

  const getBinarySum = (binaryStates) => {
    return binaryStates
      .map((isOn, i) => (isOn ? 1 : 0) * Math.pow(2, i))
      //The reduce() function reduces the array values into a single value. 
      //never modified the original array. 
      //operates the array values from left to right. 
      //The resultant will be stored in a variable called the accumulator.
      //If suppose array can not contain any values then reduce() function will not be executed.
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
      )).reverse()}
    </>
  )
}

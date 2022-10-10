export const ToggleButton = ({ onText, offText, isOn, onToggle }) => {
  return <button onClick={onToggle}>{isOn ? onText : offText}</button>
}

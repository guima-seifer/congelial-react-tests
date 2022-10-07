export const ToggleButton = ({onText, offText, isOn}) => {
    return (
        <button>{isOn ? onText : offText}</button>
    )
}
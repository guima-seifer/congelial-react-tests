import { ToggleButton } from './Components/ToggleButton';

export const BinaryCalculator = ({ numberOfButtons }) => {
    return (
        <>
            <h3>Total is: X</h3>

            {Array(numberOfButtons).fill().map((_, i) => (
                <ToggleButton onText="1" offText="0" isOn key={i} />
            ))}
        </>
    )
}
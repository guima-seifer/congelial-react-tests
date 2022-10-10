import { ToggleButton } from './Components/ToggleButton';

export const BinaryCalculator = ({ numberOfButtons }) => {
    return (
        <>
            <h3>Total is: 0</h3>

            {Array(numberOfButtons).fill().map((_, i) => (
                <ToggleButton onText="1" offText="0" key={i} />
            ))}
        </>
    )
}
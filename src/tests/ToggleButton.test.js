import { render, screen } from '@testing-library/react'
import { ToggleButton } from '../Components/ToggleButton'

test('Displays "on" text when button is on', () => {
    render(<ToggleButton onText="I'm on!" offText="I'm off" isOn/>)

    //after component is rendered it´s expected to text be in the DOM
    expect(screen.getByText("I'm on!")).toBeInTheDocument() 
    expect(screen.queryByText("I'm off!")).not.toBeInTheDocument() 

})
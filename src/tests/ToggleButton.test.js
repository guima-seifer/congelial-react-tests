import { render, screen, fireEvent } from '@testing-library/react'
import { ToggleButton } from '../Components/ToggleButton'

test('Displays "on" text when button is on', () => {
  render(<ToggleButton onText="I'm on!" offText="I'm off" isOn />)

  //after component is rendered it´s expected to text be in the DOM
  expect(screen.getByText("I'm on!")).toBeInTheDocument()
  expect(screen.queryByText("I'm off!")).not.toBeInTheDocument()
})

test('Displays "off" text when button is off', () => {
  render(<ToggleButton onText="I'm on!" offText="I'm off!" isOn={false} />)

  //after component is rendered it´s expected to text be in the DOM
  expect(screen.queryByText("I'm on!")).not.toBeInTheDocument()
  expect(screen.getByText("I'm off!")).toBeInTheDocument()
})
test('Calls the onToggle function prop when button is clicked', () => {
  const mockFn = jest.fn()
  render(<ToggleButton onText="I'm on!" offText="I'm off!" onToggle={mockFn} />)
  // eslint-disable-next-line no-undef
  fireEvent.click(screen.getByRole('button'))
  expect(mockFn).toHaveBeenCalled()
})

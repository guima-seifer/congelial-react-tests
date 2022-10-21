//role-based testing
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { BinaryCalculator } from '../BinaryCalculator'

test('Displays the correct number of buttons according to the "numberOfButtons prop', () => {
  render(<BinaryCalculator numberOfButtons={7} />)

  let buttons = screen.queryAllByRole('button')
  expect(buttons.length).toEqual(7)

  cleanup()

  render(<BinaryCalculator numberOfButtons={11} />)

  buttons = screen.queryAllByRole('button')
  expect(buttons.length).toEqual(11)
})

test('All buttons start off with text 0', () => {
  render(<BinaryCalculator numberOfButtons={5} />)

  const buttons = screen.getAllByRole('button')

  buttons.forEach(button => {
    expect(button).toHaveTextContent('0')
  })
})

test('Starting sum is 0', () => {
  render(<BinaryCalculator numberOfButtons={5} />)

  const sumHeading = screen.getByRole('heading')
  expect(sumHeading).toHaveTextContent(/total is: 0/i)

})

test('Button state changes to "1" after it´s clicked', () => {
  render(<BinaryCalculator numberOfButtons={5} />)

  const firstButton = screen.getAllByRole('button')[0]
  expect(firstButton).toHaveTextContent('0')

  fireEvent.click(firstButton)
  expect(firstButton).toHaveTextContent('1')
})

test('Button state changes to "0" after it´s clicked twice', () => {
  render(<BinaryCalculator numberOfButtons={5} />)

  const firstButton = screen.getAllByRole('button')[0]
  fireEvent.click(firstButton)
  expect(firstButton).toHaveTextContent('1')

  fireEvent.click(firstButton)
  expect(firstButton).toHaveTextContent('0')
})
//role-based testing
import { cleanup, render, screen } from '@testing-library/react'
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

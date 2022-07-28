import { render, screen } from '@testing-library/react'
import { ZipCode } from '..'

export default function mountComponent() {
  render(<ZipCode />)
  const onSearch = jest.fn()
  const input = screen.getByLabelText('zipIput')
  const button = screen.getByRole('button', { name: /Buscar/i })
  
  return { input, button, onSearch }
}

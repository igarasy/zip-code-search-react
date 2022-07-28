import '@testing-library/jest-dom/extend-expect'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mountComponent from './_testUtils/helpers'

describe('Testar a busca de CEP', () => {
  it('Deve começar vazio', () => {
    const component = mountComponent()
    expect(component.input).toHaveTextContent('')
  })

  it('Ao digitar um CEP, deve somar os números dele', () => {
    const component = mountComponent()
    userEvent.type(component.input, '07500000')
    userEvent.click(component.button)
    const sumResult = screen.getByLabelText('zipcodeSum')
    expect(sumResult).toHaveTextContent('12')
  })

  it('Caso não tenha bairro, mostrar a mensagem "Bairro não localizado"', async () => {
    const component = mountComponent()
    userEvent.type(component.input, '07500000')
    userEvent.click(component.button)
    await waitFor(() => {
      expect(component.district).toHaveTextContent('Bairro não localizado')
    })
  })
  //busca o campo, digitar o cep e verificar se aparece a soma na tela
})

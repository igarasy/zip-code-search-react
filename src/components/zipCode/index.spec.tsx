import '@testing-library/jest-dom/extend-expect';
import mountComponent from './_testUtils/helpers'

describe('Testar a busca de CEP', () => {
  it('Deve começar vazio', () => {
    const component = mountComponent()
    expect(component.input).toHaveTextContent('')
  })

  //busca o campo, digitar o cep e verificar se aparece a soma na tela
})

import * as React from 'react'
import { useLocalForm } from './useLocalForm'
import { LocalFormValues } from './useLocalForm/types'
import * as S from './styled'

export interface SearchFildersProps {
  onSearch: (value: LocalFormValues) => void
}

export function SearchFilders(props: SearchFildersProps) {
  const form = useLocalForm({
    onSubmit: props.onSearch,
  })

  const handleClick = () => {
    form.submitForm()
    
  }


  return (
    <>
      <S.Wrapper>
        <input
          name="term"
          aria-label="zipIput"
          value={form.values.term}
          onChange={form.handleChange}
        />

        <S.Button onClick={handleClick}>Buscar</S.Button>
        {form.errors.term && <S.Paragraph>{form.errors.term}</S.Paragraph>}
      </S.Wrapper>
    </>
  )
}

import * as React from 'react'
import { useLocalForm } from './useLocalForm'
import { LocalFormValues } from './useLocalForm/types'
import * as S from './styled'
import { useCalculateZipCode } from '../hooks/useCalculateZipCode'

export interface SearchFildersProps {
  onSearch: (value: LocalFormValues) => void
}

export function SearchFilders(props: SearchFildersProps) {
  const form = useLocalForm({
    onSubmit: props.onSearch,
  })

  const { calculateZipCode,zipCodeSum } = useCalculateZipCode(form.values.term)
  const handleClick = () => {
    form.submitForm()
    calculateZipCode()
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
        {zipCodeSum === 0 ? null : <S.Paragraph aria-label='zipcodeSum'>Soma: {zipCodeSum}</S.Paragraph>}
      </S.Wrapper>
    </>
  )
}

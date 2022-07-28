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

  const sum = useCalculateZipCode()
  const handleClick = () => {
    form.submitForm()
    sum.calculateZipCode(form.values.term)
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
        {sum.zipCodeSum === 0 ? null : <S.Paragraph>Soma: {sum.zipCodeSum}</S.Paragraph>}
      </S.Wrapper>
    </>
  )
}

import * as React from 'react'
import { DtoZipCode } from '../../../services/ws/dtoZipCode'
import * as S from './styled'
import { useCalculateZipCode } from '../hooks/useCalculateZipCode'

export interface SearchResultProps {
  items?: DtoZipCode
}

export function SearchResult(props: SearchResultProps) {
  return (
    <S.Wrapper>
     <div>
     {props.items?.erro  && <p>Digite um CEP válido</p>}
      <h3>Logradouro</h3>
      <p>{props.items?.logradouro === '' ? 'Logradouro não localizado' :props.items?.logradouro }</p>
     </div>
     <div>
      <h3>Cidade</h3>
      <p>{props.items?.localidade}</p>
     </div>
     <div>
      <h3>Bairro</h3>
      <p aria-label='district'>{props.items?.bairro === '' ? 'Bairro não localizado' :props.items?.logradouro }</p>
     </div>
    </S.Wrapper>
  )
}
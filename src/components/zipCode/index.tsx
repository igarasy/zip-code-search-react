import * as React from 'react'

import { SearchFilders } from './zipCodeField'
import { SearchResult } from './searchResult'

import { useSearchService } from './hooks/useSearchService'



export function ZipCode() {
  const service = useSearchService()
  console.log(service.data)

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div>
      <SearchFilders 
        onSearch={(values) => service.search(values.term) }
      />
      <SearchResult 
        items={ service.data } 
      />
    </div>
  )
}
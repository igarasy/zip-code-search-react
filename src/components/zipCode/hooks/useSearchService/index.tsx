import { AxiosError } from 'axios'
import * as React from 'react'
import { SearchService } from '../../../../services/ws'
import { DtoZipCode } from '../../../../services/ws/dtoZipCode'

export function useSearchService() {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<DtoZipCode>()
  const [error, setErrors] = React.useState<AxiosError>()

  const search = React.useCallback(async (zipCodeNumber: string) => { 
    try {
      setErrors(undefined)
      setLoading(true)
      const response = await SearchService.searchUser(zipCodeNumber)
      setData(response)
    } catch (error) {
      setErrors(error as AxiosError)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    data,
    error,
    search
  }
}
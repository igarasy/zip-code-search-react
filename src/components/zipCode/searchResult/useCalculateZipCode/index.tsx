import React from 'react'

export const useCalculateZipCode = (zipCode?: string) => {
  const calculateZipCode = React.useCallback((zipCode?: string) => {
    if (!zipCode) return null
    if (Number(zipCode) === 0) {
      return 0
    }
    const sumOfZipCode = zipCode.replace("-","").split('').reduce((acc, curr) => {
      return acc + Number(curr)
    }, 0)
    return sumOfZipCode
  }, [])

  const value = React.useMemo(
    () => calculateZipCode(zipCode),
    [zipCode, calculateZipCode],
  )
  
  return {
    value,
  }
}

import React from 'react'

export const useCalculateZipCode = () => {
  const [zipCodeSum, setZipCodeSum] = React.useState(0)

  const calculateZipCode = React.useCallback((zipCode: string) => {
    const sumOfZipCode = zipCode.split('').reduce((acc, curr) => {
      return acc + Number(curr)
    }, 0)
    setZipCodeSum(sumOfZipCode)
  }, [])
  console.log(zipCodeSum)

  return {
    calculateZipCode,
    zipCodeSum
  }
  
}

import React from 'react'

export const useCalculateZipCode = (zipCode: string) => {
  const [zipCodeSum, setZipCodeSum] = React.useState(0)

  const calculateZipCode = React.useCallback(() => {
    if(Number(zipCode) === 0){
      return setZipCodeSum(0)
    }
    const sumOfZipCode = zipCode.split('').reduce((acc, curr) => {
      return acc + Number(curr)
    }, 0)
    setZipCodeSum(sumOfZipCode)
  }, [zipCode])

 
 
  return {
    calculateZipCode,
    zipCodeSum
  }
  
}

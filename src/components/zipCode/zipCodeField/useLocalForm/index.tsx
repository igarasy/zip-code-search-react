import { useFormik } from 'formik'
import * as React from 'react'
import { LocalFormValues } from './types'
import { validationSchema } from './validations'

export interface UseLocalFormProps {
  onSubmit: (value: LocalFormValues) => void
}

export function useLocalForm(props: UseLocalFormProps) {

  const form = useFormik<LocalFormValues>({
    initialValues: {
      term: ''
    },
    validationSchema,
    onSubmit: props.onSubmit
  })
  
  return {
    ...form
  }
}
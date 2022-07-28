import * as yup from 'yup'

export const validationSchema = yup.object({
  term: yup
    .string()
    .required('O campo CEP é obrigatório')
    .max(8, 'CEP Muito Longo'),
})

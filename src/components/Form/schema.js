import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Por favor, ingrese un nombre'),
  email: yup.string().email('Por favor, ingrese un correo valido').required('Por favor, ingrese un correo'),
  phone: yup.string().required('Por favor, ingrese un telefono valido')
}).required()

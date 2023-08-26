import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('El nombre es requerido.'),
  email: yup.string().email('Ingrese un correo electrónico valido').required('El correo electrónico es requerido.'),
  phone: yup.string().required('El número de telefono es requerido.').min(10, 'El número de telefono debe tener 10 digitos.').max(14, 'El número de telefono debe tener 10 digitos.')
}).required()

export const INIT_VALUES = {
  name: '',
  email: '',
  phone: ''
}

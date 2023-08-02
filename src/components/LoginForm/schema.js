import * as yup from 'yup'

export const schema = yup.object({
  username: yup.string().required('El usuario es requerido.'),
  password: yup.string().required('La contraseña es requerida.')
}).required()

export const INIT_VALUES = {
  username: '',
  password: ''
}

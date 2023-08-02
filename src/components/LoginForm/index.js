'use client'
import Input from '@/components/Input'
import { INIT_VALUES, schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import Button from '@/components/Button'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { ...INIT_VALUES },
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values) => {
    try {
      setLoading(true)
      const { error } = await signIn('credentials', { redirect: false, ...values })
      if (error) {
        return toast.error('Usuario o contraseña incorrectos.')
      }
      router.replace('/admin')
    } catch (e) {
      toast.error('Parece que tuvimos un problema para registar tus datos, por favor intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg m-auto flex flex-col gap-10 w-full border rounded-md py-10 px-5 shadow-sm font-sans'>
      <div>
        <h2 className='text-center text-4xl font-bold'>Sadhana Essential</h2>
        <p className='text-center text-gray-600 text-xl'>Bienvenido nuevamente!</p>
        <p className='text-center font-thin text-gray-600'>Inicie sesión para continuar</p>
      </div>
      <div>
        <input
          {...register('username')}
          type='text'
          id='username'
          placeholder='Usuario'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        />
        {Boolean(errors?.username?.message) && <p className='text-sm text-red-500 font-bold font-sans'>*{errors?.username?.message}</p>}
      </div>
      <div>
        <input
          {...register('password')}
          type='password'
          id='password'
          placeholder='Contraseña'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        />
        {Boolean(errors?.password?.message) && <p className='text-sm text-red-500 font-bold font-sans'>*{errors?.password?.message}</p>}
      </div>
      <button
        disabled={loading}
        type='submit'
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 disabled:opacity-75'
      >
        {loading ? 'Cargando ...' : 'Iniciar sesión'}
      </button>
    </form>
  )
}

export default LoginForm

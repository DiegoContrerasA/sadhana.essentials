'use client'
import Input from '@/components/Input'
import { INIT_VALUES, schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import Button from '@/components/Button'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
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
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg m-auto flex flex-col gap-10 w-full'>
      <ToastContainer theme='colored' />
      <Input
        {...register('username')}
        label='Usuario'
        id='username'
        placeholder='Usuario'
        error={errors?.username?.message}
      />
      <Input
        {...register('password')}
        label='Contraseña'
        id='password'
        placeholder='Contraseña'
        error={errors?.password?.message}
      />
      <Button type='submit' className='bg-[#4f2e55]' disabled={loading} loading={loading}>
        Registrarme
      </Button>
    </form>
  )
}

export default LoginForm

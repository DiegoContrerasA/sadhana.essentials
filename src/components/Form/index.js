'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import Input from '../Input'
import { INIT_VALUES, schema } from './schema'
import { createUser } from '@/services/users'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { ...INIT_VALUES },
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values) => {
    setLoading(true)
    createUser(values).then(() => {
      router.push('/thank-you')
    })
      .catch((e) => {
        toast.error(e.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg m-auto flex flex-col gap-10'>
      <Input
        {...register('name')}
        label='Nombre'
        id='name'
        placeholder='Ingrese su nombre'
        error={errors?.name?.message}
      />
      <Input
        {...register('email')}
        label='Correo electrónico'
        id='email'
        placeholder='Ingrese su correo electrónico'
        error={errors?.email?.message}
      />
      <Input
        {...register('phone')}
        label='Número telefono'
        id='phone'
        placeholder='Ingrese su número de telefono' type='number'
        error={errors?.phone?.message}
      />
      <Button type='submit' className='bg-[#4f2e55]' disabled={loading} loading={loading}>
        Registrarme
      </Button>
    </form>
  )
}

export default Form

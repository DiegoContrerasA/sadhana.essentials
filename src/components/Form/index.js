'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import Input from '../Input'
import { INIT_VALUES, schema } from './schema'
import { createUser } from '@/services/users'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { ...INIT_VALUES },
    resolver: yupResolver(schema)
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values) => {
    setLoading(true)
    createUser(values).then(() => {
      toast.success(`${values.name} Gracias por registrarte a la MasterClass, pronto recibirás más información y espero la disfrutes. ¡No te la pierdas!`)
      reset({ ...INIT_VALUES })
    })
      .catch((e) => {
        toast.error(e.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg m-auto flex flex-col gap-10'>
      <ToastContainer theme='colored' />
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

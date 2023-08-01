'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import Input from '../Input'
import { schema } from './schema'

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (values) => {
    console.log({ values })
  }

  console.log({ errors })

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
        label='Correo electronico'
        id='email'
        placeholder='Ingrese su correo electronico'
        error={errors?.email?.message}
      />
      <Input
        {...register('phone')}
        label='Número telefono'
        id='phone'
        placeholder='Ingrese su número de telefono' type='number'
        error={errors?.phone?.message}
      />
      <Button type='submit' className='bg-[#4f2e55]'>
        Registrarme
      </Button>
    </form>
  )
}

export default Form

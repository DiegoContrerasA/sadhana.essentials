import { sendEmail } from '@/services/users'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useSendEmail = () => {
  const [loading, setLoading] = useState(null)
  const router = useRouter()

  const send = useCallback(async (id, path) => {
    try {
      setLoading(`${id}-${path}`)
      await sendEmail(id, path)
      toast.success('Los correos se han enviado correctamente.')
      router.refresh()
    } catch (e) {
      toast.error('Parece que tuvimos un problema para registar tus datos, por favor intenta nuevamente.')
    } finally {
      setLoading(null)
    }
  }, [])

  return { loading, send }
}

export default useSendEmail

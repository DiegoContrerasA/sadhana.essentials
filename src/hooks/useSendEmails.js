import { sendEmails } from '@/services/users'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useSendEmails = () => {
  const [loading, setLoading] = useState(null)
  const router = useRouter()

  const send = useCallback(async (path) => {
    try {
      setLoading(path)
      await sendEmails(path)
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

export default useSendEmails

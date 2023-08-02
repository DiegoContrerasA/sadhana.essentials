import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth'
  },
  callbacks: {
    authorized ({ req, token }) {
      const pathName = req.nextUrl.pathname

      console.log({ pathName, token })

      if (pathName.includes('admin') && !token) {
        return false
      }
      return true
    }
  }
})

export const config = {
  matcher: [
    '/admin'
  ]
}

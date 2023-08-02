import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth'
  },
  callbacks: {
    authorized ({ req, token }) {
      const pathName = req.nextUrl.pathname

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

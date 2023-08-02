import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize ({ username, password }) {
        const { USERNAME, PASSWORD } = process.env
        return username === USERNAME && password === PASSWORD ? { id: '1', name: username } : null
      }
    })
  ],
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth'

  }
}

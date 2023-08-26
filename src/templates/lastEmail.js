export const LastEmailTemplate = ({ name, token }) => `
<h1>Hola, ${name} pronto estaremos en vivo
<a href=${process.env.NEXTAUTH_URL}/video/${token}>
ver envivo
</a>
</h1>`

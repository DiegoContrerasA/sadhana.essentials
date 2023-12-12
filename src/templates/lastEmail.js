export const LastEmailTemplate = ({ name, token }) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body
    style="background-color: #e4dbe5; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #6d4575;">
    <table style="max-width: 700px; margin: auto; background-color:#e7e0e8 ;">
        <tr>
            <td>
                <center>
                    <img src="${process.env.NEXTAUTH_URL}/images/email.jpg" alt="mujer en pose de yoga"
                        style="text-align: center; max-width: 100%;" />
                </center>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <h1 style="text-align: center;">¡Hola ${name}!</h1>
                <p style="text-align: center; margin-bottom: 30px;">¡Estoy muy feliz por toda la gente que se está
                    uniendo Mi Masterclass <strong>"Desde la base juntos crecemos"</strong></p>
                <p style="text-align: justify;">Quiero decirles a todos: <strong>¡MUCHAS GRACIAS!</strong>
                </p>

            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <p>Sin embargo, también he recibido muchos mensajes de personas que quieren ser parte de la Masterclass,
                    pero que no pudieron ingresar. Por lo cual acá te dejo la Masterclass solo estará disponible por
                    unas horas:
                </p>
                <center>
                    <a style="
                    display: inline-block;
                    background-color: #9570a2; 
                    border-radius: 5px;
                    padding: 10px 20px;
                    color: white; 
                    text-decoration: none;
                    max-width: 180px;
                    text-transform: uppercase;
                    text-align: center;" href="${process.env.NEXTAUTH_URL}/video/${token}">
                        QUIERO VER LA MASTERCLASS
                    </a>
                </center>
            </td>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <p style="margin-top: 60px;margin-bottom: 100px; text-align: center;">Espero que puedas aprender mucho
                    con este regalo que tengo para ti, fue creado con mucho ❤️ por Andrea Cardona, un abrazo y siguenos
                    en <a style="text-decoration: none; color: #6d4575;"
                        href="https://www.instagram.com/sadhana_essentials"><strong>Instagram</strong></a></p>
            </td>
        </tr>
    </table>
</body>

</html>`

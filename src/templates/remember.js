export const RememberTemplate = ({ name }) => `<!DOCTYPE html>
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
                    <img src="${process.env.NEXTAUTH_URL}/images/email.jpg" alt="mujer en pose de yoga" style="text-align: center; max-width: 100%;" />
                </center>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <h1 style="text-align: center;">¡Hola ${name}!</h1>
                <p style="text-align: center; margin-bottom: 30px;">Vengo rápidamente para recordarte que mañana sábado, 10 de diciembre, es la Masterclass de yoga <strong>"Desde las bases juntos crecemos"</strong>.</p>
                <p style="text-align: justify;">Voy a enseñarte las bases del yoga a través de posturas básicas para que puedas crear tus propias secuencias. Esta clase es para todas las personas a las que les gusta el yoga, no importa si son principiantes o no.
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <p style="margin-bottom: 30px;"><strong>FECHA:</strong> Domingo 16 de Diciembre a las 10 AM • COL /
                    PER / - 11 AM • MIA / NYC - 9 AM • MEX</p>
                <center>
                    <h2>NOS VEMOS EN CLASE</h2>
                </center>
            </td>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
               <p style="margin-top: 60px;margin-bottom: 100px; text-align: center;">Hecho con mucho ❤️ por Andrea Cardona, siguenos en <a style="text-decoration: none; color: #6d4575;"
                href="https://www.instagram.com/sadhana_essentials"><strong>Instagram</strong></a></p>
            </td>
        </tr>
    </table>
</body>
</html>`

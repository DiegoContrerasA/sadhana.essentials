export const previousTemplate = ({ name }) => `<!DOCTYPE html>
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
                <p style="text-align: center; margin-bottom: 30px;">¡En menos de 1 hora empezará mi Masterclass de yoga, <strong style="font-size: 18px;">"Desde las bases juntos crecemos"</strong> y me gustaría que me acompañaras! Vas a aprender las bases de yoga como lo son postura básicas, saludos al sol y a través de ellos crear tu propia secuencia.
                    Pronto recibirás el enlace donde nos podremos encontrar. </p>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <center>
                    <h2>NOS VEMOS EN MENOS DE 1 HORA EN CLASE</h2>
                </center>
            </td>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
               <p style="margin-top: 60px;margin-bottom: 100px; text-align: center;"> Hecho con mucho ❤️ por Andrea Cardona, siguenos en <a style="text-decoration: none; color: #6d4575;"
                href="https://www.instagram.com/sadhana_essentials"><strong>Instagram</strong></a></p>
            </td>
        </tr>
    </table>
</body>
</html>`

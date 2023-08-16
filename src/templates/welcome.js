export const WelcomeTemplate = ({ name }) => `
<!DOCTYPE html>
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
                <p style="text-align: center;">¡Qué rico poder contar contigo!</p>
                <p style="text-align: justify;">Me siento muy entusiasmada porque he estado dedicando los últimos meses
                    a pensar
                    en cómo crear algo especial para este día. Tu registro me alegra mucho. Aquí
                    te presento los pasos importantes que debes seguir para asegurarte tu lugar en
                    esta emocionante Masterclass que vamos a tener:
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
                <p style="margin-bottom: 30px;"><strong>FECHA:</strong> Miércoles 20 de Septiembre a las 7 PM • COL /
                    PER / - 8 PM • MIA / NYC - 6 PM • MEX</p>

                <p><strong>PASO 1:</strong> Agenda en tu calendario:</p>
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
                    text-align: center;"
                        href="${process.env.GOOGLE_EVENT}">
                        Agregar evento a mi calendario
                    </a>
                </center>

                <p style="margin-top: 60px;">
                    <strong>PASO 2:</strong> Si quieres o crees que una amiga, un familiar o un conocido quiera asistir
                    también le puedes
                    compartir el link de registro sin ningún problema y sin ningún costo.
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
                        text-align: center;"
                        href="${process.env.NEXTAUTH_URL}/#form">Invitar un
                        amigo o
                        familiar</a>
                </center>
            </td>
        <tr>
            <td style="padding-left: 20px; padding-right: 20px;">
               <p style="margin-top: 60px;margin-bottom: 100px; text-align: center;"> Nos vemos en clase, un abrazo,con mucho ❤️ por Andrea Cardona, siguenos en <a style="text-decoration: none; color: #6d4575;"
                href="https://www.instagram.com/sadhana_essentials"><strong>Instagram</strong></a></p>
            </td>
        </tr>
    </table>
</body>

</html>

<!---->
`

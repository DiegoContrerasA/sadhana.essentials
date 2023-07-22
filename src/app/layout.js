import './globals.css'

export const metadata = {
  title: 'Sadhana Essentials',
  description: '🤰🏻Yoga prenatal - 🤱🏼Yoga posparto - 🧘🏼‍♀️Tecnicas hipopresivas - 🕉Clases de vinyasa yoga grupales y personalizadas - 💆🏻‍♀️Yoga y masaje Facial'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

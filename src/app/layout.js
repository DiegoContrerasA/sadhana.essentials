import './globals.css'
import { Architects_Daughter } from 'next/font/google'

const inter = Architects_Daughter({ subsets: ['latin'], weight: ['400'],})

export const metadata = {
  title: 'Sadhana Essentials',
  description: '🤰🏻Yoga prenatal - 🤱🏼Yoga posparto - 🧘🏼‍♀️Tecnicas hipopresivas - 🕉Clases de vinyasa yoga grupales y personalizadas - 💆🏻‍♀️Yoga y masaje Facial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'create todo app',
  description: 'generated by ovalle',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const res = await fetch('http://localhost:3000/api/tasks')
    const data = await res.json()
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

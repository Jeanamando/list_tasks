import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'

const FiraSans = Fira_Sans({ subsets: ['latin'], weight:'400' })

export const metadata: Metadata = {
  title: 'To Do List',
  description: 'list tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={FiraSans.className}>{children}</body>
    </html>
  )
}

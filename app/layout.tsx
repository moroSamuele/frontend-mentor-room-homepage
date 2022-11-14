import './globals.css'

import { League_Spartan } from '@next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${leagueSpartan.className}`}>{children}</body>
    </html>
  )
}

import { Playfair_Display, Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  title: 'Royce White for U.S. Senate — Fearless for Minnesota',
  description:
    'Official campaign site for Royce White, U.S. Senate candidate for Minnesota. Rooted in God, Family, Country.',
}

const fontClass = [
  playfair.variable,
  inter.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
].join(' ')

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${fontClass} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

export default RootLayout

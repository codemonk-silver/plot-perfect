// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Providers } from './components/Providers'

// Use system fonts instead of Google Fonts
const fontSans = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
const fontSerif = 'Georgia, "Times New Roman", Times, serif'

export const metadata: Metadata = {
  title: 'ClassyTan | Premium Real Estate',
  description: 'Discover extraordinary living with our curated collection of premium properties worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-sans: ${fontSans};
            --font-serif: ${fontSerif};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
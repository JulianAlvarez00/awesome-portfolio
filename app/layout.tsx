import './globals.css'
import { Inter } from 'next/font/google'
import ThemeSwitcher from './components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  )
}
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import { Inter } from 'next/font/google'
// import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nextConcert App',
  description: 'Concert tracker app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Navigation /> */}
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  )
}

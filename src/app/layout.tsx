import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import localFont from 'next/font/local'
import { BrowserRouter } from 'react-router-dom';

const inter = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const myFont = localFont({
  src: 'Poppins-Bold.ttf',
  display: 'swap'
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeReactProvider>
      <html lang="en" className={inter.className}>
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          {children}
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
        </body>
      </html>
    </PrimeReactProvider>
  );
}

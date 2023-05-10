import Navbar from './components/navbar'
import './globals.css'
import Hero from './components/hero'
import Programs from './components/programs'
import Contact from './components/contact-us'
import Images from './components/image'
import Partners from './components/partners'
import PoweredBy from './components/poweredby'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}
      <Navbar/>
      <Hero/>
      <Programs/>
     <Images/>
     <Partners/>
     <Contact/>
      <PoweredBy/>
      </body>
     
    </html>
  )
}

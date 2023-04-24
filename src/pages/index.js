import Presentation from '@/components/Presentation'
import Head from 'next/head'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Florian Broeks | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
     </div>
  )
}

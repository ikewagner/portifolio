import Encryption from '@/components/main/Encryption'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850] w-[850] gap-20">
        <Hero/>
        <Skills />
        <Encryption/>
        <Footer/>
      </div>
    </main>
  )
}

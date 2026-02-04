import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sanan',
            jobTitle: 'Full Stack Developer',
            url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
            sameAs: [
              'https://github.com/sananbsd2021',
              'https://linkedin.com/in/yourusername',
            ],
            knowsAbout: ['MERN Stack', 'Next.js', 'React', 'MongoDB', 'Node.js', 'Web Development'],
            description: 'นักพัฒนา Full Stack ผู้เชี่ยวชาญ MERN Stack ที่พร้อมสร้างสรรค์ประสบการณ์ดิจิทัลที่เหนือระดับ',
          }),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}

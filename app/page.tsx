import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import Badge from '@/components/Badge';
import ContactForm from '@/components/ContactForm';
import CodeIllustration from '@/components/CodeIllustration';
import { DownloadIcon } from '@/components/Icons';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: 'eCommerce Mobile App',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vitejs'],
      imageUrl: '/images/project1.png',
      codeUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Dataset Landing Page',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologies: ['HTML', 'CSS'],
      imageUrl: '/images/project2.png',
      codeUrl: '#',
      demoUrl: '#',
    },
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Nodejs', 'npm', 
    'Reactjs', 'Nextjs', 'UI Design', 'SASS'
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background - Top Left (Light brown) */}
      <div className="absolute -left-56 top-0 w-[603px] h-[778px] pointer-events-none opacity-50">
        <div className="w-full h-full bg-[#FFF3E8] rotate-12 rounded-[200px]" style={{transformOrigin: 'top left'}} />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-10 relative z-10">
        <Navigation />
      </header>

      <main className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <section id="home" className="py-16 flex flex-col items-center justify-center gap-12 max-w-6xl mx-auto relative min-h-[600px]">
          {/* Hand Wave - positioned at top left edge */}
          <div className="absolute -left-60 -top-10 w-200 h-226 hidden xl:block animate-[wave_2s_ease-in-out_infinite] origin-bottom-right z-0">
            <Image 
              src="/images/left-hand.png"
              alt="Waving hand"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex-1 space-y-6 z-10 relative text-center max-w-3xl">
            <h1 className="text-5xl font-bold text-neutral-900 leading-tight">
              I&apos;m Hai Nguyen
            </h1>
            <p className="text-2xl font-bold text-neutral-900 leading-relaxed">
              Frontend Developer and Designer. I learn and teach everything about Web Technologies and Product Design.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <SocialLinks />
              <Button href="#" icon={<DownloadIcon />}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full min-h-[400px] hidden lg:block">
            <div className="absolute inset-0 -right-32 scale-75 origin-left opacity-40">
              <CodeIllustration />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-20 max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-brand-900 mb-12">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-[360px] mx-auto aspect-[9/11] bg-gradient-to-br from-orange-100 to-orange-50 rounded-[20px] overflow-hidden relative">
                <Image 
                  src="/images/me.jpg"
                  alt="Hai Nguyen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                Nice to meet you,
              </h3>
              <h2 className="text-4xl font-bold text-brand-900">
                I am Hai Nguyen
              </h2>
              <p className="text-neutral-900 leading-relaxed">
                Working full time in Angular, Typescript and SCSS, leading the team for revamping DotCMS administration system.
              </p>
              <p className="text-2xl text-brand-500">
                Full-stack Developer
              </p>
              <p className="text-neutral-900 leading-relaxed">
                Frontend is my true passion and I really enjoy the whole process of creating UIs, from the first brainstorming, wireframes, mockups, design, all the way until the final product.
              </p>
              <div className="pt-4">
                <div className="w-48 h-16 opacity-50">
                  <svg viewBox="0 0 200 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 50 Q 30 20, 60 40 T 120 50 Q 150 60, 180 40" stroke="#DD9C3C" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            My experience includes but not limited
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} label={skill} size="big" />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-6xl mx-auto relative overflow-visible">
          {/* Decorative Background - Bottom Right (Pink) */}
          <div className="absolute bottom-0 -right-40 w-[683px] h-[468px] pointer-events-none opacity-40 hidden lg:block" style={{transform: 'rotate(-15deg)', transformOrigin: 'center'}}>
            <div className="w-full h-full bg-[#FAD7D0] rounded-[200px]" />
          </div>

          {/* Pointing Hand - pointing to the form */}
          <div className="absolute bottom-30 -right-150 w-[750px] h-[600px] hidden xl:block z-20 pointer-events-none" style={{transform: 'rotate(-5deg)'}}>
            <Image 
              src="/images/right-hand.png"
              alt="Pointing hand"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-8">
                I&apos;m ready to talk...
              </h2>
            </div>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-neutral-100 mt-20">
          <p className="text-neutral-500">
            Made with ❤️ by Freddy Montes
          </p>
        </footer>
      </main>
    </div>
  );
}


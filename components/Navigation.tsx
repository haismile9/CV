import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex gap-6 justify-center md:justify-end">
      <Link href="#home" className="text-brand-900 font-bold hover:opacity-80 transition-opacity">
        Home
      </Link>
      <Link href="#portfolio" className="text-brand-900 hover:opacity-80 transition-opacity">
        Portfolio
      </Link>
      <Link href="#about" className="text-brand-900 hover:opacity-80 transition-opacity">
        About me
      </Link>
      <Link href="#contact" className="text-brand-900 hover:opacity-80 transition-opacity">
        Contact
      </Link>
    </nav>
  );
}

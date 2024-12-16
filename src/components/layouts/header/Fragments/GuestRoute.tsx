'use client'
import Navlink from "@/components/link/NavLink";
export default function GuestRoute({ className = '' }: any) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <nav className={"flex gap-8 mr-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full items-center " + className}>
      <button onClick={() => scrollToSection('beranda')} className="font-bold text-primary-900">Beranda</button>
      <button onClick={() => scrollToSection('aboutme')} className="font-bold text-primary-900">Tentang kami</button>
      <button onClick={() => scrollToSection('tutorial')} className="font-bold text-primary-900">Tutorial</button>
    </nav>
  )
}
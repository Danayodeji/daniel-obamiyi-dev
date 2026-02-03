import React, { useEffect } from 'react'
import { cn } from '@/lib/utils';
import { useState  } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'About', href: '#about' },
  { name: 'Now', href: '#now' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll)
    return () =>  window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn('fixed w-full z-40 transition-all duration-300',
      isScrolled ? 'py-3 bg-background/80 backdrop-blur-md inset-shadow-xs':'py-5'
     )} >
      <div className='container flex items-center justify-between gap-4'>
        <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>ADDO</span>-Dev
          </span>
        </a>

        {/* desktop nav items */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))} 
        </div>

        {/* mobile nav items */}
        <div className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-around',
          'transition-transform duration-300 lg:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-full'
        )}>
          <div className='flex flex-col items-center space-y-6 text-xl'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300'
              >
                {item.name}
              </a>
            ))} 
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden p-2 z-50 text-foreground hover:text-primary transition-colors border-none outline-none bg-transparent focus:outline-none focus:ring-0 active:ring-0 cursor-pointer relative flex items-center justify-center shrink-0'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar
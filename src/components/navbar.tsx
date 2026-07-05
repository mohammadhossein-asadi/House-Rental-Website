'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

interface NavbarProps {
  variant?: 'dark' | 'light';
}

const navLinks = [
  { label: 'Popular Places', href: '/' },
  { label: 'Online Packages', href: '/listing' },
];

export default function Navbar({ variant = 'dark' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isDark = variant === 'dark';
  const logoSrc = isDark ? '/images/logo.png' : '/images/logo-red.png';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-transparent dark:bg-surface-dark/80'
          : 'bg-white dark:bg-surface-dark shadow-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt="Staybnb Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-white dark:text-text-dark hover:text-white/80 dark:hover:text-white/80'
                      : 'text-text dark:text-text-dark hover:text-brand'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isDark ? 'bg-white' : 'bg-brand'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle variant={isDark ? 'dark' : 'light'} />

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-text hover:bg-gray-100 dark:text-white dark:hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-black dark:bg-surface-dark px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

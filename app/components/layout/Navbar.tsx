// components/layout/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Container } from './Container';
import { useUIStore } from '../../store/uiStore';
import { useAuthStore } from '../../store/authStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/Avatar";
import { 
  Menu, 
  X, 
  Search, 
  Heart, 
  User, 
  Moon, 
  Sun,
  Building2,
  LayoutDashboard,
  Settings,
  LogOut,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/agents', label: 'Agents' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen, darkMode, setDarkMode } = useUIStore();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  const isDark = mounted && (darkMode === 'dark' || 
    (darkMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));

  const handleLogout = () => {
    logout();
    router.push('/');
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent">
        <Container>
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-500 rounded-xl" />
              <span className="text-2xl font-serif font-bold text-white">ClassyTan</span>
            </div>
          </nav>
        </Container>
      </header>
    );
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-serif font-bold tracking-tight",
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            )}>
              ClassyTan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  pathname === link.href 
                    ? (scrolled ? 'text-amber-600 dark:text-amber-400' : 'text-amber-400')
                    : (scrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/80 hover:text-white')
                )}
              >
                {link.label}
                <span className={cn(
                  'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
                  pathname === link.href && (scrolled ? 'w-full bg-amber-600 dark:bg-amber-400' : 'w-full bg-amber-400'),
                  pathname !== link.href && (scrolled ? 'bg-amber-600 dark:bg-amber-400' : 'bg-amber-400')
                )} />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(isDark ? 'light' : 'dark')}
              className={cn(
                'p-2 rounded-full transition-colors',
                scrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400' : 'hover:bg-white/10 text-white'
              )}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Saved Properties - Only show when authenticated */}
            {isAuthenticated && (
              <Link href="/dashboard/saved">
                <button 
                  className={cn(
                    'p-2 rounded-full transition-colors relative',
                    scrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400' : 'hover:bg-white/10 text-white'
                  )}
                  aria-label="Saved properties"
                >
                  <Heart className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
                </button>
              </Link>
            )}

            {/* Auth Section */}
            {isAuthenticated ? (
              // Authenticated User Menu
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={scrolled ? 'ghost' : 'ghost'} 
                    size="sm"
                    className={cn(
                      "gap-2 pl-2 pr-3",
                      !scrolled && "bg-white/10 text-white hover:bg-white/20 hover:text-white border border-white/20",
                      scrolled && "hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <Avatar className="h-6 w-6 border border-amber-500">
                      <AvatarImage src={user?.avatar} />
                      <AvatarFallback className="bg-amber-100 text-amber-800 text-xs">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline font-medium">
                      {user?.firstName}
                    </span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/saved" className="cursor-pointer">
                      <Heart className="w-4 h-4 mr-2" />
                      Saved Properties
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/searches" className="cursor-pointer">
                      <Search className="w-4 h-4 mr-2" />
                      Saved Searches
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/tours" className="cursor-pointer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Tour Requests
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Guest Buttons
              <div className="flex items-center gap-2">
                <Link href="/llogin">
                  <Button 
                    variant={scrolled ? 'ghost' : 'ghost'} 
                    size="sm"
                    className={cn(
                      !scrolled && "text-white hover:bg-white/10 hover:text-white"
                    )}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button 
                    size="sm" 
                    className={cn(
                      "bg-amber-500 hover:bg-amber-600",
                      !scrolled && "shadow-lg shadow-amber-500/30"
                    )}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={scrolled ? 'text-slate-900 dark:text-white' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900 dark:text-white' : 'text-white'} />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t dark:border-slate-800"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    pathname === link.href 
                      ? 'text-amber-600 dark:text-amber-400' 
                      : 'text-slate-600 dark:text-slate-400'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              <hr className="border-slate-200 dark:border-slate-800" />
              
              {isAuthenticated ? (
                // Authenticated Mobile Menu
                <>
                  <div className="flex items-center gap-3 px-2 py-2">
                    <Avatar className="h-10 w-10 border-2 border-amber-500">
                      <AvatarImage src={user?.avatar} />
                      <AvatarFallback className="bg-amber-100 text-amber-800">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2">Account</p>
                  
                  <Link
                    href="/dashbaord"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium py-2 flex items-center gap-2',
                      pathname === '/dashboard' 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-slate-600 dark:text-slate-400'
                    )}
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                  </Link>
                  
                  <Link
                    href="/dashbaord/saved"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <Heart className="w-5 h-5" />
                    Saved Properties
                  </Link>
                  
                  <Link
                    href="/dashbaord/searches"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <Search className="w-5 h-5" />
                    Saved Searches
                  </Link>
                  
                  <Link
                    href="/dashbaord/tours"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <Calendar className="w-5 h-5" />
                    Tour Requests
                  </Link>
                  
                  <Link
                    href="/dashbaord/settings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <Settings className="w-5 h-5" />
                    Settings
                  </Link>
                  
                  <hr className="border-slate-200 dark:border-slate-800" />
                  
                  <button
                    onClick={handleLogout}
                    className="text-lg font-medium py-2 flex items-center gap-2 text-red-600 w-full text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                // Guest Mobile Menu
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Heart, 
  Search, 
  Calendar, 
  Settings, 
  User 
} from 'lucide-react';
import { cn } from '../lib/utils';

const sidebarItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/saved', label: 'Saved Properties', icon: Heart },
  { href: '/dashboard/searches', label: 'Saved Searches', icon: Search },
  { href: '/dashboard/tours', label: 'Tour Requests', icon: Calendar },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              <div className="mb-8 px-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                    <User className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">John Doe</p>
                    <p className="text-sm text-slate-500">john@example.com</p>
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      'hover:bg-white dark:hover:bg-slate-900',
                      'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
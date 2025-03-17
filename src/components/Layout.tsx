
import React from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="font-bold text-xl md:text-2xl">
            <span className="gradient-text">TechFix</span> <span className="text-primary font-normal">Doorstep</span>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>
      <main className={cn("container py-6 md:py-10", className)}>
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © 2024 TechFix Doorstep. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ onToggleSidebar, isSidebarOpen }: NavbarProps) => {
  return (
    <nav className="pks-navbar fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/favicon.jpg" 
            alt="PKS Logo" 
            className="w-10 h-10 rounded-lg object-cover border-2 border-primary"
          />
          <span className="text-xl font-bold text-gradient-pks">PKS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="/" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Beranda
          </a>
          <a 
            href="/events" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Event
          </a>
          <a 
            href="/struktur-organisasi" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Struktur
          </a>
          <a 
            href="/galeri" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Galeri
          </a>
          <a 
            href="/perekrutan" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Perekrutan
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
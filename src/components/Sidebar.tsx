import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Event", href: "/events" },
    { label: "Struktur Organisasi", href: "/struktur-organisasi" },
    { label: "Galeri", href: "/galeri" },
    { label: "Perekrutan", href: "/perekrutan" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "pks-sidebar fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <img 
                src="/favicon.jpg" 
                alt="PKS Logo" 
                className="w-10 h-10 rounded-lg object-cover border-2 border-primary"
              />
              <span className="text-xl font-bold text-gradient-pks">PKS</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-sidebar-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block text-lg font-semibold text-sidebar-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-sidebar-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 PKS - Patroli Keamanan Sekolah
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
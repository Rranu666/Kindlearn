import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import NotificationCenter from '@/components/notifications/NotificationCenter';
import { useUILanguage } from '@/lib/UILanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useUILanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="KindLearn logo" className="w-9 h-9 rounded-xl shadow-md" width="36" height="36" />
          <span className="font-extrabold text-xl tracking-tight">KindLearn</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/select-language" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav_challenge}
          </Link>
          <Link to="/kids" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav_kids}
          </Link>
          <Link to="/help" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Help
          </Link>
          <LanguageSwitcher />
          <NotificationCenter />
          <Link to="/profile" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/select-language">
            <Button className="rounded-xl font-semibold shadow-sm">{t.nav_start}</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Link to="/select-language" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">
                {t.nav_challenge}
              </Link>
              <Link to="/kids" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">
                {t.nav_kids}
              </Link>
              <Link to="/help" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">
                Help
              </Link>
              <div className="py-1"><LanguageSwitcher /></div>
              <Link to="/select-language" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-xl font-semibold">{t.nav_start}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
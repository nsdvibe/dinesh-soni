"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { LinkButton } from "@/components/ui/GoldButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative w-full max-w-6xl rounded-full transition-all duration-300",
          scrolled
            ? "glass py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
            : "border border-transparent py-3"
        )}
      >
        {/* Gold border-beam travelling around the navbar every 5s */}
        <span className="border-beam" aria-hidden="true" />

        <div className="relative flex items-center justify-between gap-4 pl-5 pr-3 sm:pl-6">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-2" aria-label={`${site.name} — home`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-sm font-semibold text-gold">
              DS
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-ink">
              {site.name}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                    isActive(item.href)
                      ? "text-gold"
                      : "text-ink-soft hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-gold/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LinkButton href="/contact" size="md">
                Book Me
              </LinkButton>
            </div>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-gold/60 hover:text-gold lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-stage/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl border border-line bg-surface/95 p-6 shadow-2xl backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1">
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-lg font-serif transition-colors",
                        isActive(item.href)
                          ? "bg-gold/10 text-gold"
                          : "text-ink hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5">
                <LinkButton href="/contact" size="lg" className="w-full">
                  Book Me
                </LinkButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

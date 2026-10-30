import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { navCta, navItems } from '../../data/navigation'
import { cn } from '../../lib/cn'
import { Button, Container, NavLink } from '../ui'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'border-b border-black/5 bg-white/80 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" className="shrink-0 justify-self-start" onClick={closeMenu}>
          <img src={logo} alt="Nutrideia" className="h-12 w-auto lg:h-14" />
        </a>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={navCta.href}
          variant="solid"
          size="sm"
          className="justify-self-end max-lg:hidden"
        >
          {navCta.label}
        </Button>

        <button
          type="button"
          className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              'h-0.5 w-6 bg-[#1a1a1a] transition-transform duration-300',
              menuOpen && 'translate-y-2 rotate-45',
            )}
          />
          <span
            className={cn('h-0.5 w-6 bg-[#1a1a1a] transition-opacity duration-300', menuOpen && 'opacity-0')}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-[#1a1a1a] transition-transform duration-300',
              menuOpen && '-translate-y-2 -rotate-45',
            )}
          />
        </button>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Navegação mobile"
        className={cn(
          'overflow-hidden transition-[max-height] duration-300 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <Container className="flex flex-col gap-6 pt-2 pb-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} className="text-base" onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button href={navCta.href} variant="solid" className="self-start" onClick={closeMenu}>
            {navCta.label}
          </Button>
        </Container>
      </nav>
    </header>
  )
}

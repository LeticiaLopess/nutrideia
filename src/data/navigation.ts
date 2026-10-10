export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Choque no Metabolismo', href: '#choque-no-metabolismo' },
  { label: 'Método', href: '#metodo' },
  { label: 'Resultados', href: '#resultados' },
]

export const navCta: NavItem = { label: 'Quero emagrecer', href: '#contato' }

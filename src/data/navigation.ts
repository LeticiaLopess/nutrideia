export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Método', href: '#metodo' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Minha história', href: '#sobre' },
]

export const whatsappHref =
  'https://wa.me/5521975719527?text=Ol%C3%A1%2C%20estava%20no%20site%20e%20queria%20saber%20mais%20sobre%20o%20M%C3%A9todo%20Nutrideia.'

export const navCta: NavItem = { label: 'Quero emagrecer', href: whatsappHref }

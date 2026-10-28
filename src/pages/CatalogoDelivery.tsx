import { useEffect, useMemo, useState } from 'react'
import andreiaHistory from '../assets/images/andreia-history.jpeg'
import logo from '../assets/images/logo.png'
import { Badge, Button, Container, LineIcon, ScriptText, Section } from '../components/ui'
import {
  cakeMacrosNote,
  cartLineTotal,
  cartTotal,
  deliveryCartWhatsappHref,
  deliveryCategories,
  deliveryInstagramHandle,
  deliveryInstagramHref,
  deliveryProducts,
  formatBRL,
  formatGrams,
  hasNutrition,
  type CartItem,
  type DeliveryCategory,
  type DeliveryProduct,
} from '../data/delivery'
import { cn } from '../lib/cn'

type CatalogFilter = 'Todos' | DeliveryCategory

const filters: CatalogFilter[] = ['Todos', ...deliveryCategories]

export function CatalogoDelivery() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  function addToCart(name: string) {
    setCart((current) => {
      const existing = current.find((item) => item.name === name)
      if (existing) {
        return current.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { name, quantity: 1 }]
    })
  }

  function decrement(name: string) {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function removeFromCart(name: string) {
    setCart((current) => current.filter((item) => item.name !== name))
  }

  function quantityOf(name: string) {
    return cart.find((item) => item.name === name)?.quantity ?? 0
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          <a href="/">
            <img src={logo} alt="Nutrideia" className="h-12 w-auto lg:h-14" />
          </a>
          <button
            type="button"
            aria-label={
              totalItems === 0
                ? 'Ver pedido'
                : `Ver pedido, ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`
            }
            onClick={() => setCartOpen(true)}
            className="relative flex size-12 cursor-pointer items-center justify-center rounded-full text-pink hover:bg-pink/10"
          >
            <LineIcon name="cart" className="size-7" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 flex min-w-5 items-center justify-center rounded-full bg-pink px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </Container>
      </header>

      <main>
        <Hero />
        <Catalog quantityOf={quantityOf} onAdd={addToCart} onDecrement={decrement} />
        <Closing />
      </main>

      <SiteFooter hasCartBar={totalItems > 0} />
      {totalItems > 0 && (
        <CartBar
          totalItems={totalItems}
          total={cartTotal(cart)}
          onOpen={() => setCartOpen(true)}
        />
      )}
      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onAdd={addToCart}
        onDecrement={decrement}
        onRemove={removeFromCart}
      />
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7fa] pt-28 pb-16 md:flex md:min-h-[calc(100svh-5rem)] md:items-center md:pt-24 md:pb-16">
      <Container className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 lg:gap-16">
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-pink mb-4">Delivery Nutrideia</p>

          <h1 className="mt-5 max-w-xl pb-3 text-[clamp(2.4rem,5.2vw,3.75rem)] leading-[0.5] font-bold tracking-tight text-[#1a1a1a]">
            <span className="block">O cardápio pra</span>
            <span className="block whitespace-nowrap">
              comer{' '}
              <span className="font-display inline-block translate-y-[0.08em] text-[1.28em] leading-none font-normal text-pink">
                <ScriptText>feliz.</ScriptText>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-[1.6] text-graphite lg:text-lg">
            Pães, bolos e doces proteicos do delivery, com tabela nutricional, proteína por porção
            e calorias pra você escolher sem chute.
          </p>

          <Button href="#cardapio" size="lg" className="mt-8 max-sm:w-full max-sm:text-[15px]">
            Ver o cardápio
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-[26rem] md:translate-y-6 lg:max-w-[30rem] lg:translate-y-8">
          <img
            src={andreiaHistory}
            alt="Andreia Oliveira olhando um pedaço de bolo na cozinha"
            className="aspect-[4/5] max-h-[min(34rem,calc(100svh-10rem))] w-full rounded-[2rem] object-cover object-[center_22%] brightness-110 md:max-h-[min(30rem,calc(100svh-12rem))]"
          />
        </div>
      </Container>
    </section>
  )
}

function Catalog({
  quantityOf,
  onAdd,
  onDecrement,
}: {
  quantityOf: (name: string) => number
  onAdd: (name: string) => void
  onDecrement: (name: string) => void
}) {
  const [filter, setFilter] = useState<CatalogFilter>('Todos')

  const groups = useMemo(() => {
    const categories = filter === 'Todos' ? deliveryCategories : [filter]
    return categories
      .map((category) => ({
        category,
        items: deliveryProducts.filter((product) => product.category === category),
      }))
      .filter((group) => group.items.length > 0)
  }, [filter])

  return (
    <Section id="cardapio" className="scroll-mt-20 bg-[#fff7fa] pt-16 lg:pt-20">
      <Container className="flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <Badge>Cardápio</Badge>
          <h2 className="mt-6 text-3xl leading-[1.15] font-bold tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Escolha o que vai <span className="text-pink">chegar na sua casa.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-graphite lg:text-lg">
            Foto, proteína e calorias na frente. Selecione os produtos e clique em Enviar pedido no
            WhatsApp.
          </p>
        </div>

        <div className="sticky top-20 z-40 mt-10 w-full bg-[#fff7fa]/90 py-3 backdrop-blur-md">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filtrar produtos"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors',
                  filter === item
                    ? 'bg-cta text-white'
                    : 'border border-black/10 bg-white text-graphite hover:bg-pink/5',
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-12">
          {groups.map((group) => (
            <section key={group.category} aria-labelledby={`categoria-${group.category}`}>
              {filter === 'Todos' && (
                <h3
                  id={`categoria-${group.category}`}
                  className="mb-6 text-2xl font-bold tracking-tight text-[#1a1a1a]"
                >
                  {group.category}
                </h3>
              )}
              <ul className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((product) => (
                  <li key={product.name}>
                    <ProductCard
                      product={product}
                      quantity={quantityOf(product.name)}
                      onAdd={() => onAdd(product.name)}
                      onDecrement={() => onDecrement(product.name)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ProductCard({
  product,
  quantity,
  onAdd,
  onDecrement,
}: {
  product: DeliveryProduct
  quantity: number
  onAdd: () => void
  onDecrement: () => void
}) {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const nutrition = hasNutrition(product)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgb(230_0_126/0.08)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#fdeef5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-pink uppercase backdrop-blur-sm">
          {product.category}
        </span>
        {product.protein !== undefined && (
          <span className="absolute right-3 bottom-3 rounded-full bg-[#1a1a1a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {formatGrams(product.protein)} proteína
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-[#1a1a1a]">{product.name}</h3>
          <p className="shrink-0 text-lg font-bold text-pink">{formatBRL(product.price)}</p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-[1.5] text-graphite">{product.description}</p>
        <p className="mt-2 text-xs text-graphite/70">{product.serving}</p>

        {nutrition ? (
          <dl className="mt-4 grid grid-cols-3 gap-2">
            <MacroChip label="Calorias" value={`${product.calories} kcal`} />
            <MacroChip label="Proteína" value={formatGrams(product.protein)} highlight />
            <MacroChip label="Carbo" value={formatGrams(product.carbs)} />
          </dl>
        ) : product.protein !== undefined ? (
          <dl className="mt-4 grid grid-cols-3 gap-2">
            <MacroChip label="Proteína" value={formatGrams(product.protein)} highlight />
          </dl>
        ) : null}

        {nutrition && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              className="cursor-pointer text-sm font-semibold text-pink hover:underline"
              aria-expanded={detailsOpen}
            >
              {detailsOpen ? 'Ocultar tabela' : 'Ver tabela nutricional'}
            </button>
            {detailsOpen && (
              <div className="mt-3">
                <NutritionTable product={product} />
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-5">
          {quantity > 0 ? (
            <QuantityStepper quantity={quantity} onAdd={onAdd} onDecrement={onDecrement} />
          ) : (
            <Button variant="solid" size="sm" className="w-full" onClick={onAdd}>
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

function MacroChip({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className={cn('rounded-xl px-2 py-2.5 text-center', highlight ? 'bg-pink/10' : 'bg-[#fff7fa]')}>
      <dt className="text-[10px] font-semibold tracking-[0.12em] text-graphite/70 uppercase">{label}</dt>
      <dd className={cn('mt-1 text-sm font-semibold', highlight ? 'text-pink' : 'text-[#1a1a1a]')}>
        {value}
      </dd>
    </div>
  )
}

function NutritionTable({ product }: { product: DeliveryProduct }) {
  if (!hasNutrition(product)) return null

  const rows = [
    [
      { label: 'Calorias', value: `${product.calories} kcal` },
      { label: 'Proteínas', value: formatGrams(product.protein) },
    ],
    [
      { label: `Carboidratos${product.carbsNote ? '*' : ''}`, value: formatGrams(product.carbs) },
      { label: 'Gorduras', value: formatGrams(product.fat) },
    ],
  ]

  return (
    <div className="mt-3">
      <table className="w-full overflow-hidden rounded-xl text-left text-sm">
        <caption className="sr-only">Tabela nutricional de {product.name}</caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0].label}>
              {row.map((cell) => (
                <td key={cell.label} className="w-1/2 p-0 align-top">
                  <div className="border border-pink/15">
                    <p className="bg-pink px-3 py-2 text-xs font-semibold text-white">{cell.label}</p>
                    <p className="bg-[#fff7fa] px-3 py-3 text-base font-semibold text-[#1a1a1a]">
                      {cell.value}
                    </p>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {product.carbsNote && (
        <p className="mt-3 text-[11px] leading-[1.45] text-graphite/60">*{cakeMacrosNote}</p>
      )}
    </div>
  )
}

function QuantityStepper({
  quantity,
  onAdd,
  onDecrement,
  className,
}: {
  quantity: number
  onAdd: () => void
  onDecrement: () => void
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex h-10 items-center justify-between rounded-md border border-pink bg-pink/5 px-2',
        className,
      )}
    >
      <button
        type="button"
        aria-label="Diminuir quantidade"
        onClick={onDecrement}
        className="flex size-8 cursor-pointer items-center justify-center rounded-md text-lg font-semibold text-pink hover:bg-pink/10"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-semibold text-[#1a1a1a]">{quantity}</span>
      <button
        type="button"
        aria-label="Aumentar quantidade"
        onClick={onAdd}
        className="flex size-8 cursor-pointer items-center justify-center rounded-md text-lg font-semibold text-pink hover:bg-pink/10"
      >
        +
      </button>
    </div>
  )
}

function Closing() {
  return (
    <Section className="bg-[#fff7fa] pt-10 lg:pt-14">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] bg-white px-6 py-14 text-center shadow-[0_20px_55px_rgb(230_0_126/0.14)] ring-1 ring-pink/15 sm:px-12 lg:py-16">
          <Badge>Pedido</Badge>
          <h2 className="mt-6 text-3xl leading-[1.15] font-bold tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Seu pedido sai daqui <span className="text-pink">pronto.</span>
          </h2>
          <p className="mt-3 max-w-sm text-base leading-[1.35] text-graphite lg:text-lg">
            Selecione os produtos no cardápio e clique em Enviar pedido no WhatsApp.
          </p>
          <Button href="#cardapio" size="lg" className="mt-10 max-sm:w-full max-sm:text-[15px]">
            Voltar ao cardápio
          </Button>
        </div>
      </Container>
    </Section>
  )
}

function SiteFooter({ hasCartBar }: { hasCartBar: boolean }) {
  return (
    <footer className={cn('border-t border-black/5 bg-[#fff7fa]', hasCartBar && 'pb-24')}>
      <Container className="flex flex-col items-center gap-8 py-12 text-center sm:py-16">
        <a href="/">
          <img src={logo} alt="Nutrideia" className="h-12 w-auto lg:h-14" />
        </a>

        <div className="flex flex-col items-center gap-3">
          <p className="max-w-md text-base leading-[1.6] text-graphite">
            Quer ver o dia a dia da cozinha e as novidades do cardápio? Segue a Andreia no Instagram.
          </p>
          <a
            href={deliveryInstagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-3 text-sm font-bold text-white hover:bg-pink/90"
          >
            <LineIcon name="instagram" className="size-5" />
            {deliveryInstagramHandle}
          </a>
        </div>

        <p className="text-xs text-graphite/70">© {new Date().getFullYear()} Nutrideia</p>
      </Container>
    </footer>
  )
}

function CartBar({
  totalItems,
  total,
  onOpen,
}: {
  totalItems: number
  total: number
  onOpen: () => void
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-white/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-graphite">
            {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </span>
          <span className="text-lg font-semibold text-[#1a1a1a]">{formatBRL(total)}</span>
        </div>
        <Button variant="solid" size="sm" onClick={onOpen}>
          Revisar pedido
        </Button>
      </Container>
    </div>
  )
}

function CartDrawer({
  cart,
  open,
  onClose,
  onAdd,
  onDecrement,
  onRemove,
}: {
  cart: CartItem[]
  open: boolean
  onClose: () => void
  onAdd: (name: string) => void
  onDecrement: (name: string) => void
  onRemove: (name: string) => void
}) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const checkoutHref = deliveryCartWhatsappHref(cart)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cartTotal(cart)

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-[visibility] duration-300',
        open ? 'visible' : 'invisible delay-150',
      )}
    >
      <button
        type="button"
        aria-label="Fechar pedido"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-[#1a1a1a]/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <aside
        aria-label="Carrinho de pedidos"
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-[-16px_0_40px_rgb(0_0_0/0.12)] transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-pink uppercase">Pedido</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#1a1a1a]">
              {totalItems === 0 ? 'Carrinho vazio' : `${totalItems} no carrinho`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-sm font-semibold text-graphite hover:text-pink"
          >
            Fechar
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <li className="mx-auto max-w-[16rem] pt-4 pb-10 text-center text-graphite">
              Adicione os produtos do cardápio para montar o pedido.
            </li>
          ) : (
            cart.map((item) => {
              const product = deliveryProducts.find((entry) => entry.name === item.name)

              return (
                <li key={item.name} className="border-b border-black/5 py-4">
                  <div className="flex items-start gap-3">
                    {product && (
                      <img
                        src={product.image}
                        alt=""
                        className="size-16 shrink-0 rounded-xl object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold text-[#1a1a1a]">{item.name}</p>
                          {product && (
                            <p className="mt-1 text-sm text-graphite">
                              {formatBRL(product.price)} cada
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="text-sm font-bold text-[#1a1a1a]">
                            {formatBRL(cartLineTotal(item))}
                          </p>
                          <button
                            type="button"
                            onClick={() => onRemove(item.name)}
                            className="cursor-pointer text-xs font-semibold tracking-wide text-graphite uppercase hover:text-pink"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                      <QuantityStepper
                        quantity={item.quantity}
                        onAdd={() => onAdd(item.name)}
                        onDecrement={() => onDecrement(item.name)}
                        className="mt-3"
                      />
                    </div>
                  </div>
                </li>
              )
            })
          )}
        </ul>

        <div className="border-t border-black/5 p-6">
          {cart.length === 0 ? (
            <Button variant="solid" size="lg" className="w-full" onClick={onClose}>
              Continuar escolhendo
            </Button>
          ) : (
            <>
              <div className="mb-4 flex items-end justify-between gap-3">
                <span className="text-sm text-graphite">Total dos produtos</span>
                <span className="text-2xl font-bold text-[#1a1a1a]">{formatBRL(total)}</span>
              </div>
              <Button href={checkoutHref} variant="solid" size="lg" className="w-full">
                Enviar pedido no WhatsApp
              </Button>
              <p className="mt-3 text-center text-xs leading-[1.45] text-graphite">
                O WhatsApp abre com a lista e o total. A entrega é à parte.
              </p>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}

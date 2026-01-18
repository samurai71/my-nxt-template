'use client'

import * as React from 'react'

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Description placeholder
 *
 * @typedef {CarouselApi}
 */
type CarouselApi = UseEmblaCarouselType[1]
/**
 * Description placeholder
 *
 * @typedef {UseCarouselParameters}
 */
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
/**
 * Description placeholder
 *
 * @typedef {CarouselOptions}
 */
type CarouselOptions = UseCarouselParameters[0]
/**
 * Description placeholder
 *
 * @typedef {CarouselPlugin}
 */
type CarouselPlugin = UseCarouselParameters[1]
/**
 * Description placeholder
 *
 * @typedef {CarouselProps}
 */
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}
/**
 * Description placeholder
 *
 * @typedef {CarouselContextProps}
 */
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps
/**
 * Description placeholder
 *
 * @type {*}
 */
const CarouselContext = React.createContext<CarouselContextProps | null>(null)
/**
 * Description placeholder
 *
 * @returns {*}
 */
function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }
  return context
}
/**
 * Description placeholder
 *
 * @param {(React.ComponentProps<'div'> & CarouselProps)} param0
 * @param {*} [param0.orientation='horizontal']
 * @param {*} param0.opts
 * @param {*} param0.setApi
 * @param {*} param0.plugins
 * @param {*} param0.className
 * @param {*} param0.children
 * @param {*} param0....props
 * @returns {*}
 */
function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])
  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )
  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])
  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])
  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'div'>} param0
 * @param {React.ComponentProps<"div">} param0.className
 * @param {React.ComponentProps<"div">} param0....props
 * @returns {*}
 */
function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'div'>} param0
 * @param {React.ComponentProps<"div">} param0.className
 * @param {React.ComponentProps<"div">} param0....props
 * @returns {*}
 */
function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof Button>} param0
 * @param {React.ComponentProps<any>} param0.className
 * @param {React.ComponentProps<any>} [param0.variant='outline']
 * @param {React.ComponentProps<any>} [param0.size='icon']
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof Button>} param0
 * @param {React.ComponentProps<any>} param0.className
 * @param {React.ComponentProps<any>} [param0.variant='outline']
 * @param {React.ComponentProps<any>} [param0.size='icon']
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

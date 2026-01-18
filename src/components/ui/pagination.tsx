import * as React from 'react'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { type Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'nav'>} param0
 * @param {React.ComponentProps<"nav">} param0.className
 * @param {React.ComponentProps<"nav">} param0....props
 * @returns {*}
 */
function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'ul'>} param0
 * @param {React.ComponentProps<"ul">} param0.className
 * @param {React.ComponentProps<"ul">} param0....props
 * @returns {*}
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'li'>} param0
 * @param {React.ComponentProps<"li">} param0....props
 * @returns {*}
 */
function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}
/**
 * Description placeholder
 *
 * @typedef {PaginationLinkProps}
 */
type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>
/**
 * Description placeholder
 *
 * @param {PaginationLinkProps} param0
 * @param {*} param0.className
 * @param {*} param0.isActive
 * @param {*} [param0.size='icon']
 * @param {*} param0....props
 * @returns {*}
 */
function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PaginationLink>} param0
 * @param {React.ComponentProps<({ className, isActive, size, ...props }: any) => any>} param0.className
 * @param {React.ComponentProps<({ className, isActive, size, ...props }: any) => any>} param0....props
 * @returns {any>) => any}
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PaginationLink>} param0
 * @param {React.ComponentProps<({ className, isActive, size, ...props }: any) => any>} param0.className
 * @param {React.ComponentProps<({ className, isActive, size, ...props }: any) => any>} param0....props
 * @returns {any>) => any}
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  )
}
/**
 * Description placeholder
 *
 * @param {React.ComponentProps<'span'>} param0
 * @param {React.ComponentProps<"span">} param0.className
 * @param {React.ComponentProps<"span">} param0....props
 * @returns {*}
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}
export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

'use client'

import * as React from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof SeparatorPrimitive.Root>} param0
 * @param {React.ComponentProps<any>} param0.className
 * @param {React.ComponentProps<any>} [param0.orientation='horizontal']
 * @param {React.ComponentProps<any>} [param0.decorative=true]
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  )
}
export { Separator }

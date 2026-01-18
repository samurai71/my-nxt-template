'use client'

import * as React from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PopoverPrimitive.Root>} param0
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PopoverPrimitive.Trigger>} param0
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PopoverPrimitive.Content>} param0
 * @param {React.ComponentProps<any>} param0.className
 * @param {React.ComponentProps<any>} [param0.align='center']
 * @param {React.ComponentProps<any>} [param0.sideOffset=4]
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof PopoverPrimitive.Anchor>} param0
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

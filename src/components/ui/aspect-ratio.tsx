'use client'

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

/**
 * Description placeholder
 *
 * @param {React.ComponentProps<typeof AspectRatioPrimitive.Root>} param0
 * @param {React.ComponentProps<any>} param0....props
 * @returns {*}
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}
export { AspectRatio }

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Description placeholder
 *
 * @export
 * @param {...ClassValue[]} inputs
 * @returns {*}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

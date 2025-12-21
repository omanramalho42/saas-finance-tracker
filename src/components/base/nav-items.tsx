'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import React from 'react'

import { cn } from '@/lib/utils'

import { NAV_ITEMS } from '@/lib/constants'

const NavItems:React.FC = () => {
  const pathname: string = usePathname()

  const isActive = (path: string) => {
    if(path === '/') return pathname === '/'

    return pathname.startsWith(path)
  }

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={
              cn(
                'hover:text-yellow-500 transition-colors', 
                {
                  'text-gray-100': isActive(href)
                }
              )
            }
          >
            { label }
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
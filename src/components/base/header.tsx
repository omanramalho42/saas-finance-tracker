import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

import { searchStocks } from "@/lib/actions/finnhub.actions"

import NavItems from './nav-items'
import UserDropdown from './user-dropdown'

const Header:React.FC<{ user: User }> = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();

  return (
    <header className='sticky top-0 header'>
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="saas-finance-tracker"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          {/* Navitems */}
          <NavItems
            initialStocks={initialStocks}
          />
        </nav>
        {/* UserDropdown */}
        <UserDropdown
          user={user}
          initialStocks={initialStocks}
        />
      </div>
    </header>
  )
}

export default Header
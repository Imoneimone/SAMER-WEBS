
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from 'next/link'

export function Logo() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link href='/' className='flex items-center space-x-2'>
      <div className={cn(
        'transition-all duration-200 text-2xl font-bold tracking-wider',
        scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'
      )}>
        SAMER
      </div>
    </Link>
  )
}

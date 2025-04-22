import { DashboardNav } from "@/components/dashboard/DashboardNav"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavVisible(currentScrollY <= lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className='min-h-screen flex'>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='fixed top-4 left-4 z-40'>
              <Menu className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-64 p-0'>
            <SheetHeader className='px-6 py-4 border-b'>
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <DashboardNav />
          </SheetContent>
        </Sheet>
      ) : (
        <AnimatePresence>
          {isNavVisible && (
            <motion.div
              initial={{ x: -264 }}
              animate={{ x: 0 }}
              exit={{ x: -264 }}
              transition={{ duration: 0.2 }}
              className='relative'
            >
              <DashboardNav />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <main className='flex-1 overflow-auto'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8 py-6 max-w-7xl'>
          {children}
        </div>
      </main>
    </div>
  )
}
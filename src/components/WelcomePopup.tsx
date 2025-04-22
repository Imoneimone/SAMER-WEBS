
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    if (!hasSeenWelcome) {
      setIsOpen(true)
      localStorage.setItem("hasSeenWelcome", "true")
      setTimeout(() => setIsOpen(false), 1000)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="bg-background/80 backdrop-blur-sm border-none shadow-none">
            <DialogHeader>
              <DialogTitle className="sr-only">Welcome Message</DialogTitle>
            </DialogHeader>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-8"
            >
              <h2 className="text-2xl font-bold mb-2">Selamat Datang</h2>
              <p className="text-xl text-primary">It&apos;s SAMER time!</p>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
